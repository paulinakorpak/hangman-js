import { Phrase } from '../Phrase';

export const Game = (element) => {
  const init = () => {
    const phraseElement = element.querySelector('.phrase');
    Phrase(phraseElement).init();
  };

  return { init };
};
