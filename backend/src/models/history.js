export default (sequelize, DataTypes) => {
    const History = sequelize.define('history', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nameId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        dateAssigned: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
        {
            freezeTableName: true
        }
    );

    History.associate = (models) => {
        History.belongsTo(models.user, { as: 'pastNames' });
        History.belongsTo(models.name, { as: 'pastUsers' });
    };

    return History;
}