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
    const phraseCompleted = phrase.isPhraseCompleted();
    const canvasCompleted = canvas.isCanvasCompleted();

    const boardElement = element.querySelector('.board');
    const successElement = element.querySelector('.alert-success');
    const failureElement = element.querySelector('.alert-danger');

    if (found) {
      if (phraseCompleted) {
        boardElement.classList.add('d-none');
        successElement.classList.remove('d-none');
      }
    } else {
      canvas.draw();

      if (canvasCompleted) {
        phrase.showMissingChars();
        boardElement.classList.add('d-none');
        failureElement.classList.remove('d-none');
      }
    }

    return found;
  };

  return { init };
};
