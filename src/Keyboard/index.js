import { chars } from './chars';
import { template } from './template';

export const Keyboard = (element, checkChar) => {
  const init = () => {
    renderButtons();

    const buttons = element.querySelectorAll('button');
    Array.from(buttons).map((btn) => btn.addEventListener('click', (e) => {
      const selectedChar = e.target.value;
      const foundChar = checkChar(selectedChar);

      const className = foundChar ? 'disabled-success' : 'disabled-danger';
      e.target.classList.add(className);
      e.target.disabled = true;
    }));
  };

  const renderButtons = () => element.innerHTML = template(chars);

  return { init };
};
