// models/Dealership.js
module.exports = (sequelize, DataTypes) => {
  const Dealership = sequelize.define('Dealership', {
    name: { type: DataTypes.STRING, allowNull: false },
    location: DataTypes.STRING,
    contact_info: DataTypes.STRING,
  });

  Dealership.associate = (models) => {
    Dealership.belongsToMany(models.Model, { through: 'DealershipModels', as: 'models' });
  };

  return Dealership;
};
