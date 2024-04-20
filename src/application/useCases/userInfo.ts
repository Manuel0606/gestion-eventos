import { UserInfoEntity } from "../../domain/entities";
import { UserInfoRepository } from "../../domain/repositories";
import { UserInfoValue } from "../../domain/values";


export class UserInfoUseCase {
  constructor(private readonly userInfoRepository: UserInfoRepository) {}

  public async registerUser(userInfo: UserInfoEntity) {
    const userValue = new UserInfoValue(userInfo);
    return this.userInfoRepository.registerUser(userValue);
  }

  public async findUserByEmail(email: string) {
    return this.userInfoRepository.findUserByEmail(email);
  }

  public async listUsers() {
    return this.userInfoRepository.listUsers();
  }
}