const { Service }  = require('egg');
class UserService extends Service {
    async create(userInfo) {
      // 获取数据库连接
      const { ctx } = this;
      const { app } = ctx;
      const db = app.mysql;
  
      // 执行插入操作
      const result = await db.insert('user',userInfo);
      //let result  = await db.query('select * from user');
      // 返回结果
      return result;
    }
  }
  
  module.exports = UserService;