import { Phrase } from '../Phrase';
import { Keyboard } from '../Keyboard';

export const Game = (element) => {
  const init = () => {
    const phraseElement = element.querySelector('.phrase');
    Phrase(phraseElement).init();

    const keyboardElement = element.querySelector('.keyboard');
    Keyboard(keyboardElement).init();
  };

  return { init };
};
