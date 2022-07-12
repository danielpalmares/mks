export class Product {
  public id!: number;
  public name!: string;
  public brand!: string;
  public description!: string;
  public photo!: string;
  public price!: string;

  constructor(props: Product) {
    Object.assign(this, props);
  }
}
