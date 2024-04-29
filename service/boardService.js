const logger = require('../lib/logger');
const BoardDao = require('../dao/boardDao');

const service = {
  // Board 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await BoardDao.insert(params);
      logger.debug(`(BoardService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(BoardService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },
  // selectList
  async list(params) {
    let result = null;

    try {
      result = await BoardDao.selectList(params);
      logger.debug(`(BoardService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(BoardService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // selectInfo
  async info(params) {
    let result = null;

    try {
      result = await BoardDao.selectInfo(params);
      logger.debug(`(BoardService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(BoardService.info) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // update
  async edit(params) {
    let result = null;

    try {
      result = await BoardDao.update(params);
      logger.debug(`(BoardService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(BoardService.edit) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // delelte
  async delete(params) {
    let result = null;

    try {
      result = await BoardDao.delete(params);
      logger.debug(`(BoardService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(BoardService.delete) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
};

module.exports = service;
