import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface billAndHoldAttributes {
    awsCoId: number;
    twoDigitCoId?: string;
    customerId: string;
    invoiceId: string;
    invDate?: Date;
    repId: string;
    itemId: string;
    amount: number;
    casePrice: number;
    ordered: number;
    shipped: number;
    balance: number;
    unit: string;
    warehouseId: string;
    siteId: string;
    id?: number;
    invDateDt?: string;
    transactionsBalance?: number;
    transactionsShipped?: number;
    transactionsOrdered?: number;
    primaryKey?: string;
}

@Table({
	tableName: "BillAndHold",
	timestamps: false 
})
export class billAndHold extends Model<billAndHoldAttributes, billAndHoldAttributes> implements billAndHoldAttributes {

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
    	type: DataType.STRING(100) 
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
    	field: "RepID",
    	type: DataType.STRING(50) 
    })
    	repId!: string;

    @Column({
    	field: "ItemID",
    	type: DataType.STRING(100) 
    })
    	itemId!: string;

    @Column({
    	field: "Amount",
    	type: DataType.DECIMAL(18) 
    })
    	amount!: number;

    @Column({
    	field: "CasePrice",
    	type: DataType.DECIMAL(18) 
    })
    	casePrice!: number;

    @Column({
    	field: "Ordered",
    	type: DataType.INTEGER 
    })
    	ordered!: number;

    @Column({
    	field: "Shipped",
    	type: DataType.INTEGER 
    })
    	shipped!: number;

    @Column({
    	field: "Balance",
    	type: DataType.INTEGER 
    })
    	balance!: number;

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
    	field: "InvDateDt",
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    	invDateDt?: string;

    @Column({
    	field: "TransactionsBalance",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	transactionsBalance?: number;

    @Column({
    	field: "TransactionsShipped",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	transactionsShipped?: number;

    @Column({
    	field: "TransactionsOrdered",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	transactionsOrdered?: number;

    @Column({
    	field: "PrimaryKey",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	primaryKey?: string;

}