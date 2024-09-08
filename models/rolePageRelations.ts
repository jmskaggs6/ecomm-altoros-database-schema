import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface rolePageRelationsAttributes {
    id?: number;
    roleId: number;
    pageId: number;
    isDefault?: boolean;
    isVisible?: boolean;
}

@Table({
	tableName: "RolePageRelations",
	timestamps: false 
})
export class rolePageRelations extends Model<rolePageRelationsAttributes, rolePageRelationsAttributes> implements rolePageRelationsAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__RolePage__3214EC27C1BE4CE5",
    	unique: true 
    })
    @Index({
    	name: "UQ__RolePage__3214EC2690EFEA25",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "RoleID",
    	type: DataType.INTEGER 
    })
    	roleId!: number;

    @Column({
    	field: "PageID",
    	type: DataType.INTEGER 
    })
    	pageId!: number;

    @Column({
    	field: "IsDefault",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	isDefault?: boolean;

    @Column({
    	field: "IsVisible",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	isVisible?: boolean;

}