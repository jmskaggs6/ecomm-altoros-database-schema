import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface userCustomersAttributes {
    id?: number;
    userId: number;
    customerId: string;
    isDefault?: boolean;
    awsCoId?: number;
}

@Table({
	tableName: "UserCustomers",
	timestamps: false 
})
export class userCustomers extends Model<userCustomersAttributes, userCustomersAttributes> implements userCustomersAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__UserCust__3214EC2701A24D0E",
    	unique: true 
    })
    @Index({
    	name: "UQ__UserCust__3214EC26BF5741B0",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "UserID",
    	type: DataType.INTEGER 
    })
    	userId!: number;

    @Column({
    	field: "CustomerID",
    	type: DataType.STRING(450) 
    })
    	customerId!: string;

    @Column({
    	field: "IsDefault",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	isDefault?: boolean;

    @Column({
    	field: "AwsCoID",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	awsCoId?: number;

}