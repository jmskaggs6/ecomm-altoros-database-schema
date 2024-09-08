import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface signinSettingsAttributes {
    id?: number;
    urlId: number;
    roleId: number;
    isAutologin: boolean;
    createdAt: Date;
    updatedAt: Date;
    showVideo?: boolean;
    videoUrl?: string;
}

@Table({
	tableName: "SigninSettings",
	timestamps: false 
})
export class signinSettings extends Model<signinSettingsAttributes, signinSettingsAttributes> implements signinSettingsAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__SigninSe__3214EC2795B7D7F4",
    	unique: true 
    })
    @Index({
    	name: "UQ__SigninSe__3214EC2678980BCC",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "UrlID",
    	type: DataType.INTEGER 
    })
    	urlId!: number;

    @Column({
    	field: "RoleID",
    	type: DataType.INTEGER 
    })
    	roleId!: number;

    @Column({
    	field: "IsAutologin",
    	type: DataType.STRING 
    })
    	isAutologin!: boolean;

    @Column({
    	type: DataType.STRING 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.STRING 
    })
    	updatedAt!: Date;

    @Column({
    	field: "ShowVideo",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	showVideo?: boolean;

    @Column({
    	field: "VideoUrl",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	videoUrl?: string;

}