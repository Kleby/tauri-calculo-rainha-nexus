export class NevruraService {
  private lados = {
    ladoMaior: 0,
    ladoMenor: 0,
  };
  private nevrurasRecomendadas: { tamanho: number; quantidade: number }[] = [];
  private qtdNevruras: number = 0;

  constructor(lado1: number, lado2: number) {
    this.lados =
      lado1 > lado2
        ? { ladoMaior: lado1, ladoMenor: lado2 }
        : { ladoMaior: lado2, ladoMenor: lado1 };

    for (let i = 6.4; i > 0.9; i -= 0.2) {
      if (i === 6.2) continue;
      this.nevrurasRecomendadas.push({
        tamanho: parseFloat(i.toFixed(2)),
        quantidade: 0,
      });
      this.qtdNevruras = this.lados.ladoMaior * 2.5;
    }
  }

  calcularNevrurasRecomendadas(): { tamanho: number; quantidade: number }[] {
    let qtdRestante = this.qtdNevruras;
    let qtdTamanhos = this.nevrurasRecomendadas.length - 1;
    while (qtdRestante > 0) {
      let largura = this.lados.ladoMenor;
      for (let i = 0; i < qtdTamanhos && largura > 0; i++) {
        if (largura >= this.nevrurasRecomendadas[i].tamanho) {
          largura = parseFloat(
            (largura - this.nevrurasRecomendadas[i].tamanho).toFixed(2),
          );
          this.nevrurasRecomendadas[i].quantidade++;
          qtdRestante--;
        }
      }
    }
    return this.nevrurasRecomendadas.filter((item) => item.quantidade > 0);
  }

  obterQuantidadeNevruras(): number {
    return this.qtdNevruras;
  }
}
