export class Coracao{
  constructor(
    public cheio: boolean,
    public baseHref: string = '/',
    public coracaoCheio: string = baseHref + "assets/coracao_cheio.png",
    public coracaoVazio: string = baseHref + "assets/coracao_vazio.png"
  ){}

  exibeCoracao = (): string => this.cheio? this.coracaoCheio: this.coracaoVazio;
}