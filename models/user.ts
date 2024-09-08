import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface userAttributes {
    id?: number;
    email: string;
    firstName: string;
    lastName: string;
    isSupplier?: boolean;
    isRetail?: boolean;
    isAdmin?: boolean;
    isInventiv?: boolean;
    awsCoId?: string;
    lgid?: string;
    alcoholBevLic?: string;
    passwordHash?: string;
    createdAt: Date;
    updatedAt: Date;
    status?: string;
    lastInvoice?: string;
    isMarketing?: boolean;
    mobilePhone?: string;
}

@Table({
	tableName: "User",
	timestamps: false 
})
export class user extends Model<userAttributes, userAttributes> implements userAttributes {

    @Column({
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__User__3213E83F06DF7BA7",
    	unique: true 
    })
    @Index({
    	name: "UQ__User__3213E83E05541460",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "Email",
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "UQ__User__A9D105344E19A63A",
    	unique: true 
    })
    	email!: string;

    @Column({
    	field: "FirstName",
    	type: DataType.STRING(255) 
    })
    	firstName!: string;

    @Column({
    	field: "LastName",
    	type: DataType.STRING(255) 
    })
    	lastName!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	isSupplier?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	isRetail?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	isAdmin?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	isInventiv?: boolean;

    @Column({
    	field: "AwsCoId",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	awsCoId?: string;

    @Column({
    	field: "LGID",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	lgid?: string;

    @Column({
    	field: "AlcoholBevLic",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	alcoholBevLic?: string;

    @Column({
    	field: "PasswordHash",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	passwordHash?: string;

    @Column({
    	type: DataType.STRING 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.STRING 
    })
    	updatedAt!: Date;

    @Column({
    	field: "Status",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	status?: string;

    @Column({
    	field: "LastInvoice",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	lastInvoice?: string;

    @Column({
    	field: "IsMarketing",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	isMarketing?: boolean;

    @Column({
    	field: "MobilePhone",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	mobilePhone?: string;

}