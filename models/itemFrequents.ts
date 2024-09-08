import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface itemFrequentsAttributes {
    awsCoId: number;
    customerId: string;
    itemId: string;
    twoDigitCoId?: string;
    id: string;
    value: number;
}

@Table({
	tableName: "ItemFrequents",
	timestamps: false 
})
export class itemFrequents extends Model<itemFrequentsAttributes, itemFrequentsAttributes> implements itemFrequentsAttributes {

    @Column({
    	field: "AwsCoID",
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK_ItemFrequents",
    	unique: true 
    })
    	awsCoId!: number;

    @Column({
    	field: "CustomerID",
    	primaryKey: true,
    	type: DataType.STRING(450) 
    })
    @Index({
    	name: "PK_ItemFrequents",
    	unique: true 
    })
    	customerId!: string;

    @Column({
    	field: "ItemID",
    	primaryKey: true,
    	type: DataType.STRING(450) 
    })
    @Index({
    	name: "PK_ItemFrequents",
    	unique: true 
    })
    	itemId!: string;

    @Column({
    	field: "TwoDigitCoID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	twoDigitCoId?: string;

    @Column({
    	field: "ID",
    	type: DataType.STRING 
    })
    	id!: string;

    @Column({
    	field: "Value",
    	type: DataType.INTEGER 
    })
    	value!: number;

}