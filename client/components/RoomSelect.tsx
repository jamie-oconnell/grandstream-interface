import React from "react";
import { Select } from "antd";
import { useRoomsQuery } from "../generated";

interface Props {
  value: string;
  handleChange: (string) => void;
}

const RoomSelect = ({ value, handleChange }: Props) => {
  const { data, isLoading, isSuccess, error } = useRoomsQuery();
  console.log(data);

  return (
    <Select
      showSearch
      value={value}
      placeholder="Select room"
      options={
        data &&
        data.rooms.map((room) => {
          return { label: room.number, value: room.id };
        })
      }
      filterOption={(input, option) =>
        option.label.toString().toLowerCase().indexOf(input.toLowerCase()) >=
          0 ||
        option.label.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      onChange={(newValue) => {
        handleChange(newValue);
      }}
      style={{ width: "100%" }}
    />
  );
};

export default RoomSelect;
