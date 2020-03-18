'use strict'

module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize

  const Tasks = app.model.define(
    'tasks',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      appId: INTEGER,
      userId: INTEGER,
      status: INTEGER,
      description: STRING(255),
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
      tableName: 'tasks'
    }
  )

  Tasks.associate = function() {
    app.model.Tasks.belongsTo(app.model.User, {
      foreignKey: 'userId'
    })
  }

  return Tasks
}
