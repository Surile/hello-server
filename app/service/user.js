'use strict'

const Service = require('egg').Service

class User extends Service {
  async list() {
    return this.ctx.model.User.findAll({
      include: [
        {
          model: this.ctx.model.Tasks,
          as: 'tasks'
        }
      ]
    })
  }
}

module.exports = User
