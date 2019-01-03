const bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
<<<<<<< HEAD

        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        }
=======
        // name: {
        //     first: DataTypes.STRING,
        //     allowNull: false,
        //     last: DataTypes.STRING

        // },
        // adress: {
        //     city: DataTypes.STRING,
        //     state: DataTypes.STRING,
        //     zip: DataTypes.INTEGER
        // }
>>>>>>> 0c91f466444176547b40afdd8502eeb1112fb4db
    });

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    User.hook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password,
            bcrypt.genSaltSync(10), null);
    }); return User;
}; 