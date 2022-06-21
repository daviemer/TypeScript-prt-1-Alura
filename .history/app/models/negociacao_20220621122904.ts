export class Negociacao {
  constructor(
    private data: Date, 
    private quantidade: number, 
    private valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor 
  }
}
