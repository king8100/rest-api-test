// models/Feature.js
module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('Feature', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT,
  });

  Feature.associate = (models) => {
    Feature.belongsToMany(models.Model, { through: 'ModelFeatures', as: 'models' });
  };

  return Feature;
};
