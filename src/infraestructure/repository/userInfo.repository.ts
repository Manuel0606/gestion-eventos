import { UserInfoEntity } from "../../domain/entities"
import { UserInfoRepository } from "../../domain/repositories"
import { pool } from "../db/db"


export class SQLUserInfoRepository implements UserInfoRepository {
  async registerUser(userInfo: UserInfoEntity): Promise<UserInfoEntity | null> {
    try {
      const query = 'INSERT INTO user_info (username, email, user_password) VALUES ($1, $2, $3) RETURNING *'
      const values = [userInfo.username, userInfo.email, userInfo.user_password]
      console.log('values: ' + values)
      const result = await pool.query(query, values)
      return result.rows[0]
    } catch (error) {
      console.error('Error DB' + error)
      throw new Error("Method not implemented.")
    }
  }

  async findUserByEmail(email: string): Promise<UserInfoEntity | null> {
    try {
      const query = 'SELECT * FROM user_info WHERE email = $1'
      const values = [email]
      const result = await pool.query(query, values)
      return result.rows[0]
    } catch (error) {
      console.error(error);
      throw new Error("Method not implemented.")
    }
  }

  async listUsers(): Promise<UserInfoEntity[] | null> {
    try {
      const query = 'SELECT * FROM user_info'
      const result = await pool.query(query)
      return result.rows
    } catch (error) {
      console.error(error)
      throw new Error("Method not implemented.")
    }
  }
}