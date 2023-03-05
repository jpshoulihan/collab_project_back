import "dotenv/config";
import "module-alias/register";
import App from "./app";
import ValidateEnv from "@/utils/validateEnv";
import PostController from "@/resources/post/post.controller";
import UserController from "@/resources/user/user.controller";

//ensures env vars are present, exits node program if envs are missing
ValidateEnv();

//app takes obj takes array of routes as 1st arg
const app = new App(
    [new PostController(), new UserController()],
    Number(process.env.PORT)
);

//calling public method of class App to listen port num passed in
app.listen();
