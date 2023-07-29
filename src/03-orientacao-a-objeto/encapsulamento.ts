class ContaCorrente {
  private saldo: number;
  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  getSaldo() {
    console.log(this.saldo);
  }
}

const nubank = new ContaCorrente(1000);
nubank.getSaldo();
