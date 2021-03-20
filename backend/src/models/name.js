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
        },
        dateAssigned: {
            type: DataTypes.DATE,
            allowNull: true
        },
        userAssigned: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
        {
            freezeTableName: true
        }
    );

    Name.associate = (models) => {
        Name.belongsTo(models.user);
        Name.hasMany(models.history);
    };

    return Name;
}