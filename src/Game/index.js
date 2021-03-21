import { Phrase } from '../Phrase';
import { Keyboard } from '../Keyboard';

export const Game = (element) => {
  let phrase;
  let keyboard;

  const init = () => {
    const phraseElement = element.querySelector('.phrase');
    phrase = Phrase(phraseElement);
    phrase.init();

    const keyboardElement = element.querySelector('.keyboard');
    keyboard = Keyboard(keyboardElement, checkChar);
    keyboard.init();
  };

  const checkChar = (selectedChar) => phrase.checkChar(selectedChar);

  return { init };
};
