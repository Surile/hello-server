// app/controller/users.js
const Controller = require('egg').Controller

class UserController extends Controller {
  async index() {
    const ctx = this.ctx
    ctx.body = await ctx.service.user.list()
  }
}

module.exports = UserController
