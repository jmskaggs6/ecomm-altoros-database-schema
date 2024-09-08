import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface defaultPagesRelationsAttributes {
    id?: number;
    urlId: number;
    pageId: number;
    role: string;
    createdAt: Date;
}

@Table({
	tableName: "DefaultPagesRelations",
	timestamps: false 
})
export class defaultPagesRelations extends Model<defaultPagesRelationsAttributes, defaultPagesRelationsAttributes> implements defaultPagesRelationsAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__DefaultPagesRelations",
    	unique: true 
    })
    @Index({
    	name: "UQ__DefaultPagesRelations",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "UrlID",
    	type: DataType.INTEGER 
    })
    	urlId!: number;

    @Column({
    	field: "PageID",
    	type: DataType.INTEGER 
    })
    	pageId!: number;

    @Column({
    	field: "Role",
    	type: DataType.STRING(450) 
    })
    	role!: string;

    @Column({
    	type: DataType.STRING 
    })
    	createdAt!: Date;

}