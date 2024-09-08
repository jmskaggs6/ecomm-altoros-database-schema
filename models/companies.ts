import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface companiesAttributes {
    awsCoId: number;
    lgid: number;
    twoDigitCoId?: string;
    liveServerIp?: string;
    repId?: string;
}

@Table({
	tableName: "Companies",
	timestamps: false 
})
export class companies extends Model<companiesAttributes, companiesAttributes> implements companiesAttributes {

    @Column({
    	field: "AwsCoID",
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK_Companies",
    	unique: true 
    })
    	awsCoId!: number;

    @Column({
    	field: "LGID",
    	type: DataType.INTEGER 
    })
    	lgid!: number;

    @Column({
    	field: "TwoDigitCoID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	twoDigitCoId?: string;

    @Column({
    	field: "LiveServerIP",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	liveServerIp?: string;

    @Column({
    	field: "RepID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	repId?: string;

}