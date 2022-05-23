import { Button, Row, Text } from "@nextui-org/react";
import React from "react";
import AddUserModal from "./AddUserModal/AddUserModal";

export default function Header() {
  const [addUserModalStatus, setAddUserModalStatus] = React.useState(false);
  const openModalHandler = () => setAddUserModalStatus(true);

  return (
    <div style={{ marginTop: 25 }}>
      <Row justify='space-between' align='center'>
        <Text h1>Users List</Text>
        <Button onClick={openModalHandler}>Add User</Button>
      </Row>
      <AddUserModal
        addUserModalStatusSwaper={addUserModalStatus}
        setAddUserModalStatusSwaper={setAddUserModalStatus}
      />
    </div>
  );
}
