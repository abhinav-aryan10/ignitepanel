/* eslint-disable import/no-unresolved */
const buttonClickAudio = require('../assets/audios/button_click.mp3');

export function buttonClickSound() {
  const buttonAudio = new Audio(buttonClickAudio);
  buttonAudio.play();
}

export default buttonClickSound;
