import { Edit, SimpleForm, TextInput } from "react-admin";

const Username = ({ record }) => <span>{record?.name}</span>;

export const UserEdit = (props) => (
  <Edit {...props} title={<Username />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="company.name" />
      <TextInput source="address.city" />
      <TextInput source="website" />
    </SimpleForm>
  </Edit>
);
