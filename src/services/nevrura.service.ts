export class NevruraService {
  private lados = {
    ladoMaior: 0,
    ladoMenor: 0,
  };
  private nevrurasRecomendadas: {
    tamanho: number;
    quantidade: number;
    desenhos: number;
  }[] = [
    { tamanho: 6.4, quantidade: 0, desenhos: 0 },
    { tamanho: 6.0, quantidade: 0, desenhos: 0 },
    { tamanho: 5.8, quantidade: 0, desenhos: 0 },
    { tamanho: 5.6, quantidade: 0, desenhos: 0 },
    { tamanho: 5.4, quantidade: 0, desenhos: 0 },
    { tamanho: 5.2, quantidade: 0, desenhos: 0 },
    { tamanho: 5.0, quantidade: 0, desenhos: 0 },
    { tamanho: 4.8, quantidade: 0, desenhos: 0 },
    { tamanho: 4.6, quantidade: 0, desenhos: 0 },
    { tamanho: 4.4, quantidade: 0, desenhos: 0 },
    { tamanho: 4.2, quantidade: 0, desenhos: 0 },
    { tamanho: 4.0, quantidade: 0, desenhos: 0 },
    { tamanho: 3.8, quantidade: 0, desenhos: 0 },
    { tamanho: 3.6, quantidade: 0, desenhos: 0 },
    { tamanho: 3.4, quantidade: 0, desenhos: 0 },
    { tamanho: 3.2, quantidade: 0, desenhos: 0 },
    { tamanho: 3.0, quantidade: 0, desenhos: 0 },
    { tamanho: 2.8, quantidade: 0, desenhos: 0 },
    { tamanho: 2.6, quantidade: 0, desenhos: 0 },
    { tamanho: 2.4, quantidade: 0, desenhos: 0 },
    { tamanho: 2.2, quantidade: 0, desenhos: 0 },
    { tamanho: 1.0, quantidade: 0, desenhos: 0 },
  ];
  private qtdNevruras: number = 0;

  constructor(lado1: number = 0, lado2: number = 0) {
    this.lados =
      lado1 > lado2
        ? { ladoMaior: lado1, ladoMenor: lado2 }
        : { ladoMaior: lado2, ladoMenor: lado1 };
    console.log(this.nevrurasRecomendadas);
    this.qtdNevruras = this.lados.ladoMaior * 2.5;
  }

  calcularNevrurasRecomendadas(): {
    tamanho: number;
    quantidade: number;
    desenhos: number;
  }[] {
    let qtdRestante = this.qtdNevruras;
    let qtdDesenhos = 0;
    const nrLength = this.nevrurasRecomendadas.length - 1;
    while (qtdRestante > 0) {
      let largura = this.lados.ladoMenor;
      let i = 0;
      while (i < nrLength && largura >= 1 && qtdRestante > 0) {
        if (largura >= this.nevrurasRecomendadas[i].tamanho) {
          largura = parseFloat(
            (largura - this.nevrurasRecomendadas[i].tamanho).toFixed(2),
          );
          qtdDesenhos++;
          this.nevrurasRecomendadas[i].quantidade++;
          qtdRestante--;
        }
        if (largura < this.nevrurasRecomendadas[i].tamanho) {
          this.nevrurasRecomendadas[i].desenhos = qtdDesenhos;
          qtdDesenhos = 0;
          i++;
        }
      }
    }
    this.nevrurasRecomendadas = this.nevrurasRecomendadas.filter(
      (item) => item.quantidade > 0,
    );
    return this.nevrurasRecomendadas;
  }
}
