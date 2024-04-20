import { hashSync } from 'bcrypt'
import { UserInfoEntity } from '../entities'

export class UserInfoValue implements UserInfoEntity {
  username: string
  email: string
  user_password: string

  constructor(userInfo: UserInfoEntity) {

    const hashedPassword = hashSync(userInfo.user_password, 10)

    this.username = userInfo.username
    this.email = userInfo.email
    this.user_password = hashedPassword
  }
}