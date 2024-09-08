import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface billAndHoldTransactionsAttributes {
    awsCoId: number;
    twoDigitCoId?: string;
    customerId: string;
    invoiceId: string;
    invDate?: Date;
    itemId: string;
    pullNumber: string;
    status: string;
    transType: string;
    quantity: number;
    unit: string;
    warehouseId: string;
    siteId: string;
    id?: number;
    transactionBalance?: number;
    transactionShipped?: number;
    transactionOrdered?: number;
    primaryKey?: string;
}

@Table({
	tableName: "BillAndHoldTransactions",
	timestamps: false 
})
export class billAndHoldTransactions extends Model<billAndHoldTransactionsAttributes, billAndHoldTransactionsAttributes> implements billAndHoldTransactionsAttributes {

    @Column({
    	field: "AwsCoID",
    	type: DataType.INTEGER 
    })
    	awsCoId!: number;

    @Column({
    	field: "TwoDigitCoID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	twoDigitCoId?: string;

    @Column({
    	field: "CustomerID",
    	type: DataType.STRING(50) 
    })
    	customerId!: string;

    @Column({
    	field: "InvoiceID",
    	type: DataType.STRING(50) 
    })
    	invoiceId!: string;

    @Column({
    	field: "InvDate",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	invDate?: Date;

    @Column({
    	field: "ItemID",
    	type: DataType.STRING(50) 
    })
    	itemId!: string;

    @Column({
    	field: "PullNumber",
    	type: DataType.STRING(50) 
    })
    	pullNumber!: string;

    @Column({
    	field: "Status",
    	type: DataType.STRING(50) 
    })
    	status!: string;

    @Column({
    	field: "TransType",
    	type: DataType.STRING(50) 
    })
    	transType!: string;

    @Column({
    	field: "Quantity",
    	type: DataType.INTEGER 
    })
    	quantity!: number;

    @Column({
    	field: "Unit",
    	type: DataType.STRING(50) 
    })
    	unit!: string;

    @Column({
    	field: "WarehouseID",
    	type: DataType.STRING(50) 
    })
    	warehouseId!: string;

    @Column({
    	field: "SiteID",
    	type: DataType.STRING(50) 
    })
    	siteId!: string;

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

    @Column({
    	field: "TransactionBalance",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	transactionBalance?: number;

    @Column({
    	field: "TransactionShipped",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	transactionShipped?: number;

    @Column({
    	field: "TransactionOrdered",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	transactionOrdered?: number;

    @Column({
    	field: "PrimaryKey",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	primaryKey?: string;

}