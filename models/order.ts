import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface orderAttributes {
    id?: number;
    deliveryDate?: Date;
    notes?: string;
    userId?: number;
    createdAt: Date;
    updatedAt: Date;
    customerId?: string;
    itemsCount?: number;
    extPrice?: number;
}

@Table({
	tableName: "Order",
	timestamps: false 
})
export class order extends Model<orderAttributes, orderAttributes> implements orderAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__Order__3214EC277E432AE5",
    	unique: true 
    })
    @Index({
    	name: "UQ__Order__3214EC26B58721C6",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "DeliveryDate",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	deliveryDate?: Date;

    @Column({
    	field: "Notes",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	notes?: string;

    @Column({
    	field: "UserId",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	userId?: number;

    @Column({
    	type: DataType.STRING 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.STRING 
    })
    	updatedAt!: Date;

    @Column({
    	field: "CustomerID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	customerId?: string;

    @Column({
    	field: "ItemsCount",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	itemsCount?: number;

    @Column({
    	field: "ExtPrice",
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	extPrice?: number;

}