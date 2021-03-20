import { phrasesList } from './phrases';

export const Phrase = (element) => {
  let category = null;
  let phrase = null;

  const init = () => {
    const categoryElement = element.querySelector('h6 span');
    const phraseElement = element.querySelector('h2');

    category = getRandomCategory();
    categoryElement.innerHTML = category;

    phrase = maskPhrase(getRandomPhrase(category));
    phraseElement.innerHTML = phrase;
  };

  const getRandomCategory = () => {
    const categories = Object.keys(phrasesList);
    return categories[Math.floor(Math.random() * categories.length)];
  };

  const getRandomPhrase = (category) => {
    const phrases = phrasesList[category];
    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  const maskPhrase = (phrase) => {
    const chars = phrase.split('');
    return chars.reduce(
      (phrase, char) => {
        const maskingChar = char === ' ' ? '&emsp;' : '_';
        return `${phrase} <span>${maskingChar}</span>`;
      },
      '',
    );
  };

  return { init };
};
