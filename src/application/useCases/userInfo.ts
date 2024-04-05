import { UserInfoEntity } from "domain/entities";
import { UserInfoRepository } from "domain/repositories";
import { UserInfoValue } from "domain/values";

export class UserInfoUseCase {
  constructor(private userInfoRepository: UserInfoRepository) {}

  async registerUser(userInfo: UserInfoEntity) {
    const userValue = new UserInfoValue(userInfo);
    return this.userInfoRepository.registerUser(userValue);
  }

  async findUserByEmail(email: string) {
    return this.userInfoRepository.findUserByEmail(email);
  }

  async listUsers() {
    return this.userInfoRepository.listUsers();
  }
}