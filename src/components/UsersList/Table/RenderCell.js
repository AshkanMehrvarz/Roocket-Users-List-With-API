import { Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";

const RenderCell = ({ user, columnKey }) => {
  const cellValue = user[columnKey];
  switch (columnKey) {
    case "name":
      return (
        <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
          {user.email}
        </User>
      );
    case "role":
      return (
        <Col>
          <Row>
            <Text b size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </Row>
          <Row>
            <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
              {user.team}
            </Text>
          </Row>
        </Col>
      );
    case "status":
      return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;

    case "actions":
      return (
        <Row justify='center' align='center'>
          <Col css={{ d: "flex" }}>
            <Tooltip content='Details'>
              <IconButton onClick={() => console.log("View user", user.id)}>
                <EyeIcon size={20} fill='#979797' />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: "flex" }}>
            <Tooltip content='Edit user'>
              <IconButton onClick={() => console.log("Edit user", user.id)}>
                <EditIcon size={20} fill='#979797' />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: "flex" }}>
            <Tooltip
              content='Delete user'
              color='error'
              onClick={() => console.log("Delete user", user.id)}>
              <IconButton>
                <DeleteIcon size={20} fill='#FF0080' />
              </IconButton>
            </Tooltip>
          </Col>
        </Row>
      );
    default:
      return cellValue;
  }
};

export default RenderCell;
