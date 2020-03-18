'use strict'

const Service = require('egg').Service

class Tasks extends Service {
  async list() {
    return this.ctx.model.Tasks.findAll({
      include: [
        {
          model: this.ctx.model.User,
          as: 'user'
        }
      ]
    })
  }
}

module.exports = Tasks
