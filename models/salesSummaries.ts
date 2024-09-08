import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface salesSummariesAttributes {
    id: string;
    awsCoId: number;
    twoDigitCoId?: string;
    itemId: string;
    customerId: string;
    last12: number;
    last3: number;
    last4: number;
    last6: number;
    repId?: string;
}

@Table({
	tableName: "SalesSummaries",
	timestamps: false 
})
export class salesSummaries extends Model<salesSummariesAttributes, salesSummariesAttributes> implements salesSummariesAttributes {

    @Column({
    	field: "ID",
    	type: DataType.STRING 
    })
    	id!: string;

    @Column({
    	field: "AwsCoID",
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK_SalesSummaries",
    	unique: true 
    })
    	awsCoId!: number;

    @Column({
    	field: "TwoDigitCoID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	twoDigitCoId?: string;

    @Column({
    	field: "ItemID",
    	primaryKey: true,
    	type: DataType.STRING(450) 
    })
    @Index({
    	name: "PK_SalesSummaries",
    	unique: true 
    })
    	itemId!: string;

    @Column({
    	field: "CustomerID",
    	primaryKey: true,
    	type: DataType.STRING(450) 
    })
    @Index({
    	name: "PK_SalesSummaries",
    	unique: true 
    })
    	customerId!: string;

    @Column({
    	field: "Last12",
    	type: DataType.DECIMAL(18,2) 
    })
    	last12!: number;

    @Column({
    	field: "Last3",
    	type: DataType.DECIMAL(18,2) 
    })
    	last3!: number;

    @Column({
    	field: "Last4",
    	type: DataType.DECIMAL(18,2) 
    })
    	last4!: number;

    @Column({
    	field: "Last6",
    	type: DataType.DECIMAL(18,2) 
    })
    	last6!: number;

    @Column({
    	field: "RepID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	repId?: string;

}