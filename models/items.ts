import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface itemsAttributes {
    id: string;
    twoDigitCoId?: string;
    awsCoId: number;
    itemId: string;
    itemName?: string;
    categoryName?: string;
    typeName?: string;
    countryofOrigin?: string;
    vintage?: string;
    size?: string;
    varietal?: string;
    casePrice: number;
    unitPrice: number;
    unitsPerCase: number;
    splitAllowed?: string;
    category?: string;
    type?: string;
    hideFromEcom?: string;
    orderEta?: string;
    deal?: string;
    inStock: number;
    onOrder: number;
    literPerCase: number;
    wtPerCase: number;
    note?: string;
    subId?: string;
    orderMinMult?: string;
    filters?: string;
    familyId?: string;
    familyId2?: string;
    warningCodes?: string;
    optimalOrderSize: string;
    routeSell?: string;
    minOrderOverride?: string;
    codes?: string;
    splitCaseCharge: number;
    allocated?: string;
    chPrTable?: string;
    chanPrice?: string;
    chanPrDealId?: string;
    chanDisc: number;
    dl?: string;
    brandId?: string;
    netUnit: number;
    netCase: number;
    pic?: string;
    primaryKey?: string;
}

@Table({
	tableName: "Items",
	timestamps: false 
})
export class items extends Model<itemsAttributes, itemsAttributes> implements itemsAttributes {

    @Column({
    	field: "ID",
    	type: DataType.STRING 
    })
    	id!: string;

    @Column({
    	field: "TwoDigitCoID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	twoDigitCoId?: string;

    @Column({
    	field: "AwsCoID",
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK_Items",
    	unique: true 
    })
    	awsCoId!: number;

    @Column({
    	field: "ItemID",
    	primaryKey: true,
    	type: DataType.STRING(450) 
    })
    @Index({
    	name: "PK_Items",
    	unique: true 
    })
    	itemId!: string;

    @Column({
    	field: "ItemName",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	itemName?: string;

    @Column({
    	field: "CategoryName",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	categoryName?: string;

    @Column({
    	field: "TypeName",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	typeName?: string;

    @Column({
    	field: "CountryofOrigin",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	countryofOrigin?: string;

    @Column({
    	field: "Vintage",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	vintage?: string;

    @Column({
    	field: "Size",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	size?: string;

    @Column({
    	field: "Varietal",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	varietal?: string;

    @Column({
    	field: "CasePrice",
    	type: DataType.DECIMAL(18,2) 
    })
    	casePrice!: number;

    @Column({
    	field: "UnitPrice",
    	type: DataType.DECIMAL(18,2) 
    })
    	unitPrice!: number;

    @Column({
    	field: "UnitsPerCase",
    	type: DataType.INTEGER 
    })
    	unitsPerCase!: number;

    @Column({
    	field: "SplitAllowed",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	splitAllowed?: string;

    @Column({
    	field: "Category",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	category?: string;

    @Column({
    	field: "Type",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	type?: string;

    @Column({
    	field: "HideFromEcom",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	hideFromEcom?: string;

    @Column({
    	field: "OrderETA",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	orderEta?: string;

    @Column({
    	field: "Deal",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	deal?: string;

    @Column({
    	field: "InStock",
    	type: DataType.DECIMAL(18,2) 
    })
    	inStock!: number;

    @Column({
    	field: "OnOrder",
    	type: DataType.DECIMAL(18,2) 
    })
    	onOrder!: number;

    @Column({
    	field: "LiterPerCase",
    	type: DataType.REAL 
    })
    	literPerCase!: number;

    @Column({
    	field: "WtPerCase",
    	type: DataType.REAL 
    })
    	wtPerCase!: number;

    @Column({
    	field: "Note",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	note?: string;

    @Column({
    	field: "SubID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	subId?: string;

    @Column({
    	field: "OrderMinMult",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	orderMinMult?: string;

    @Column({
    	field: "Filters",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	filters?: string;

    @Column({
    	field: "FamilyID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	familyId?: string;

    @Column({
    	field: "FamilyID2",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	familyId2?: string;

    @Column({
    	field: "WarningCodes",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	warningCodes?: string;

    @Column({
    	field: "OptimalOrderSize",
    	type: DataType.BIGINT 
    })
    	optimalOrderSize!: string;

    @Column({
    	field: "RouteSell",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	routeSell?: string;

    @Column({
    	field: "MinOrderOverride",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	minOrderOverride?: string;

    @Column({
    	field: "Codes",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	codes?: string;

    @Column({
    	field: "SplitCaseCharge",
    	type: DataType.DECIMAL(18,2) 
    })
    	splitCaseCharge!: number;

    @Column({
    	field: "Allocated",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	allocated?: string;

    @Column({
    	field: "ChPrTable",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	chPrTable?: string;

    @Column({
    	field: "ChanPrice",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	chanPrice?: string;

    @Column({
    	field: "ChanPrDealID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	chanPrDealId?: string;

    @Column({
    	field: "ChanDisc",
    	type: DataType.DECIMAL(18,2) 
    })
    	chanDisc!: number;

    @Column({
    	field: "DL",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	dl?: string;

    @Column({
    	field: "BrandID",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	brandId?: string;

    @Column({
    	field: "NetUnit",
    	type: DataType.DECIMAL(18,2) 
    })
    	netUnit!: number;

    @Column({
    	field: "NetCase",
    	type: DataType.DECIMAL(18,2) 
    })
    	netCase!: number;

    @Column({
    	field: "Pic",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	pic?: string;

    @Column({
    	field: "PrimaryKey",
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	primaryKey?: string;

}