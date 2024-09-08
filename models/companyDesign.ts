import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface companyDesignAttributes {
    id?: number;
    awsCoId: number;
    twoDigitCoId?: string;
    urlId: number;
    primaryColor: string;
    secondaryColor: string;
    baseUrl: string;
    siteCompanyLogo: string;
    siteHeaderLogo: string;
    siteFooterLogo: string;
    emailHeaderLogo: string;
    emailFooterLogo: string;
    footerSettingsJson?: string;
    showPricing?: boolean;
    showHistory?: boolean;
    showBH?: boolean;
    showItemFrequents?: boolean;
    allowEmptyDeliveryDays?: boolean;
    favicon?: string;
    invoiceOverduePeriod?: number;
    showSubtotal?: boolean;
    showSalesSummaries?: boolean;
    showVideoOnSignin?: boolean;
    signinVideoUrl?: string;
}

@Table({
	tableName: "CompanyDesign",
	timestamps: false 
})
export class companyDesign extends Model<companyDesignAttributes, companyDesignAttributes> implements companyDesignAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

    @Column({
    	field: "AwsCoID",
    	type: DataType.INTEGER 
    })
    	awsCoId!: number;

    @Column({
    	field: "TwoDigitCoID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	twoDigitCoId?: string;

    @Column({
    	field: "UrlId",
    	type: DataType.INTEGER 
    })
    	urlId!: number;

    @Column({
    	field: "PrimaryColor",
    	type: DataType.STRING(50) 
    })
    	primaryColor!: string;

    @Column({
    	field: "SecondaryColor",
    	type: DataType.STRING(50) 
    })
    	secondaryColor!: string;

    @Column({
    	field: "BaseURL",
    	type: DataType.STRING(510) 
    })
    	baseUrl!: string;

    @Column({
    	field: "SiteCompanyLogo",
    	type: DataType.STRING(510) 
    })
    	siteCompanyLogo!: string;

    @Column({
    	field: "SiteHeaderLogo",
    	type: DataType.STRING(510) 
    })
    	siteHeaderLogo!: string;

    @Column({
    	field: "SiteFooterLogo",
    	type: DataType.STRING(510) 
    })
    	siteFooterLogo!: string;

    @Column({
    	field: "EmailHeaderLogo",
    	type: DataType.STRING(510) 
    })
    	emailHeaderLogo!: string;

    @Column({
    	field: "EmailFooterLogo",
    	type: DataType.STRING(510) 
    })
    	emailFooterLogo!: string;

    @Column({
    	field: "FooterSettingsJSON",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	footerSettingsJson?: string;

    @Column({
    	field: "ShowPricing",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	showPricing?: boolean;

    @Column({
    	field: "ShowHistory",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	showHistory?: boolean;

    @Column({
    	field: "ShowB&H",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	showBH?: boolean;

    @Column({
    	field: "ShowItemFrequents",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	showItemFrequents?: boolean;

    @Column({
    	field: "AllowEmptyDeliveryDays",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	allowEmptyDeliveryDays?: boolean;

    @Column({
    	field: "Favicon",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	favicon?: string;

    @Column({
    	field: "InvoiceOverduePeriod",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	invoiceOverduePeriod?: number;

    @Column({
    	field: "ShowSubtotal",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	showSubtotal?: boolean;

    @Column({
    	field: "ShowSalesSummaries",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	showSalesSummaries?: boolean;

    @Column({
    	field: "ShowVideoOnSignin",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	showVideoOnSignin?: boolean;

    @Column({
    	field: "SigninVideoUrl",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	signinVideoUrl?: string;

}