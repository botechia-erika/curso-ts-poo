class Pessoa {
  constructor(public nome: string, public sobrenome: string) {}

  getFullName() {
    console.log(`${this.nome} ${this.sobrenome}`);
  }
}

class Mae extends Pessoa {}
class Pai extends Pessoa {}

class Filha extends Pessoa {
  constructor(mae: Mae, pai: Pai, nome: string) {
    super(nome, `${mae.sobrenome} ${pai.sobrenome}`);
  }
}

const mae = new Mae('Natalia', 'Santos');
const pai = new Pai('Jorge', 'Carvalho');

const filha = new Filha(mae, pai, 'Roberta');
filha.getFullName();
