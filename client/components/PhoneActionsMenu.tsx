import React from "react";
import { Menu } from "antd";
import { DeleteOutlined, EditOutlined, RedoOutlined } from "@ant-design/icons";

interface Props {
  showEditRoomModal: (macAddress: string) => void;
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
          showEditRoomModal(record.mac_address);
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
