const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const userService = require('../service/userService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      name: req.body.name,
      id: req.body.id,
      password: req.body.password,
      phone: req.body.phone,
    };
    logger.info(`(user.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.name || !params.userid || !params.password) {
      const err = new Error('Not allowed null (name, userid, password)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await userService.reg(params);
    logger.info(`(user.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 리스트 조회
router.get('/', async (req, res) => {
  try {
    const params = {
      name: req.query.name,
    };
    logger.info(`(user.list.params) ${JSON.stringify(params)}`);

    const result = await userService.list(params);
    logger.info(`(user.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 상세정보 조회
router.get('/:id', async (req, res) => {
  try {
    const params = {
      name: req.body.name,
      id: req.body.id,
      password: req.body.password,
      phone: req.body.phone,
    };
    logger.info(`(user.info.params) ${JSON.stringify(params)}`);

    const result = await userService.info(params);
    logger.info(`(user.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 수정
router.put('/:id', async (req, res) => {
  try {
    const params = {
      name: req.body.name,
      id: req.body.id,
      password: req.body.password,
      phone: req.body.phone,
    };
    logger.info(`(user.update.params) ${JSON.stringify(params)}`);

    const result = await userService.edit(params);
    logger.info(`(user.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 삭제
router.delete('/:id', async (req, res) => {
  try {
    const params = {
      name: req.params.name,
      id: req.params.id,
      password: req.params.password,
      phone: req.params.phone,
    };
    logger.info(`(user.delete.params) ${JSON.stringify(params)}`);

    const result = await userService.delete(params);
    logger.info(`(user.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
