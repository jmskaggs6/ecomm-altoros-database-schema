import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface userRegistrationCodesAttributes {
    id?: number;
    userId: number;
    code: string;
    expiredAt: Date;
}

@Table({
	tableName: "UserRegistrationCodes",
	timestamps: false 
})
export class userRegistrationCodes extends Model<userRegistrationCodesAttributes, userRegistrationCodesAttributes> implements userRegistrationCodesAttributes {

    @Column({
    	field: "ID",
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__UserRegi__3214EC274703EC67",
    	unique: true 
    })
    @Index({
    	name: "UQ__UserRegi__3214EC26A19A81FC",
    	unique: true 
    })
    	id?: number;

    @Column({
    	field: "UserId",
    	type: DataType.INTEGER 
    })
    	userId!: number;

    @Column({
    	field: "Code",
    	type: DataType.STRING(255) 
    })
    	code!: string;

    @Column({
    	field: "ExpiredAt",
    	type: DataType.STRING 
    })
    	expiredAt!: Date;

}