import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface accountsPayable2Attributes {
    id?: number;
    awsCoId: number;
    twoDigitCoId?: string;
    customerId: string;
    invoiceId: string;
    amount: number;
    invDate?: string;
    delivDate?: string;
    dueDate?: string;
    orderType?: string;
    status?: string;
    bounced?: string;
    reported?: string;
    total?: number;
    invoiceMemo?: string;
    paulPulledDateCst?: string;
    primaryKey?: string;
}

@Table({
	tableName: "AccountsPayable2",
	timestamps: false 
})
export class accountsPayable2 extends Model<accountsPayable2Attributes, accountsPayable2Attributes> implements accountsPayable2Attributes {

    @Column({
    	field: "ID",
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK_AccountsPayable2",
    	unique: true 
    })
    	id?: number;

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
    	field: "Amount",
    	type: DataType.DECIMAL(18,10) 
    })
    	amount!: number;

    @Column({
    	field: "InvDate",
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    	invDate?: string;

    @Column({
    	field: "DelivDate",
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    	delivDate?: string;

    @Column({
    	field: "DueDate",
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    	dueDate?: string;

    @Column({
    	field: "OrderType",
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    	orderType?: string;

    @Column({
    	field: "Status",
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    	status?: string;

    @Column({
    	field: "Bounced",
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    	bounced?: string;

    @Column({
    	field: "Reported",
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    	reported?: string;

    @Column({
    	field: "Total",
    	allowNull: true,
    	type: DataType.DECIMAL(18,10) 
    })
    	total?: number;

    @Column({
    	field: "InvoiceMemo",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	invoiceMemo?: string;

    @Column({
    	field: "paulPulledDateCST",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	paulPulledDateCst?: string;

    @Column({
    	field: "PrimaryKey",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	primaryKey?: string;

}