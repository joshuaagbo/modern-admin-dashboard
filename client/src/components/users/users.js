import {
  Datagrid,
  List,
  TextField,
  EmailField,
  EditButton,
  useRecordContext,
  Filter,
  TextInput,
} from "react-admin";
import { makeStyles } from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";

//custom UrlField
const UserWebsite = ({ source }) => {
  const record = useRecordContext();
  const { icon } = useStyles();

  return record ? (
    <a
      href={record[source]}
      target="self"
      rel="noreferrer"
      style={{ textDecoration: "none", color: "#3b5998" }}
    >
      {record[source]}
      <LaunchIcon fontSize="small" className={icon} />
    </a>
  ) : null;
};

// add filter
const UsersFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search Users" source="q" alwaysOn />
  </Filter>
);

export const UsersList = (props) => {
  return (
    <List filters={<UsersFilter />} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="address.city" />
        <TextField source="company.name" />
        <UserWebsite source="website" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

const useStyles = makeStyles(() => ({
  icon: {
    width: ".8em",
    height: ".8em",
    color: "#3b5998",
  },
}));
