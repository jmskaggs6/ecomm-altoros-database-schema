import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface salesDetailsAttributes {
    id: string;
    twoDigitCoId?: string;
    repId?: string;
    customerId: string;
    itemId: string;
    invoiceId: string;
    awsCoId: number;
    cases: number;
    extPricePd: number;
    units: number;
    invDate: Date;
    lineId: number;
    invDateDt: Date;
    primaryKey?: string;
    paulPulledDateCst?: Date;
}

@Table({
	tableName: "SalesDetails",
	timestamps: false 
})
export class salesDetails extends Model<salesDetailsAttributes, salesDetailsAttributes> implements salesDetailsAttributes {

    @Column({
    	field: "ID",
    	type: DataType.STRING 
    })
    	id!: string;

    @Column({
    	field: "TwoDigitCoID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	twoDigitCoId?: string;

    @Column({
    	field: "RepID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	repId?: string;

    @Column({
    	field: "CustomerID",
    	primaryKey: true,
    	type: DataType.STRING(450) 
    })
    @Index({
    	name: "PK_SalesDetails",
    	unique: true 
    })
    	customerId!: string;

    @Column({
    	field: "ItemID",
    	primaryKey: true,
    	type: DataType.STRING(450) 
    })
    @Index({
    	name: "PK_SalesDetails",
    	unique: true 
    })
    	itemId!: string;

    @Column({
    	field: "InvoiceID",
    	primaryKey: true,
    	type: DataType.STRING(450) 
    })
    @Index({
    	name: "PK_SalesDetails",
    	unique: true 
    })
    	invoiceId!: string;

    @Column({
    	field: "AwsCoID",
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK_SalesDetails",
    	unique: true 
    })
    	awsCoId!: number;

    @Column({
    	field: "Cases",
    	type: DataType.INTEGER 
    })
    	cases!: number;

    @Column({
    	field: "ExtPricePd",
    	type: DataType.DECIMAL(18,2) 
    })
    	extPricePd!: number;

    @Column({
    	field: "Units",
    	type: DataType.INTEGER 
    })
    	units!: number;

    @Column({
    	field: "InvDate",
    	primaryKey: true,
    	type: DataType.DATE 
    })
    @Index({
    	name: "PK_SalesDetails",
    	unique: true 
    })
    	invDate!: Date;

    @Column({
    	field: "LineID",
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK_SalesDetails",
    	unique: true 
    })
    	lineId!: number;

    @Column({
    	field: "InvDateDT",
    	type: DataType.DATE(7) 
    })
    	invDateDt!: Date;

    @Column({
    	field: "PrimaryKey",
    	allowNull: true,
    	type: DataType.STRING(200) 
    })
    	primaryKey?: string;

    @Column({
    	field: "paulPulledDateCST",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	paulPulledDateCst?: Date;

}