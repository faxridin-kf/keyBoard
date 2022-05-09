export class Keyboard {
  constructor(tag) {
    this.tag = document.createElement(tag);
    this.language = true;
    this.capsLock = false;
    this.upper = true;
  }
  addDataSet(item) {
    this.tag.dataset.key = item;
  }
  addClassList(className) {
    this.tag.classList.add(className);
  }

  innerText(text) {
    this.tag.textContent = text;
  }
  innerSrc(text) {
    this.tag.src = text;
  }
  innerAlt(text) {
    this.tag.alt = text;
  }
  appending(childTag) {
    this.tag.append(childTag);
  }
  innerHref(text) {
    this.tag.href = text;
  }
  setLanguage() {
    this.language = false;
  }
}
export const body = document.body;
