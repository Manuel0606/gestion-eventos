import { UserInfoEntity } from "../entities"

export interface UserInfoRepository {
  registerUser(userInfo: UserInfoEntity): Promise<UserInfoEntity | null>
  findUserByEmail(email: string): Promise<UserInfoEntity | null>
  listUsers(): Promise<UserInfoEntity[] | null>
}