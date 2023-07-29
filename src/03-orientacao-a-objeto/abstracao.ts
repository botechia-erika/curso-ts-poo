interface Taxa {
  mudarTaxa(valor: number): void;
}

class ContaCorrente implements Taxa {
  mudarTaxa(valor: number): void {}
}

const contaCorrente = new ContaCorrente();
contaCorrente.mudarTaxa(5);
