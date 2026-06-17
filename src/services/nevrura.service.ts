export class NevruraService {
  private lados = {
    ladoMaior: 0,
    ladoMenor: 0,
  };
  private nevrurasRecomendadas: {
    tamanho: number;
    quantidade: number;
    desenhos: number;
  }[] = [];
  private qtdNevruras: number = 0;

  constructor(lado1: number = 0, lado2: number = 0) {
    this.lados =
      lado1 > lado2
        ? { ladoMaior: lado1, ladoMenor: lado2 }
        : { ladoMaior: lado2, ladoMenor: lado1 };

    for (let i = 6.4; i > 0.9; i -= 0.2) {
      if (i === 6.2) continue;
      this.nevrurasRecomendadas.push({
        tamanho: parseFloat(i.toFixed(2)),
        quantidade: 0,
        desenhos: 0,
      });
      this.qtdNevruras = this.lados.ladoMaior * 2.5;
    }
  }

  calcularNevrurasRecomendadas(): {
    tamanho: number;
    quantidade: number;
    desenhos: number;
  }[] {
    let qtdRestante = this.qtdNevruras;
    let qtdDesenhos = 0;
    while (qtdRestante > 0) {
      let largura = this.lados.ladoMenor;
      let i = 0;
      while (
        i < this.nevrurasRecomendadas.length - 1 &&
        largura >= 1 &&
        qtdRestante > 0
      ) {
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
