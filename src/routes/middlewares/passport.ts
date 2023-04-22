import passport from "passport";
import * as PassportJWT from "passport-jwt";
import * as PassportLocal from "passport-local";
import CONFIG from "../../config";
import { Application } from "express";
import { compareHash } from "./passwords";
import { queries } from "../../db/schemas/esoapp";

export interface player {
  player_uuid: number;
  username: string;
  password: string;
  created_at: string;
}

// redefine the User object within Express as our own User with our defined types
declare global {
  namespace Express {
    interface User extends player {}
  }
}

export function configurePassport(app: Application) {
  passport.serializeUser((user, done) => {
    console.log("here 1");
    if (user.password) delete user.password;
    done(null, user);
  });

  passport.deserializeUser((user: any, done) => {
    console.log("here 2");

    done(null, user);
  });

  // Logging in => authenticate("local") Middleware
  passport.use(
    new PassportLocal.Strategy(
      {
        usernameField: "username",
        session: false,
      },
      async (username, password, done) => {
        console.log("here 3");

        try {
          // query the DB for a user with the given email;
          const results = await queries.auth.findPlayer(username);
          console.log("here 4");

          const userInfo = results[0];
          console.log("here 5");

          // check if the provided password matches the hashedPassword from the DB
          if (results.length && compareHash(password, userInfo.password!)) {
            // if so, remove it from the playerInfo, and call done, passing forward the playerInfo
            delete userInfo.password;
            done(null, userInfo);
          } else {
            done(null, false);
          }
        } catch (error) {
          // done(error);
          done(null, false);
        }
      }
    )
  );

  // Validate token => authenticate("jwt") Middleware to protect routes
  passport.use(
    new PassportJWT.Strategy(
      {
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: CONFIG.jwt.secret,
      },
      (payload, done) => {
        console.log("payload", payload);

        try {
          done(null, payload);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );
  app.use(passport.initialize()); // initialize passport so that we can use its middleware
}
