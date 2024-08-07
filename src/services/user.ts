import axios from "axios";
import { IGithubUser } from "../interfaces/IGithubUser";

const BASE_USER_API = 'https://api.github.com/users';

export const getOne = (username: string) => axios.get<IGithubUser>(`${BASE_USER_API}/${username}`);
