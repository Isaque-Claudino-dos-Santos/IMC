/**
 * Calculation IMC
 */
Object.defineProperty(Math, "imc", {
  value: (weight, height) => weight / height ** 2,
});
