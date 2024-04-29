const { sequelize } = require('./connection');
const Board = require('./board');
const User = require('./user');
const UserPost = require('./userPost');
const UserBookmark = require('./userBookmark');

const db = {};

db.sequelize = sequelize;

// model 생성
db.Board = Board;
db.User = User;
db.UserBookmark = UserBookmark;
db.UserPost = UserPost;

// model init
Board.init(sequelize);
User.init(sequelize);
UserPost.init(sequelize);
UserBookmark.init(sequelize);

// Board.associate(db);
User.associate(db);
UserBookmark.associate(db);
UserPost.associate(db);

module.exports = db;
