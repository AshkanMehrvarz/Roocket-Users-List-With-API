import { Button, Card, Input, Row, Text } from "@nextui-org/react";
import React from "react";
import ProfilePictureIcon from "./ProfilePictureIcon";

export default function ProfilePicture({
  newUserSwaper2x,
  setNewUserSwaper2x,
}) {
  const [file, setFile] = React.useState();

  React.useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      setNewUserSwaper2x({ ...newUserSwaper2x, avatar: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }, [file]);

  return (
    <Row align='center' justify='space-between'>
      <label htmlFor='file'>
        <Card color='default' hoverable={true} clickable={true} bordered>
          <Row justify='space-between' align='center'>
            <Text css={{ marginRight: 20 }}>Profile Picture</Text>
            <ProfilePictureIcon />
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
  );
}
