import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface salesDetailHistoryAttributes {
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
	tableName: "SalesDetailHistory",
	timestamps: false 
})
export class salesDetailHistory extends Model<salesDetailHistoryAttributes, salesDetailHistoryAttributes> implements salesDetailHistoryAttributes {

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
    	type: DataType.STRING(450) 
    })
    	customerId!: string;

    @Column({
    	field: "ItemID",
    	type: DataType.STRING(450) 
    })
    	itemId!: string;

    @Column({
    	field: "InvoiceID",
    	type: DataType.STRING(450) 
    })
    	invoiceId!: string;

    @Column({
    	field: "AwsCoID",
    	type: DataType.INTEGER 
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
    	type: DataType.DATE 
    })
    	invDate!: Date;

    @Column({
    	field: "LineID",
    	type: DataType.INTEGER 
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
    	type: DataType.STRING(-1) 
    })
    	primaryKey?: string;

    @Column({
    	field: "paulPulledDateCST",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	paulPulledDateCst?: Date;

}