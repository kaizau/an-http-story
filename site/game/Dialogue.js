import { friendVoice, foeVoice } from "./voices";
import { playSound } from "./sounds";
import { delay } from "./utils";
const {
  MeshBuilder,
  StandardMaterial,
  DynamicTexture,
  Color3,
  Vector3,
} = BABYLON;

const layerHeight = 0.05;
const layerWidth = 1.5;
const textRes = 512;
const textSize = 16;

export class Dialogue {
  constructor(scene) {
    this._isoCam = scene.activeCamera;

    this._layer = MeshBuilder.CreatePlane("dialogue", {
      height: layerHeight,
      width: layerWidth,
    });
    this._layer.parent = this._isoCam;
    this._layer.position = new Vector3(0, -0.5, 2);
    this._layer.isPickable = false;

    this._bg = this._layer.clone("dialogueBg");
    this._bg.position.z += 0.01;
    this._bg.isVisible = false;

    this._texture = new DynamicTexture("dialogue", {
      height: layerHeight * textRes,
      width: layerWidth * textRes,
    });
    this._texture.hasAlpha = true;
    this._show(""); // Required to add to material

    const material = new StandardMaterial("dialogue");
    material.specularColor = Color3.Black();
    const bgMaterial = material.clone();

    material.emissiveColor = Color3.White();
    material.diffuseTexture = this._texture;
    this._layer.material = material;

    bgMaterial.diffuseColor = Color3.Black();
    bgMaterial.alpha = 0.6;
    this._bg.material = bgMaterial;
  }

  $attachCamera(camera) {
    if (camera) {
      this._layer.parent = camera;
      this._bg.parent = camera;
    } else {
      this._layer.parent = this._isoCam;
      this._bg.parent = this._isoCam;
    }
  }

  async $load(lines) {
    if (!lines.length) {
      return Promise.resolve();
    }

    if (!speechSynthesis || process.env.DEBUG) {
      for (let line of lines) {
        let speaker = "friend";
        if (line.slice(0, 5) === "FOE: ") {
          line = line.slice(5);
          speaker = "foe";
        }
        this._show(line, speaker);
        playSound(speaker);
        const duration = line.length < 20 ? 2000 : line.length * 100;
        await delay(duration);
      }
    } else {
      for (let line of lines) {
        let speaker = "friend";
        let voice = friendVoice;
        if (line.slice(0, 5) === "FOE: ") {
          line = line.slice(5);
          speaker = "foe";
          voice = foeVoice;
        }
        await delay(400); // Small delay to sync with speech
        this._show(line, speaker);
        await this._speak(line, voice);
      }
    }
    this._clear();
  }

  _show(text, speaker) {
    this._clear();
    const textFont = `${textSize}px monospace`;
    const textColor = speaker === "foe" ? "#f88" : "#fff";

    const ctx = this._texture.getContext();
    ctx.font = textFont;
    const textWidth = ctx.measureText(text).width;
    const margin = (layerWidth * textRes - textWidth) / 2;

    this._texture.drawText(
      text,
      margin,
      textSize,
      textFont,
      textColor,
      "transparent"
    );
    if (text) {
      this._bg.isVisible = true;
    }
  }

  _clear() {
    const ctx = this._texture.getContext();
    ctx.clearRect(0, 0, layerWidth * textRes, layerHeight * textRes);
    this._texture.update();
    this._bg.isVisible = false;
  }

  _speak(text, voice) {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      if (voice) {
        utterance.voice = voice.voice;
        utterance.pitch = voice.pitch;
        utterance.rate = voice.rate;
      }
      utterance.onend = resolve;
      speechSynthesis.speak(utterance);
    });
  }
}
