const kContainer = Symbol("container");
const kLabel = Symbol("label");
const kInput = Symbol("input");

const fDefineClassNames = Symbol("defineClassNames");
const fAppendChildsInContainer = Symbol("");

const fSetup = Symbol("__setup__");
export default class Field {
  [kContainer] = document.createElement("div");
  [kLabel] = document.createElement("label");
  [kInput] = document.createElement("input");

  constructor() {
    this[fSetup]();
    this.appendIn = this.appendIn.bind(this);
  }

  [fDefineClassNames]() {
    const classNamePrefix = "field";
    const containerClassName = classNamePrefix;
    const labelClassName = `${classNamePrefix}-label`;
    const inputClassName = `${classNamePrefix}-input`;

    this[kContainer].className = containerClassName;
    this[kInput].className = labelClassName;
    this[kLabel].className = inputClassName;
  }

  [fAppendChildsInContainer]() {
    this[kContainer].appendChild(this[kLabel]);
    this[kContainer].appendChild(this[kInput]);
  }

  [fSetup]() {
    this[fDefineClassNames]();
    this[fAppendChildsInContainer]();
  }

  label(innerHTML) {
    this[kLabel].innerHTML = innerHTML;
    return this;
  }

  id(id) {
    this[kLabel].htmlFor = id;
    this[kInput].id = id;
    return this;
  }

  inputProps(props) {
    Object.assign(this[kInput], { ...props });
    return this;
  }

  appendIn(element) {
    element.appendChild(this[kContainer]);

    return {
      label: this[kLabel],
      input: this[kInput],
    };
  }
}
