import videojs from "video.js";

const Button = videojs.getComponent("Button");

export function registerSkipRecapButton() {
  if (videojs.getComponent("SkipRecapButton")) return;

  class SkipRecapButton extends Button {
    constructor(player, options) {
      super(player, options);

      this.addClass("vjs-skip-recap");     // your custom styling
      this.controlText("Skip Recap");      // tooltip for accessibility

      // 👇 Add visible text
      this.el().innerText = "Skip Recap";
    }

    handleClick() {
      // UI only for now
    }
  }

  videojs.registerComponent("SkipRecapButton", SkipRecapButton);
}
