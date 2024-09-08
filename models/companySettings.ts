import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface companySettingsAttributes {
    awsCoId: number;
    setting: string;
    isVisible: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    id?: number;
}

@Table({
	tableName: "CompanySettings",
	timestamps: false 
})
export class companySettings extends Model<companySettingsAttributes, companySettingsAttributes> implements companySettingsAttributes {

    @Column({
    	field: "AWSCoID",
    	type: DataType.INTEGER 
    })
    	awsCoId!: number;

    @Column({
    	field: "Setting",
    	type: DataType.STRING(100) 
    })
    	setting!: string;

    @Column({
    	field: "IsVisible",
    	type: DataType.STRING 
    })
    	isVisible!: boolean;

    @Column({
    	field: "CreatedAt",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	createdAt?: Date;

    @Column({
    	field: "UpdatedAt",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	updatedAt?: Date;

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

}