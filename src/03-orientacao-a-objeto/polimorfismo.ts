abstract class Animal {
  constructor(public nome: string) {}

  emitirSom(): void {
    console.log('Fazendo algum som...');
  }
}

class Cachorro extends Animal {
  emitirSom(): void {
    console.log('Au au!');
  }
}

class Gato extends Animal {
  emitirSom(): void {
    console.log('Miau!');
  }
}

const cachorro = new Cachorro('Dog');
cachorro.emitirSom();

const gato = new Gato('Cat');
gato.emitirSom();
