import React from "react";
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Switch,
  Card,
  User,
} from "@nextui-org/react";
import axios from "axios";

export default function EditUserModal({
  editUserModalStatusSwaper,
  setEditUserModalStatusSwaper,
  userIdSwaper,
  usersSwaper,
}) {
  const closeModalHandler = () => {
    setEditUserModalStatusSwaper(false);
  };

  const [temp, setTemp] = React.useState();

  const [file, setFile] = React.useState();

  React.useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      setTemp({ ...temp, avatar: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }, [file]);

  React.useEffect(() => {
    setTemp(usersSwaper[userIdSwaper]);
  }, [userIdSwaper]);
  const editUserHandler = async () => {
    console.log(userIdSwaper);
    await axios.put(
      `https://6285fd666b6c317d5ba7886d.endapi.io/user_liust/${usersSwaper[userIdSwaper].id}`,
      temp
    );
    closeModalHandler();
  };

  return (
    <div>
      {editUserModalStatusSwaper ? (
        <Modal
          closeButton
          blur
          aria-labelledby='modal-title'
          open={editUserModalStatusSwaper}
          onClose={closeModalHandler}>
          <Modal.Header>
            <Text size={24} weight='bold'>
              Edit User
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              initialValue={usersSwaper[userIdSwaper].name}
              bordered
              label='Full name'
              type='text'
              onChange={(e) => setTemp({ ...temp, name: e.target.value })}
            />

            <Input
              initialValue={usersSwaper[userIdSwaper].email}
              bordered
              label='Email'
              type='email'
              onChange={(e) => setTemp({ ...temp, email: e.target.value })}
            />

            <Input
              initialValue={usersSwaper[userIdSwaper].age}
              bordered
              label='Age'
              type='number'
              onChange={(e) => setTemp({ ...temp, age: e.target.value })}
            />

            <Row justify='flex-start' align='center'>
              <Row align='center' justify='space-between'>
                <label htmlFor='file'>
                  <Card
                    color='default'
                    hoverable={true}
                    clickable={true}
                    bordered>
                    <Row justify='space-between' align='center'>
                      <Text css={{ marginRight: 20 }}>Update Picture</Text>
                      <User
                        squared
                        src={usersSwaper[userIdSwaper].avatar}
                        css={{ p: 0 }}></User>
                    </Row>
                  </Card>
                </label>
                <input
                  type='file'
                  style={{ opacity: 0, zIndex: -1, position: "absolute" }}
                  id='file'
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </Row>
              <Switch
                initialChecked={usersSwaper[userIdSwaper].role === "Admin"}
                onChange={(e) =>
                  setTemp({
                    ...temp,
                    role: e.target.checked ? "Admin" : "Normal User",
                  })
                }
              />
              <Text css={{ marginLeft: 12.5 }}>Admin</Text>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color='error' onClick={closeModalHandler}>
              Close
            </Button>
            <Button auto onClick={editUserHandler}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </div>
  );
}
