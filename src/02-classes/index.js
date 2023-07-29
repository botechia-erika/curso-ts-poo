class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa('João', 25);

pessoa1.apresentar();
