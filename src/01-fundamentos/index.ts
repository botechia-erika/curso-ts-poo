// tipagem implícita
let num = 1.1;
let text = 'texto';
let bool = true;
let arr = [];

function fn1(): void {
  console.log('Eu sou uma função');
}

// tipagem explicita
const numero: number = 1;
const texto: string = 'texto';
const booleano: boolean = false;
const array1: Array<string> = [];
const x: any = '';

const fn2 = () => {
  console.log('Eu também sou uma função');
};
