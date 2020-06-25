import React from "react";
import { List, Datagrid, TextField, FunctionField } from "react-admin";

const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <FunctionField
        label="Fullname"
        sortBy="first_name"
        render={(record) =>
          `${record.first_name || ""} ${record.last_name || ""}`
        }
      />
      <TextField source="email" />
      <TextField source="birthday" />
    </Datagrid>
  </List>
);

export default UserList;
