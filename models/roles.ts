import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface rolesAttributes {
    id?: number;
    urlId: number;
    caption: string;
    name: string;
}

@Table({
	tableName: "Roles",
	timestamps: false 
})
export class roles extends Model<rolesAttributes, rolesAttributes> implements rolesAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__Roles__3214EC27A35FEE92",
    	unique: true 
    })
    @Index({
    	name: "UQ__Roles__3214EC26BBA15F5B",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "UrlID",
    	type: DataType.INTEGER 
    })
    	urlId!: number;

    @Column({
    	field: "Caption",
    	type: DataType.STRING(255) 
    })
    	caption!: string;

    @Column({
    	field: "Name",
    	type: DataType.STRING(255) 
    })
    	name!: string;

}