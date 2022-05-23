import { Button, Row, Spacer, Text } from "@nextui-org/react";

export default function Header() {
  return (
    <div style={{ marginTop: 25 }}>
      <Row justify='space-between' align='center'>
        <Text h1>Users List</Text>
        <Button>Add User</Button>
      </Row>
    </div>
  );
}
