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
    this.scene = scene;
    this.isoCam = this.scene.activeCamera;

    this.layer = MeshBuilder.CreatePlane("dialogue", {
      height: layerHeight,
      width: layerWidth,
    });
    this.layer.parent = this.isoCam;
    this.layer.position = new Vector3(0, -0.5, 2);
    this.layer.isPickable = false;

    this.bg = this.layer.clone("dialogueBg");
    this.bg.position.z += 0.01;
    this.bg.isVisible = false;

    this.texture = new DynamicTexture("dialogue", {
      height: layerHeight * textRes,
      width: layerWidth * textRes,
    });
    this.texture.hasAlpha = true;
    this.show(""); // Required to add to material

    const material = new StandardMaterial("dialogue");
    material.specularColor = Color3.Black();
    const bgMaterial = material.clone();

    material.emissiveColor = Color3.White();
    material.diffuseTexture = this.texture;
    this.layer.material = material;

    bgMaterial.diffuseColor = Color3.Black();
    bgMaterial.alpha = 0.6;
    this.bg.material = bgMaterial;
  }

  attachCamera(camera) {
    if (camera) {
      this.layer.parent = camera;
      this.bg.parent = camera;
    } else {
      this.layer.parent = this.isoCam;
      this.bg.parent = this.isoCam;
    }
  }

  async load(lines) {
    if (!lines.length) {
      return Promise.resolve();
    }

    if (!window.speechSynthesis || process.env.DEBUG) {
      for (let line of lines) {
        let speaker = "friend";
        if (line.slice(0, 5) === "FOE: ") {
          line = line.slice(5);
          speaker = "foe";
        }
        this.show(line, speaker);
        playSound(speaker);
        const duration = line.length < 20 ? 2000 : line.length * 100;
        await delay(duration);
      }
    } else {
      for (let line of lines) {
        let speaker = friendVoice;
        if (line.slice(0, 5) === "FOE: ") {
          line = line.slice(5);
          speaker = foeVoice;
        }
        setTimeout(() => this.show(line, speaker), 400); // Small delay to sync with speech
        await this.speak(line, speaker);
      }
    }
    this.clear();
  }

  show(text, speaker) {
    this.clear();
    const textFont = `${textSize}px monospace`;
    const textColor = speaker === "foe" ? "#f88" : "#fff";
    const ctx = this.texture.getContext();
    ctx.font = textFont;
    const textWidth = ctx.measureText(text).width;
    const margin = (layerWidth * textRes - textWidth) / 2;

    this.texture.drawText(
      text,
      margin,
      textSize,
      textFont,
      textColor,
      "transparent"
    );
    if (text) {
      this.bg.isVisible = true;
    }
  }

  clear() {
    const ctx = this.texture.getContext();
    ctx.clearRect(0, 0, layerWidth * textRes, layerHeight * textRes);
    this.texture.update();
    this.bg.isVisible = false;
  }

  speak(text, voice) {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      if (voice) {
        utterance.voice = voice.voice;
        utterance.pitch = voice.pitch;
        utterance.rate = voice.rate;
      }
      utterance.onend = resolve;
      window.speechSynthesis.speak(utterance);
    });
  }
}
