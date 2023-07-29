type PersonPrintableProps = Pick<
  Person,
  {
    [T in keyof Person]: Person[T] extends Function ? never : T;
  }[keyof Person]
>;

class Person {
  constructor(
    public nome: string,
    public idade: number,
    public email: string
  ) {}

  apresentar(): void {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }

  imprimir(props?: {
    [K in keyof PersonPrintableProps]?: boolean;
  }) {
    const allKeys = Object.keys(this);
    const propsKey = props ? Object.keys(props) : [];

    let hasOnlyFalseValuesInProps = false;
    if (props) {
      const values = [...new Set(Object.values(props))];

      if (values.length === 1 && values[0] === false) {
        hasOnlyFalseValuesInProps = true;
      }
    }

    for (const key of allKeys) {
      if (
        props
          ? hasOnlyFalseValuesInProps
            ? !propsKey.includes(key) &&
              !props[key as keyof PersonPrintableProps]
            : props[key as keyof PersonPrintableProps]
          : true
      ) {
        switch (key) {
          case 'nome':
            console.log('Nome:', this[key]);
            break;
          case 'idade':
            console.log('Idade:', this[key]);
            break;
          case 'email':
            console.log('Email:', this[key]);
            break;
          default:
            break;
        }
      }
    }
  }
}

const pessoa1 = new Person('João', 25, 'joao@outlook.com');

pessoa1.apresentar();

console.log({ idade: true });
pessoa1.imprimir({ idade: true });
console.log();

console.log({ idade: false });
pessoa1.imprimir({ idade: false });
console.log();

console.log({ nome: true, idade: false });
pessoa1.imprimir({ nome: true, idade: false });
console.log();

console.log({ nome: false, idade: false });
pessoa1.imprimir({ nome: false, idade: false });
console.log();

console.log({ nome: true, idade: true });
pessoa1.imprimir({ nome: true, idade: true });
console.log();

console.log({});
pessoa1.imprimir();
console.log();
