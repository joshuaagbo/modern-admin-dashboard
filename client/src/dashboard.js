import { Card, CardHeader, CardContent } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

export const Dashboard = () => {
  const user = localStorage.getItem("username");
  return user ? (
    <Card>
      <div>
        <NotificationsIcon
          fontSize="large"
          style={{
            float: "left",
            marginTop: 15,
            marginLeft: 20,
            color: "#daa550",
          }}
        />
        <CardHeader
          title={`Welcome ${user.substr(0, 1).toUpperCase()}${user.substr(1)}!`}
        />
      </div>
      <CardContent>You're login as admin.</CardContent>
    </Card>
  ) : (
    <Card>
      <CardHeader title="Welcome To The Administrative Dashboard!" />
      <CardContent>
        You are not logged-in. Pls Login To Continue....
      </CardContent>
    </Card>
  );
};
