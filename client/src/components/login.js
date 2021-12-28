import { Card, CardHeader } from "@material-ui/core";

export const LoginComponent = () => (
  <Card>
    <CardHeader title="Login" />
    <form>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="submit" value="submit" />
    </form>
  </Card>
);
