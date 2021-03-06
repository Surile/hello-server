'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize

  const User = app.model.define(
    'user',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      age: INTEGER,
      createdAt: {
        type: DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: NOW
      },
      updatedAt: {
        type: DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: NOW
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      tableName: 'users'
    }
  )

  User.associate = function() {
    app.model.User.hasMany(app.model.Tasks, {
      foreignKey: 'userId'
    })
  }

  return User
}
