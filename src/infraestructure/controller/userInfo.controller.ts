
import { Request, Response } from "express"
import { UserInfoUseCase } from "../../application/useCases"
import { UserInfoEntity } from "../../domain/entities"

export class UserInfoController {
  constructor(private userInfoUseCase: UserInfoUseCase) {
    this.insertUserInfo = this.insertUserInfo.bind(this)
    this.getUserInfo = this.getUserInfo.bind(this)
    this.listUsers = this.listUsers.bind(this)
  }

  public async insertUserInfo(req: Request, res: Response) {
    // Logic to insert user info
    try {
      console.log('respuesta insertar user: ' + JSON.stringify(req.body, null, 2))
      const userInfo = req.body as UserInfoEntity
      const result = await this.userInfoUseCase.registerUser(userInfo)
      return res.send(result)
    } catch (error) {
      console.error(error)
      return res.send(error)
    }
  }

  public async getUserInfo(req: Request, res: Response) {
    // Logic to get user info
    try {
      console.log('respuesta obtener user: ' + JSON.stringify(req.params, null, 2))
      const { id } = req.params

      const result = await this.userInfoUseCase.findUserByEmail(id)
      return res.send(result)
    } catch (error) {
      console.error(error)
      return res.send(error)
    }
  }

  public async listUsers(req: Request, res: Response) {
    // Logic to list users
    try {
      console.log('respuesta listar users: ' + JSON.stringify(req.body, null, 2))
      const result = await this.userInfoUseCase.listUsers()
      return res.send(result)
    } catch (error) {
      console.error(error)
      return res.send(error)
    }
  }
}