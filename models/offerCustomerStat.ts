import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface offerCustomerStatAttributes {
    id?: number;
    offerId: number;
    userId: number;
    urlId: number;
    awsCoId: number;
    createdAt: Date;
    customerId?: string;
}

@Table({
	tableName: "OfferCustomerStat",
	timestamps: false 
})
export class offerCustomerStat extends Model<offerCustomerStatAttributes, offerCustomerStatAttributes> implements offerCustomerStatAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__OfferCustomerStat",
    	unique: true 
    })
    @Index({
    	name: "UQ__OfferCustomerStat",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "OfferID",
    	type: DataType.INTEGER 
    })
    	offerId!: number;

    @Column({
    	field: "UserID",
    	type: DataType.INTEGER 
    })
    	userId!: number;

    @Column({
    	field: "UrlID",
    	type: DataType.INTEGER 
    })
    	urlId!: number;

    @Column({
    	field: "AwsCoID",
    	type: DataType.INTEGER 
    })
    	awsCoId!: number;

    @Column({
    	type: DataType.STRING 
    })
    	createdAt!: Date;

    @Column({
    	field: "CustomerID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	customerId?: string;

}