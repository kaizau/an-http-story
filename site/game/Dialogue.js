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

const layerHeight = 1;
const layerWidth = 10;
const textRes = 128;

export class Dialogue {
  constructor(scene) {
    this.scene = scene;
    this.layer = MeshBuilder.CreatePlane("dialogue", {
      height: layerHeight,
      width: layerWidth,
    });
    this.layer.position = new Vector3(5, 1, 8);
    this.layer.isPickable = false;

    this.texture = new DynamicTexture("dialogue", {
      height: layerHeight * textRes,
      width: layerWidth * textRes,
    });
    this.texture.hasAlpha = true;
    this.show(""); // Required to add to material

    const material = new StandardMaterial("dialogue");
    material.diffuseTexture = this.texture;
    this.layer.material = material;

    // TODO For extra fanciness... attach to camera?
    // this.layer.parent = this.scene.activeCamera;
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
        this.show(line);
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
        setTimeout(() => this.show(line), 400); // Small delay to sync with speech
        await this.speak(line, speaker);
      }
    }
    this.clear();
  }

  show(text) {
    this.clear();
    this.texture.drawText(
      text,
      0,
      36,
      "36px monospace",
      // "#000",
      // "#fff"
      "#fff",
      "transparent"
    );
  }

  clear() {
    const ctx = this.texture.getContext();
    ctx.clearRect(0, 0, layerWidth * textRes, layerHeight * textRes);
    this.texture.update();
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
