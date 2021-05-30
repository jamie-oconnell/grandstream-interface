import React from "react";
import { Menu } from "antd";
import { DeleteOutlined, EditOutlined, RedoOutlined } from "@ant-design/icons";

interface Props {
  showEditRoomModal: (
    id: number,
    macAddress: string,
    room_number: number
  ) => void;
  showDeleteConfirm: () => void;
  record: any;
}

const PhoneActionsMenu = ({
  showEditRoomModal,
  showDeleteConfirm,
  record,
}: Props) => {
  return (
    <Menu>
      <Menu.Item
        onClick={() => {
          showEditRoomModal(
            record.id,
            record.mac_address,
            record.room && record.room.number
          );
        }}
        icon={<EditOutlined />}
      >
        Edit Room Number
      </Menu.Item>
      <Menu.Item icon={<RedoOutlined />}>Reboot</Menu.Item>
      <Menu.Item onClick={showDeleteConfirm} icon={<DeleteOutlined />} danger>
        Delete
      </Menu.Item>
    </Menu>
  );
};

export default PhoneActionsMenu;
