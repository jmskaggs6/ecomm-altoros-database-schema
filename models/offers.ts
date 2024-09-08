import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface offersAttributes {
    id?: number;
    awsCoId: number;
    urlId: number;
    createdById: number;
    title: string;
    link?: string;
    startDate: string;
    endDate: string;
    createdAt: Date;
    updatedAt: Date;
    shortId?: string;
}

@Table({
	tableName: "Offers",
	timestamps: false 
})
export class offers extends Model<offersAttributes, offersAttributes> implements offersAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__Offers",
    	unique: true 
    })
    @Index({
    	name: "UQ__Offers",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "AwsCoID",
    	type: DataType.INTEGER 
    })
    	awsCoId!: number;

    @Column({
    	field: "UrlID",
    	type: DataType.INTEGER 
    })
    	urlId!: number;

    @Column({
    	field: "CreatedByID",
    	type: DataType.INTEGER 
    })
    	createdById!: number;

    @Column({
    	field: "Title",
    	type: DataType.STRING(255) 
    })
    	title!: string;

    @Column({
    	field: "Link",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	link?: string;

    @Column({
    	field: "StartDate",
    	type: DataType.DATEONLY 
    })
    	startDate!: string;

    @Column({
    	field: "EndDate",
    	type: DataType.DATEONLY 
    })
    	endDate!: string;

    @Column({
    	type: DataType.STRING 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.STRING 
    })
    	updatedAt!: Date;

    @Column({
    	field: "ShortID",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	shortId?: string;

}