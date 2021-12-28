import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/styles";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UsersList } from "./components/users/users";
import { Posts } from "./components/posts/posts";
import { UserEdit } from "./components/users/edit";
import { PostEdit } from "./components/posts/edit";
import { CreatePost } from "./components/posts/create";
import { CreateUser } from "./components/users/create";
import { Dashboard } from "./dashboard";
import { AuthProvider } from "./auth";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  const { Container } = userStyles();
  return (
    <>
      <Admin
        dashboard={Dashboard}
        icon={UserIcon}
        dataProvider={dataProvider}
        authProvider={AuthProvider}
        className={Container}
      >
        <Resource
          name="users"
          list={UsersList}
          edit={UserEdit}
          create={CreateUser}
          icon={UserIcon}
        />
        <Resource
          name="posts"
          list={Posts}
          edit={PostEdit}
          create={CreatePost}
          icon={PostIcon}
        />
      </Admin>
    </>
  );
}

export default App;

const userStyles = makeStyles(() => ({
  Container: {
    background: "#333",
  },
}));
