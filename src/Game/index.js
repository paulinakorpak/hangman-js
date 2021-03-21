import { Phrase } from '../Phrase';
import { Keyboard } from '../Keyboard';
import { Canvas } from '../Canvas';

export const Game = (element) => {
  let phrase;
  let keyboard;
  let canvas;

  const init = () => {
    const phraseElement = element.querySelector('.phrase');
    phrase = Phrase(phraseElement);
    phrase.init();

    const keyboardElement = element.querySelector('.keyboard');
    keyboard = Keyboard(keyboardElement, checkChar);
    keyboard.init();

    const canvasElement = element.querySelector('.canvas');
    canvas = Canvas(canvasElement);
    canvas.init();
  };

  const checkChar = (selectedChar) => {
    const found = phrase.checkChar(selectedChar);

    if (!found) {
      canvas.draw();
    }

    return found;
  };

  return { init };
};
