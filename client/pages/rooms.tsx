import React from "react";
import { Table } from "antd";
import { useRoomsQuery } from "../generated";

interface Props {}

const columns = [
  {
    title: "Room Number",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Phone",
    dataIndex: "age",
    key: "age",
  },
];

const rooms = (props: Props) => {
  const { data } = useRoomsQuery(null, { refetchInterval: 60000 });
  return (
    <Table
      dataSource={data && data.rooms}
      columns={columns}
      pagination={false}
    />
  );
};

export default rooms;
