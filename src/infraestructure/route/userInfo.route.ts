import { Router } from "express";
import { SQLUserInfoRepository } from "../repository";
import { UserInfoUseCase } from "../../application/useCases";
import { UserInfoController } from "../controller";
import { pool } from "../db/db";

const route = Router()

const sqlUserInfoRepository = new SQLUserInfoRepository()

const userInfoUseCase = new UserInfoUseCase(sqlUserInfoRepository)

const userInfoController = new UserInfoController(userInfoUseCase)

route.post(`/user`, userInfoController.insertUserInfo)
route.get(`/ping`, async (_req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('respuesta: ' + JSON.stringify(result, null, 2))
    res.send(result.rows[0])
  } catch (error) {
    console.log('error' + error)
  }

  return 'pong\n'
})

export default route