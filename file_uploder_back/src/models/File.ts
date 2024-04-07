import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';

interface FileAttributes {
  id?: number;
  fileName: string;
  fileSize: number;
  uploadedDate: Date;
}

class File extends Model<FileAttributes> implements FileAttributes {
  public id!: number;
  public fileName!: string;
  public fileSize!: number;
  public uploadedDate!: Date;
}

File.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileSize: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uploadedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    tableName: 'File',
    modelName: 'file'
  }
);

export { File };
