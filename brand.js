// models/Brand.js
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    name: { type: DataTypes.STRING, allowNull: false },
    country: DataTypes.STRING,
    founded_year: DataTypes.INTEGER,
  });

  Brand.associate = (models) => {
    Brand.hasMany(models.Model, { foreignKey: 'brand_id', as: 'models' });
  };

  return Brand;
};
