class Calculadora {
  dividir(dividendo: number, divisor: number): number {
    if (divisor === 0) {
      throw new Error('Divisão por zero não é permitida.');
    }

    return dividendo / divisor;
  }
}

const calculadora = new Calculadora();

try {
  const resultado = calculadora.dividir(10, 0);
  console.log('Resultado:', resultado);
} catch (error) {
  if (error instanceof Error) {
    console.log('Erro:', error.message);
  }
}
