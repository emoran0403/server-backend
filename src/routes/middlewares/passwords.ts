import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import CONFIG from "../../config";

// Returns a hased password from the plaintextPassword
export function generateHash(plaintextPassword: string) {
  const saltRounds = 12;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(plaintextPassword, salt);
  return hash;
}

// Returns a Boolean as the result of comparing a plaintextPassword against the hashedPassword
export function compareHash(plaintextPassword: string, hashedPassword: string) {
  return bcrypt.compareSync(plaintextPassword, hashedPassword);
}

// Returns a signed JWT which includes the username and user_id
export function generateToken(username: string, user_id: number) {
  const token = jwt.sign({ username, user_id }, CONFIG.jwt.secret);
  return token;
}
