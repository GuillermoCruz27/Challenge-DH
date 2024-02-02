const { Sequelize, DataTypes } = require("sequelize");

module.exports= (Sequelize,DataTypes) => {
    const alias = "Applicant";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        dni: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: true
        },
        url_linkedin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    };
    const config = {
        tableName: "Applicant",
        timestamps: true
    };

    const Applicant = Sequelize.define(alias,cols,config);

    return Applicant;
}