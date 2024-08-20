const { Controller } = require('egg');
const UserService = require('../service/user');



class UserController  extends Controller {
  async create() {
    const { ctx } = this;
    const { name, idcard } = ctx.request.body;

            // 创建用户服务实例
            const userService = new UserService(ctx);
      const result = await userService.create({
        name,
        idcard,
      });
    
      // 处理响应
      if (result) {
        ctx.body = {
          code: 200,
          type:"json",
          message: '添加用户成功',
          data: result,
        };
      } else {
        ctx.body = {
          code: 500,
          message: '添加用户失败',
        };
      }
   
  }
}

module.exports = UserController;
