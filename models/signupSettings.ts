import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface signupSettingsAttributes {
    id?: number;
    roleId: number;
    urlId: number;
    label: string;
    checkLastInvoice?: boolean;
    checkCustomer?: boolean;
    showVideo?: boolean;
    videoUrl?: string;
}

@Table({
	tableName: "SignupSettings",
	timestamps: false 
})
export class signupSettings extends Model<signupSettingsAttributes, signupSettingsAttributes> implements signupSettingsAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__SignupSe__3214EC27422D462C",
    	unique: true 
    })
    @Index({
    	name: "UQ__SignupSe__3214EC2694EE0DE2",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "RoleID",
    	type: DataType.INTEGER 
    })
    	roleId!: number;

    @Column({
    	field: "UrlID",
    	type: DataType.INTEGER 
    })
    	urlId!: number;

    @Column({
    	field: "Label",
    	type: DataType.STRING(255) 
    })
    	label!: string;

    @Column({
    	field: "CheckLastInvoice",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	checkLastInvoice?: boolean;

    @Column({
    	field: "CheckCustomer",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	checkCustomer?: boolean;

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