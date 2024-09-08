import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface customersAttributes {
    id: string;
    twoDigitCoId?: string;
    customerId: string;
    customerName?: string;
    category?: string;
    type?: string;
    deliveryDays?: string;
    awsCoId: number;
    primaryKey?: string;
    paulPulledDateCst?: Date;
}

@Table({
	tableName: "Customers",
	timestamps: false 
})
export class customers extends Model<customersAttributes, customersAttributes> implements customersAttributes {

    @Column({
    	field: "ID",
    	type: DataType.STRING 
    })
    @Index({
    	name: "Customers_UN_ID",
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
    	field: "CustomerID",
    	primaryKey: true,
    	type: DataType.STRING(100) 
    })
    @Index({
    	name: "PK_Customers",
    	unique: true 
    })
    	customerId!: string;

    @Column({
    	field: "CustomerName",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	customerName?: string;

    @Column({
    	field: "Category",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	category?: string;

    @Column({
    	field: "Type",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	type?: string;

    @Column({
    	field: "DeliveryDays",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	deliveryDays?: string;

    @Column({
    	field: "AwsCoID",
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK_Customers",
    	unique: true 
    })
    	awsCoId!: number;

    @Column({
    	field: "PrimaryKey",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	primaryKey?: string;

    @Column({
    	field: "paulPulledDateCST",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	paulPulledDateCst?: Date;

}