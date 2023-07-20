
/**
 * product entity
 * @export
 * @class Product
 * @typedef {Product}
 */
export class Product {
    Id!: Number;
    Name!: string;
    Price!: string;
    Status!: string;
    CreatedOn!: Date;
    CreatedBy!: string;
    UpdatedOn!: Date;
    UpdatedBy!: string;
    CategoryFk!: string;
}