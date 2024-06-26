const Sequelize = require('sequelize');

module.exports = class UserBookmark extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userid: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false,
      },
      postid: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false,
      },
    }, {
      sequelize,
      // tableName: 'tableName', // table명을 수동으로 생성 함
      // freezeTableName: true, // true: table명의 복수형 변환을 막음
      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
    });
  }

  static associate(db) {
    db.UserBookmark.belongsTo(db.User, { foreignKey: { name: 'userId', onDelete: 'SET NULL', as: 'User' } });
  }
};
