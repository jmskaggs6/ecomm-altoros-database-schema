import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface phoneNumberAttributes {
    id?: number;
    phoneNumber: string;
    countryCode: string;
    location: string;
    carrier: string;
    lineType: string;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "PhoneNumber",
	timestamps: false 
})
export class phoneNumber extends Model<phoneNumberAttributes, phoneNumberAttributes> implements phoneNumberAttributes {

    @Column({
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__PhoneNumber",
    	unique: true 
    })
    @Index({
    	name: "UQ__PhoneNumber",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "PhoneNumber",
    	type: DataType.STRING(20) 
    })
    	phoneNumber!: string;

    @Column({
    	field: "CountryCode",
    	type: DataType.STRING(10) 
    })
    	countryCode!: string;

    @Column({
    	field: "Location",
    	type: DataType.STRING(50) 
    })
    	location!: string;

    @Column({
    	field: "Carrier",
    	type: DataType.STRING(50) 
    })
    	carrier!: string;

    @Column({
    	field: "LineType",
    	type: DataType.STRING(50) 
    })
    	lineType!: string;

    @Column({
    	type: DataType.STRING 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.STRING 
    })
    	updatedAt!: Date;

}