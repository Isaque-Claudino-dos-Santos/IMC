/**
 * Calculation IMC
 */
Object.defineProperty(Math, "imc", {
  value: (weight, height) => Number(weight) / Number(height) ** 2,
});
