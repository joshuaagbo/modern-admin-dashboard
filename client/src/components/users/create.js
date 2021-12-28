import { Create, SimpleForm, TextInput } from "react-admin";

export const CreateUser = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Name" source="name" />
      <TextInput label="Username" source="username" />
      <TextInput label="Email" source="email" />
      <TextInput label="City" source="address.city" />
      <TextInput label="Company" source="company.name" />
      <TextInput label="Website" source="website" />
      <TextInput label="Phone" source="phone" />
    </SimpleForm>
  </Create>
);
