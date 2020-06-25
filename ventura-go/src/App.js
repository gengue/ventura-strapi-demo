import React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import Cookies from "./helpers/Cookies";
import strapiProvider from "./providers/dataProvider";
import authProvider from "./providers/authProvider";
import userCrud from "./views/users";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = Cookies.getCookie("token");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = strapiProvider("http://localhost:1337", httpClient);

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" {...userCrud} />
    <Resource name="brands" />
    <Resource name="locales" />
    <Resource name="roles" />
    <Resource name="offices" />
  </Admin>
);

export default App;
