import { chars } from './chars';
import { template } from './template';

export const Keyboard = (element) => {
  const init = () => {
    renderButtons();

    const buttons = element.querySelectorAll('button');
    Array.from(buttons).map((btn) => btn.addEventListener('click', (e) => {
      e.target.classList.add('disabled-success');
    }));
  };

  const renderButtons = () => element.innerHTML = template(chars);

  return { init };
};
