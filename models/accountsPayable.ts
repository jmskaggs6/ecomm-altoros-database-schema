import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface accountsPayableAttributes {
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
    id?: number;
    invDateDt?: string;
    delivDateDt?: string;
    dueDateDt?: string;
    total?: number;
    paulPulledDateCst?: string;
    primaryKey: string;
}

@Table({
	tableName: "AccountsPayable",
	timestamps: false 
})
export class accountsPayable extends Model<accountsPayableAttributes, accountsPayableAttributes> implements accountsPayableAttributes {

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
    	field: "ID",
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK_AccountsPayable",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "InvDateDt",
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    	invDateDt?: string;

    @Column({
    	field: "DelivDateDt",
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    	delivDateDt?: string;

    @Column({
    	field: "DueDateDt",
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    	dueDateDt?: string;

    @Column({
    	field: "Total",
    	allowNull: true,
    	type: DataType.DECIMAL(18,10) 
    })
    	total?: number;

    @Column({
    	field: "paulPulledDateCST",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	paulPulledDateCst?: string;

    @Column({
    	field: "PrimaryKey",
    	type: DataType.STRING(-1) 
    })
    	primaryKey!: string;

}