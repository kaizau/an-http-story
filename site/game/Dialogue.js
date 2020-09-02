import { friendVoice, foeVoice } from "./voices";
import { playSound } from "./sounds";
import { delay } from "./util";

const { Layer, DynamicTexture } = window.BABYLON;

export class Dialogue {
  constructor(scene) {
    this.scene = scene;
    this.layer = new Layer("dialogueLayer", "", this.scene, false);
    this.layer.texture = new DynamicTexture(
      "dialogueText",
      {
        height: this.scene.getEngine().getRenderHeight(),
        width: this.scene.getEngine().getRenderWidth(),
      },
      this.scene,
      true
    );
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
    this.layer.texture.drawText(
      text,
      100,
      this.scene.getEngine().getRenderHeight() - 200,
      "24px monospace",
      "white",
      "transparent"
    );
  }

  clear() {
    const ctx = this.layer.texture.getContext();
    ctx.clearRect(
      0,
      0,
      this.scene.getEngine().getRenderWidth(),
      this.scene.getEngine().getRenderHeight()
    );
    this.layer.texture.update();
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
