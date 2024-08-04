import { Table, Column, Model, DataType, Default } from "sequelize-typescript";

@Table({ tableName: "products" })

class Product extends Model {
@Column({ type: DataType.STRING(100), allowNull: false })
declare name: string;

@Column({ type: DataType.FLOAT, defaultValue: 0 })
declare price: number;

@Default(true)  // El producto se crea disponible por defecto   
@Column({ type: DataType.BOOLEAN, defaultValue: true }  )
declare availability: boolean;
}

export default Product;