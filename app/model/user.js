module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
  
    const User = app.model.define('user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      user: STRING(30),
      idcard: STRING(30)
    });
  
    return User;
  };

