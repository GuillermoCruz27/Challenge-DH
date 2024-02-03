module.exports = (sequelize, DataTypes) => {
  const alias = 'Profession';
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  const config = {
    tableName: 'profession',
    timestamps: true,
  };

  const Profession = sequelize.define(alias, cols, config);

  Profession.associate = (models) => {
    Profession.belongsToMany(models.Applicant, {
      through: 'applicant_profession',
      timestamps: true,
      foreignKey: 'profession_id',
      otherKey: 'applicant_id',
    });
  };

  return Profession;
};
