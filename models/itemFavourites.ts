import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface itemFavouritesAttributes {
    id?: number;
    awsCoId: number;
    itemId: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "ItemFavourites",
	timestamps: false 
})
export class itemFavourites extends Model<itemFavouritesAttributes, itemFavouritesAttributes> implements itemFavouritesAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

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
    	field: "UserId",
    	type: DataType.INTEGER 
    })
    	userId!: number;

    @Column({
    	type: DataType.STRING 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.STRING 
    })
    	updatedAt!: Date;

}