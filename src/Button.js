const kButton = Symbol("button");

const fAddClassName = Symbol("addClassName");
const fClassName = Symbol("className");

export default class Button {
  [kButton] = document.createElement("button");
  [fClassName] = "btn";

  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  [fAddClassName]() {
    this[kButton].className = this[fClassName];
  }

  className(classNames) {
    this[kButton].className = `${this[fClassName]} ${classNames}`;
    return this;
  }

  text(text) {
    this[kButton].textContent = text;
    return this;
  }

  onClick(action) {
    this[kButton].addEventListener("click", (event) => action(event));
    return this;
  }

  appendIn(element) {
    element.appendChild(this[kButton]);
  }
}
