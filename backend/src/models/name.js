export default (sequelize, DataTypes) => {
    const Name = sequelize.define('name', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            freezeTableName: true
        }
    );

    Name.associate = (models) => {
        Name.belongsTo(models.user);
    };

    return Name;
}