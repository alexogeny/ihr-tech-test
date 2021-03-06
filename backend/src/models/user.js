export default (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pwd: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN
    },
        {
            freezeTableName: true
        }
    );

    User.associate = (models) => {
        User.hasOne(models.name);
        User.hasMany(models.history);
    };

    return User;
};