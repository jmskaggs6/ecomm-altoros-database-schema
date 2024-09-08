import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface translationsAttributes {
    id: string;
    twoDigitCoId?: string;
    translationType: number;
    value?: string;
    awsCoId: number;
    thing2: string;
    thing3?: string;
    thing4?: string;
}

@Table({
	tableName: "Translations",
	timestamps: false 
})
export class translations extends Model<translationsAttributes, translationsAttributes> implements translationsAttributes {

    @Column({
    	field: "ID",
    	primaryKey: true,
    	type: DataType.STRING 
    })
    @Index({
    	name: "PK_Translations",
    	unique: true 
    })
    	id!: string;

    @Column({
    	field: "TwoDigitCoID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	twoDigitCoId?: string;

    @Column({
    	field: "TranslationType",
    	type: DataType.INTEGER 
    })
    	translationType!: number;

    @Column({
    	field: "Value",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	value?: string;

    @Column({
    	field: "AwsCoID",
    	type: DataType.INTEGER 
    })
    	awsCoId!: number;

    @Column({
    	field: "Thing2",
    	type: DataType.STRING(450) 
    })
    	thing2!: string;

    @Column({
    	field: "Thing3",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	thing3?: string;

    @Column({
    	field: "Thing4",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	thing4?: string;

}