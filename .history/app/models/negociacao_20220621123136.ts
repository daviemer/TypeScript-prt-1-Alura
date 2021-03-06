export class Negociacao {
  constructor(
    private _data: Date, 
    private quantidade: number, 
    private valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor 
  }

  get data(): Date {
    const data = new Date(this._data.getTime())
    return this._data;
  }
}
