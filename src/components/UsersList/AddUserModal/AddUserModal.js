import React from "react";
import { Modal, Button, Text, Loading } from "@nextui-org/react";
import Inputs from "./Inputs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddUserModal({
  addUserModalStatusSwaper,
  setAddUserModalStatusSwaper,
}) {
  const closeModalHandler = () => {
    setAddUserModalStatusSwaper(false);
    setLoadingButton(false);
    setNewUser({ role: "Normal User" });
  };
  const [loadingButtun, setLoadingButton] = React.useState(false);
  const [newUser, setNewUser] = React.useState({ role: "Normal User" });

  const addUserHandler = async () => {
    if (Object.keys(newUser).length > 1) {
      try {
        setLoadingButton(true);
        const res = await axios.post(
          "https://6285fd666b6c317d5ba7886d.endapi.io/user_liust",
          newUser
        );
        console.log(res.status);

        closeModalHandler();
      } catch (error) {
        if (error.response.status !== 200) {
          console.log(error.response.data.status);
          console.log(error.response.data.message);
        }
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
          {!loadingButtun ? (
            <Button auto onClick={addUserHandler}>
              Add User
            </Button>
          ) : (
            <Button disabled auto bordered color='primary' css={{ px: "$13" }}>
              <Loading color='currentColor' size='sm' />
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
