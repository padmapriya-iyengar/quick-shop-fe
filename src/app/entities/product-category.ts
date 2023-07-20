
/**
 * product category entity
 * @export
 * @class ProductCategory
 * @typedef {ProductCategory}
 */
export class ProductCategory {
    Id!: Number;
    Category!: string;
    Status!: string;
    CreatedOn!: Date;
    CreatedBy!: string;
    UpdatedOn!: Date;
    UpdatedBy!: string;
}