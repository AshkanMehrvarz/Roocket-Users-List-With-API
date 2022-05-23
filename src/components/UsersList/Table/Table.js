import { Table, Row, Col, User, Text } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import axios from "axios";
import React from "react";
import EditUserModal from "../EditUserModal/EditUserModal";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [editUserModalStatus, setEditUserModalStatus] = React.useState(false);
  const [userId, setUserId] = React.useState();

  const editUserHandler = (user) => {
    setUserId(users.indexOf(user));
    setEditUserModalStatus(true);
  };

  const deleteUserHandler = async (user) => {
    axios.delete(
      `https://6285fd666b6c317d5ba7886d.endapi.io/user_liust/${user.id}`
    );
  };
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "EMAIL", uid: "email" },
    { name: "ROLE", uid: "role" },
    { name: "AGE", uid: "age" },
    { name: "ACTIONS", uid: "actions" },
  ];

  React.useEffect(() => {
    const datasReader = async () => {
      const res = await axios.get(
        "https://6285fd666b6c317d5ba7886d.endapi.io/user_liust"
      );
      // console.log(res.data.data);
      setUsers(res.data.data);
    };
    datasReader();
  }, [users]);

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            squared
            src={user.avatar}
            name={cellValue}
            css={{ p: 0 }}></User>
        );
      case "email":
        return <Text>{user.email}</Text>;
      case "status":
        return <StyledBadge type={user.age}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify='center' align='center'>
            <Col css={{ d: "flex" }}>
              <IconButton onClick={() => editUserHandler(user)}>
                <EditIcon size={20} fill='#979797' />
              </IconButton>
            </Col>
            <Col css={{ d: "flex" }}>
              <IconButton onClick={() => deleteUserHandler(user)}>
                <DeleteIcon size={20} fill='#FF0080' />
              </IconButton>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <div style={{ marginTop: 25 }}>
      <EditUserModal
        editUserModalStatusSwaper={editUserModalStatus}
        setEditUserModalStatusSwaper={setEditUserModalStatus}
        userIdSwaper={userId}
        usersSwaper={users}
      />
      <Table
        bordered
        aria-label='Example table with custom cells'
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode='none'>
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.uid}>{column.name}</Table.Column>
          )}
        </Table.Header>
        <Table.Body items={users}>
          {users.length > 0 ? (
            (item) => {
              return (
                <Table.Row>
                  {(columnKey) => (
                    <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                  )}
                </Table.Row>
              );
            }
          ) : (
            <Table.Row key='999999999'>
              <Table.Cell>---</Table.Cell>
              <Table.Cell>---</Table.Cell>
              <Table.Cell>---</Table.Cell>
              <Table.Cell>---</Table.Cell>
              <Table.Cell>---</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
