import React from "react";
import DebounceSelect from "./DebounceSelect";

interface Props {}

interface RoomValue {
  label: string;
  value: string;
}

const RoomSelect = (props: Props) => {
  const [value, setValue] = React.useState<RoomValue[]>([]);

  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Select users"
      fetchOptions={fetchUserList}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      style={{ width: "100%" }}
    />
  );
};

export default RoomSelect;

// Usage of DebounceSelect

async function fetchUserList(username: string): Promise<RoomValue[]> {
  console.log("fetching user", username);

  return fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((body) =>
      body.results.map(
        (user: {
          name: { first: string; last: string };
          login: { username: string };
        }) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        })
      )
    );
}

const fetchRoomList = async (search: string): Promise<RoomValue[]> => {
  console.log("fetching rooms", search);

  

  return fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((body) =>
      body.results.map(
        (user: {
          name: { first: string; last: string };
          login: { username: string };
        }) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        })
      )
    );
};
