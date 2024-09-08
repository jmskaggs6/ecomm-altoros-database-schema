import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface companyCutoffTimesAttributes {
    id?: number;
    awsCoId: number;
    timeZone?: string;
    timeSunCutoff?: Date;
    timeMonCutoff?: Date;
    timeTueCutoff?: Date;
    timeWedCutoff?: Date;
    timeThuCutoff?: Date;
    timeFriCutoff?: Date;
    timeSatCutoff?: Date;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "CompanyCutoffTimes",
	timestamps: false 
})
export class companyCutoffTimes extends Model<companyCutoffTimesAttributes, companyCutoffTimesAttributes> implements companyCutoffTimesAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__CompanyCutoffTimesr",
    	unique: true 
    })
    @Index({
    	name: "UQ__CompanyCutoffTimes",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "AwsCoID",
    	type: DataType.INTEGER 
    })
    	awsCoId!: number;

    @Column({
    	field: "TimeZone",
    	allowNull: true,
    	type: DataType.STRING(50) 
    })
    	timeZone?: string;

    @Column({
    	field: "TimeSunCutoff",
    	allowNull: true,
    	type: DataType.TIME 
    })
    	timeSunCutoff?: Date;

    @Column({
    	field: "TimeMonCutoff",
    	allowNull: true,
    	type: DataType.TIME 
    })
    	timeMonCutoff?: Date;

    @Column({
    	field: "TimeTueCutoff",
    	allowNull: true,
    	type: DataType.TIME 
    })
    	timeTueCutoff?: Date;

    @Column({
    	field: "TimeWedCutoff",
    	allowNull: true,
    	type: DataType.TIME 
    })
    	timeWedCutoff?: Date;

    @Column({
    	field: "TimeThuCutoff",
    	allowNull: true,
    	type: DataType.TIME 
    })
    	timeThuCutoff?: Date;

    @Column({
    	field: "TimeFriCutoff",
    	allowNull: true,
    	type: DataType.TIME 
    })
    	timeFriCutoff?: Date;

    @Column({
    	field: "TimeSatCutoff",
    	allowNull: true,
    	type: DataType.TIME 
    })
    	timeSatCutoff?: Date;

    @Column({
    	type: DataType.STRING 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.STRING 
    })
    	updatedAt!: Date;

}