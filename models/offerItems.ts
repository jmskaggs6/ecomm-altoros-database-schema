import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface offerItemsAttributes {
    id?: number;
    offerId: number;
    awsCoId: number;
    itemId: string;
    createdAt: Date;
}

@Table({
	tableName: "OfferItems",
	timestamps: false 
})
export class offerItems extends Model<offerItemsAttributes, offerItemsAttributes> implements offerItemsAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__OfferItems",
    	unique: true 
    })
    @Index({
    	name: "UQ__OfferItems",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "OfferID",
    	type: DataType.INTEGER 
    })
    	offerId!: number;

    @Column({
    	field: "AwsCoID",
    	type: DataType.INTEGER 
    })
    	awsCoId!: number;

    @Column({
    	field: "ItemID",
    	type: DataType.STRING(450) 
    })
    	itemId!: string;

    @Column({
    	type: DataType.STRING 
    })
    	createdAt!: Date;

}