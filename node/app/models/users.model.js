module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        userId: {
            type: Sequelize.INTEGER, unique: true, allowNull: false, primaryKey: true, autoIncrement: true
        },
        name: {
            type: Sequelize.STRING, allowNull: false
        },
        email: {
            type: Sequelize.STRING, unique: true, allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING, allowNull: false
        },
        ventilationLevel: {
            type: Sequelize.INTEGER
        },
        heatingLevel: {
            type: Sequelize.INTEGER
        }
    });

    return user;
};
