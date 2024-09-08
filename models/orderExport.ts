import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface orderExportAttributes {
    orderId?: number;
    companyId: string;
    awsCoId: string;
    customerId?: string;
    itemId: string;
    salesRepId?: string;
    cases?: number;
    units?: number;
    casePrice?: number;
    unitPrice?: number;
    orderTypeId?: string;
    orderSource?: string;
    retailSku?: string;
    poNumber?: string;
    createdBy?: string;
    dateCreated?: Date;
    sentToHost?: boolean;
    sentToHostAt?: Date;
    notes?: string;
    deliveryDate?: Date;
    parentOrderId?: number;
    messageId?: number;
    orderLineGuid?: string;
    transmissionType?: string;
    itemDescription?: string;
    customerTradeName?: string;
    salesRepName?: string;
    orderHeaderGuid?: string;
    resendMessage?: boolean;
    extPrice?: number;
    itemNotInDb?: boolean;
    clientSalesOrderId?: string;
}

@Table({
	tableName: "OrderExport",
	timestamps: false 
})
export class orderExport extends Model<orderExportAttributes, orderExportAttributes> implements orderExportAttributes {

    @Column({
    	field: "OrderId",
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__OrderExp__C3905BCFB8821110",
    	unique: true 
    })
    	orderId?: number;

    @Column({
    	field: "CompanyId",
    	type: DataType.STRING(50) 
    })
    	companyId!: string;

    @Column({
    	field: "AwsCoId",
    	type: DataType.STRING(255) 
    })
    	awsCoId!: string;

    @Column({
    	field: "CustomerId",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	customerId?: string;

    @Column({
    	field: "ItemId",
    	type: DataType.STRING(255) 
    })
    	itemId!: string;

    @Column({
    	field: "SalesRepId",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	salesRepId?: string;

    @Column({
    	field: "Cases",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	cases?: number;

    @Column({
    	field: "Units",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	units?: number;

    @Column({
    	field: "CasePrice",
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	casePrice?: number;

    @Column({
    	field: "UnitPrice",
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	unitPrice?: number;

    @Column({
    	field: "OrderTypeId",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	orderTypeId?: string;

    @Column({
    	field: "OrderSource",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	orderSource?: string;

    @Column({
    	field: "RetailSKU",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	retailSku?: string;

    @Column({
    	field: "PONumber",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	poNumber?: string;

    @Column({
    	field: "CreatedBy",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	createdBy?: string;

    @Column({
    	field: "DateCreated",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	dateCreated?: Date;

    @Column({
    	field: "SentToHost",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	sentToHost?: boolean;

    @Column({
    	field: "SentToHostAt",
    	allowNull: true,
    	type: DataType.DATE 
    })
    	sentToHostAt?: Date;

    @Column({
    	field: "Notes",
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	notes?: string;

    @Column({
    	field: "DeliveryDate",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	deliveryDate?: Date;

    @Column({
    	field: "ParentOrderId",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	parentOrderId?: number;

    @Column({
    	field: "MessageId",
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	messageId?: number;

    @Column({
    	field: "OrderLineGuid",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	orderLineGuid?: string;

    @Column({
    	field: "TransmissionType",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	transmissionType?: string;

    @Column({
    	field: "ItemDescription",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	itemDescription?: string;

    @Column({
    	field: "CustomerTradeName",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	customerTradeName?: string;

    @Column({
    	field: "SalesRepName",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	salesRepName?: string;

    @Column({
    	field: "OrderHeaderGuid",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	orderHeaderGuid?: string;

    @Column({
    	field: "ResendMessage",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	resendMessage?: boolean;

    @Column({
    	field: "ExtPrice",
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	extPrice?: number;

    @Column({
    	field: "ItemNotInDB",
    	allowNull: true,
    	type: DataType.STRING 
    })
    	itemNotInDb?: boolean;

    @Column({
    	field: "ClientSalesOrderId",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	clientSalesOrderId?: string;

}