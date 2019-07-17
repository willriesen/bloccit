'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  
  Topic.associate = function(models) {
    Topic.hasMany(models.Banner, {
      foreignKey: 'topicId',
      as: 'banners',
    });

    Topic.hasMany(models.Rule, {
      foreignKey: 'topicId',
      as: 'rules',
    });

    Topic.hasMany(models.Post, {
      foreignKey: "topicId",
      as: "posts"
    });
  };
  return Topic;
};