import {
  List,
  Filter,
  TextInput,
  SelectInput,
  ReferenceInput,
  SimpleList,
  Datagrid,
  ReferenceField,
  TextField,
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";

// add filter
const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Find Post" source="q" alwaysOn />
    <ReferenceInput
      label="Find posts by user"
      source="userId"
      reference="users"
      allowEmpty
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const Posts = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List {...props} filters={<PostFilter />}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => (
            <h4 style={{ color: "#333" }}>
              {record.title
                .split(" ")
                .map((rec) => rec.substr(0, 1).toUpperCase() + rec.substr(1))
                .join(" ")}
            </h4>
          )}
          secondaryText={(record) => record.body}
          tertiaryText={(record) => record.userId}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="users" reference="users" source="userId">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
        </Datagrid>
      )}
    </List>
  );
};
