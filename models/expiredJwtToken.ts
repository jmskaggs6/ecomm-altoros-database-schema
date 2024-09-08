import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface expiredJwtTokenAttributes {
    id?: number;
    userId: number;
    token: string;
    createdAt: Date;
    updatedAt: Date;
}

@Table({
	tableName: "ExpiredJwtToken",
	timestamps: false 
})
export class expiredJwtToken extends Model<expiredJwtTokenAttributes, expiredJwtTokenAttributes> implements expiredJwtTokenAttributes {

    @Column({
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PK__ExpiredJ__3213E83F1E81D198",
    	unique: true 
    })
    @Index({
    	name: "UQ__ExpiredJ__3213E83E47B48EDA",
    	unique: true 
    })
    	id?: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	userId!: number;

    @Column({
    	type: DataType.STRING(255) 
    })
    	token!: string;

    @Column({
    	type: DataType.STRING 
    })
    	createdAt!: Date;

    @Column({
    	type: DataType.STRING 
    })
    	updatedAt!: Date;

}