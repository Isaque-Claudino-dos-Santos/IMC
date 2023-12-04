import "./Math.js";
import Field from "./Field.js";
import Button from "./Button.js";

const form = document.querySelector("form");

form.onsubmit = (e) => e.preventDefault();

const heightField = new Field()
  .id("height")
  .label("Height<sub>cm</sub>")
  .inputProps({
    placeholder: "1.79",
    autocomplete: "off",
  })
  .appendIn(form);

const weightField = new Field()
  .id("weight")
  .label("Weight<sub>km</sub>")
  .inputProps({
    placeholder: "89.2",
    autocomplete: "off",
  })
  .appendIn(form);

new Button()
  .text("Calculate")
  .onClick(() => {
    const imc = Math.imc(
      heightField.getInputValue(),
      weightField.getInputValue()
    );

    document.querySelector(".output").textContent = imc;
  })
  .appendIn(form);
