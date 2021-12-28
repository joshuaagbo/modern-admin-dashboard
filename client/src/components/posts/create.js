import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { makeStyles } from "@material-ui/core";

export const CreatePost = (props) => {
  const { Textarea } = useStyles();
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <TextInput label="Body" multiline source="body" className={Textarea} />
      </SimpleForm>
    </Create>
  );
};

const useStyles = makeStyles(() => ({
  Textarea: {
    width: "50%",
  },
}));
