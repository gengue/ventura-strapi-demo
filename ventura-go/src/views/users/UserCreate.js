import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  PasswordInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  FormDataConsumer,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inlineBlock: { display: "inline-flex", marginRight: "1rem" },
});

const UserCreate = (props) => {
  const classes = useStyles();

  return (
    <Create {...props}>
      <SimpleForm variant="outlined" margin="dense" warnWhenUnsavedChanges>
        <TextInput
          source="email"
          type="email"
          formClassName={classes.inlineBlock}
        />
        <FormDataConsumer formClassName={classes.inlineBlock}>
          {({ formData, ...rest }) => (
            <TextInput
              variant="outlined"
              source="username"
              value={formData.email}
              helperText="Username is populated from email"
            />
          )}
        </FormDataConsumer>
        <PasswordInput source="password" />
        <TextInput source="first_name" formClassName={classes.inlineBlock} />
        <TextInput source="last_name" formClassName={classes.inlineBlock} />
        <SelectInput
          source="sex"
          choices={[
            { id: "male", name: "Male" },
            { id: "female", name: "Female" },
            { id: "other", name: "Other" },
          ]}
        />
        <ReferenceArrayInput
          source="office"
          reference="offices"
          label="VOffice"
        >
          <SelectInput optionText="name" />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="brands" reference="brands" label="Brands">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="locales"
          reference="locales"
          label="Outgoing"
        >
          <SelectArrayInput optionText="id" />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="roles" reference="roles" label="Roles">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <TextInput source="private_email" type="email" />
        <TextInput source="job_title" />
        <DateInput
          source="start_date"
          defaultValue={new Date()}
          formClassName={classes.inlineBlock}
        />
        <DateInput source="end_date" formClassName={classes.inlineBlock} />
        <SelectInput
          source="notification_mode"
          choices={[
            { id: "Email", name: "Email" },
            { id: "FPO", name: "FPO" },
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
