
/**
 * order entity
 * @export
 * @class Order
 * @typedef {Order}
 */
export class Order {
    Id!: Number;
    OrderId!: string;
    PaymentMode!: string;
    OrderDate!: Date;
    Status!: string;
    CreatedOn!: Date;
    CreatedBy!: string;
    UpdatedOn!: Date;
    UpdatedBy!: string;
    CustomerFk!: string;
    ProductFk!: string;
}