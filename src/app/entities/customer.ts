
/**
 * customer entity
 * @export
 * @class Customer
 * @typedef {Customer}
 */
export class Customer {
    Id!: Number;
    Title!: string;
    FirstName!: string;
    MiddleName!: string;
    LastName!: string;
    DisplayName!: string;
    Email!: string;
    Contact!: string;
    Status!: string;
    CreatedOn!: Date;
    CreatedBy!: string;
    UpdatedOn!: Date;
    UpdatedBy!: string;
}