// models/Model.js
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('Model', {
    name: { type: DataTypes.STRING, allowNull: false },
    year: DataTypes.INTEGER,
    body_type: DataTypes.STRING,
    engine_type: DataTypes.STRING,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.Brand, { foreignKey: 'brand_id', as: 'brand' });
    Model.belongsToMany(models.Feature, { through: 'ModelFeatures', as: 'features' });
    Model.belongsToMany(models.Dealership, { through: 'DealershipModels', as: 'dealerships' });
  };

  return Model;
};
