const express = require('express');
const logger = require('../lib/logger');
const boardRouter = require('./board');
const userRouter = require('./user');
const chatroomRouter = require('./chatroom');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// logTest
router.get('/log-test', (req, res, next) => {
  logger.error('This message is error');
  logger.warn('This message is warn');
  logger.info('This message is info');
  logger.verbose('This message is verbose');
  logger.debug('This message is debug');
  logger.silly('This message is silly');

  res.send('log test');
});

router.use('/boards', boardRouter);
router.use('/users', userRouter);
router.use('/chatrooms', chatroomRouter);

module.exports = router;
