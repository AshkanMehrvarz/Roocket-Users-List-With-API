import { Row, Input, Switch, Text } from "@nextui-org/react";
import { Formik } from "formik";
import ProfilePicture from "./ProfilePicture";

export default function Inputs({ newUserSwaper, setNewUserSwaper }) {
  return (
    <>
      <Input
        type='text'
        bordered
        placeholder='Full name'
        fullWidth
        onChange={(e) =>
          setNewUserSwaper({ ...newUserSwaper, name: e.target.value })
        }
      />
      <Input
        type='email'
        bordered
        placeholder='Email'
        fullWidth
        onChange={(e) =>
          setNewUserSwaper({ ...newUserSwaper, email: e.target.value })
        }
      />
      <Input
        type='number'
        bordered
        placeholder='Age'
        fullWidth
        onChange={(e) =>
          setNewUserSwaper({ ...newUserSwaper, age: e.target.value })
        }
      />
      <Row justify='flex-start' align='center'>
        <ProfilePicture
          newUserSwaper2x={newUserSwaper}
          setNewUserSwaper2x={setNewUserSwaper}
        />
        <Switch
          onChange={(e) =>
            setNewUserSwaper({
              ...newUserSwaper,
              role: e.target.checked ? "Admin" : "Normal User",
            })
          }
        />
        <Text css={{ marginLeft: 12.5 }}>Admin</Text>
      </Row>
    </>
  );
}
