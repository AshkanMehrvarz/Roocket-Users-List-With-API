import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import Inputs from "./Inputs";
import axios from "axios";

export default function AddUserModal({
  addUserModalStatusSwaper,
  setAddUserModalStatusSwaper,
}) {
  const closeModalHandler = () => setAddUserModalStatusSwaper(false);
  const [newUser, setNewUser] = React.useState({ role: "Normal User" });

  const addUserHandler = async () => {
    if (Object.keys(newUser).length > 1) {
      console.log(newUser);
      try {
        const res = await axios.post(
          "https://6285fd666b6c317d5ba7886d.endapi.io/user_liust",
          newUser
        );

        console.log(res.response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    }
  };

  return (
    <div>
      <Modal
        closeButton
        blur
        aria-labelledby='modal-title'
        open={addUserModalStatusSwaper}
        onClose={closeModalHandler}>
        <Modal.Header>
          <Text size={18} weight='bold'>
            Add New User
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Inputs newUserSwaper={newUser} setNewUserSwaper={setNewUser} />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color='error' onClick={closeModalHandler}>
            Close
          </Button>
          <Button auto onClick={addUserHandler}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
