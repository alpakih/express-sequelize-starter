'use strict';
module.exports = (sequelize, DataTypes) => {
  const Compare = sequelize.define('Compare', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nik: DataTypes.STRING,
    selfieImage: DataTypes.STRING,
    ktpImage: DataTypes.STRING,
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    timestamps: true,
    underscored: true
  });
  Compare.associate = function (models) {
    // associations can be defined here
  };
  return Compare;
};