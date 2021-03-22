import { phrasesList } from './phrases';

export const Phrase = (element) => {
  const state = {
    phrase: null,
    category: null,
    numberOfChars: 0,
  };

  const init = () => {
    const categoryElement = element.querySelector('h6 span');
    const phraseElement = element.querySelector('h2');

    state.category = getRandomCategory();
    categoryElement.innerHTML = state.category;

    state.phrase = getRandomPhrase(state.category);
    state.numberOfChars = state.phrase.replace(/ /g, '').length;
    phraseElement.innerHTML = maskPhrase(state.phrase);
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

  const checkChar = (selectedChar) => {
    const chars = state.phrase.split('');
    const phraseSpans = Array.from(element.querySelectorAll('h2 span'));

    let found = false;
    chars.map((char, index) => {
      if (char.toLowerCase() === selectedChar) {
        phraseSpans[index].innerHTML = char;
        state.numberOfChars--;
        found = true;
      }
    });

    return found;
  };

  const isPhraseCompleted = () => state.numberOfChars === 0;

  const showMissingChars = () => {
    const chars = state.phrase.split('');
    const phraseSpans = Array.from(element.querySelectorAll('h2 span'));

    chars.map((char, index) => {
      if (phraseSpans[index].innerHTML === '_') {
        phraseSpans[index].innerHTML = char;
      }
    });
  };

  return {
    init, checkChar, isPhraseCompleted, showMissingChars,
  };
};
