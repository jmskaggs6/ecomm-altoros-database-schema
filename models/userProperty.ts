import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface userPropertyAttributes {
    id?: number;
    userId?: number;
    awsCoId?: number;
    createdAt: Date;
    updatedAt: Date;
    userUrlId?: number;
    departmentId?: number;
    lastInvoice?: string;
    roleId?: number;
    deletedAt?: Date;
    status?: string;
    passwordHash?: string;
}

@Table({
	tableName: "UserProperty",
	timestamps: false 
})
export class userProperty extends Model<userPropertyAttributes, userPropertyAttributes> implements userPropertyAttributes {

    @Column({
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__UserProp__3213E83F8EA451CD",
    	unique: true 
    })
    @Index({
    	name: "UQ__UserProp__3213E83ED6BFB683",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "UserId",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	userId?: number;

    @Column({
    	field: "AwsCoID",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	awsCoId?: number;

    @Column({
    	type: DataType.STRING 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.STRING 
    })
    	updatedAt!: Date;

    @Column({
    	field: "UserUrlID",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	userUrlId?: number;

    @Column({
    	field: "DepartmentID",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	departmentId?: number;

    @Column({
    	field: "LastInvoice",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	lastInvoice?: string;

    @Column({
    	field: "RoleID",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	roleId?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	deletedAt?: Date;

    @Column({
    	field: "Status",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	status?: string;

    @Column({
    	field: "PasswordHash",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	passwordHash?: string;

}