import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface pageSettingsAttributes {
    id?: number;
    urlId: number;
    caption: string;
    path: string;
    createdAt: Date;
    sorder?: number;
}

@Table({
	tableName: "PageSettings",
	timestamps: false 
})
export class pageSettings extends Model<pageSettingsAttributes, pageSettingsAttributes> implements pageSettingsAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__PageSettings",
    	unique: true 
    })
    @Index({
    	name: "UQ__PageSettings",
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
    	type: DataType.STRING(450) 
    })
    	caption!: string;

    @Column({
    	field: "Path",
    	type: DataType.STRING(450) 
    })
    	path!: string;

    @Column({
    	type: DataType.STRING 
    })
    	createdAt!: Date;

    @Column({
    	field: "Sorder",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	sorder?: number;

}