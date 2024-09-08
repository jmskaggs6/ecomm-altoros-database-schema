import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface userUrlAttributes {
    id?: number;
    url: string;
    urlSuffix?: string;
    locationName?: string;
    awsCoId?: number;
    lgid: number;
    sendEmailFrom?: string;
    showPricing: boolean;
    businessName?: string;
}

@Table({
	tableName: "UserUrl",
	timestamps: false 
})
export class userUrl extends Model<userUrlAttributes, userUrlAttributes> implements userUrlAttributes {

    @Column({
    	field: "ID",
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK_UserUrl_ID",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "Url",
    	type: DataType.STRING(-1) 
    })
    	url!: string;

    @Column({
    	field: "UrlSuffix",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	urlSuffix?: string;

    @Column({
    	field: "LocationName",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	locationName?: string;

    @Column({
    	field: "AwsCoID",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	awsCoId?: number;

    @Column({
    	field: "LGID",
    	type: DataType.INTEGER 
    })
    	lgid!: number;

    @Column({
    	field: "SendEmailFrom",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	sendEmailFrom?: string;

    @Column({
    	field: "ShowPricing",
    	type: DataType.STRING 
    })
    	showPricing!: boolean;

    @Column({
    	field: "BusinessName",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	businessName?: string;

}