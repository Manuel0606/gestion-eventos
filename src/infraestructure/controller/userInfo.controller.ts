
import { Request, Response } from "express"
import { UserInfoUseCase } from "../../application/useCases"
import { UserInfoEntity } from "../../domain/entities"

export class UserInfoController {
  constructor(private userInfoUseCase: UserInfoUseCase) {
    this.insertUserInfo = this.insertUserInfo.bind(this)
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
}