import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface sequelizeMetaAttributes {
    name: string;
}

@Table({
	tableName: "SequelizeMeta",
	timestamps: false 
})
export class sequelizeMeta extends Model<sequelizeMetaAttributes, sequelizeMetaAttributes> implements sequelizeMetaAttributes {

    @Column({
    	type: DataType.STRING(255) 
    })
    @Index({
    	name: "PK__Sequeliz__72E12F1AB9D2EEB9",
    	unique: true 
    })
    @Index({
    	name: "UQ__Sequeliz__72E12F1B045F1A3A",
    	unique: true 
    })
    	name!: string;

}