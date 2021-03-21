export const template = (chars) => chars.reduce(
  (html, char) => `${html}<button type="button" class="btn btn-outline-secondary" value="${char}">${char}</button>`,
  '',
);
