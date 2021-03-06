import {environment} from "../../environments/environment";

const baseUrl = environment.API;

export const urls = {
  auth: `${baseUrl}/auth`,
  users: `${baseUrl}/users`,
  cars: `${baseUrl}/cars`,
  refresh: `${baseUrl}/refresh`,
}
