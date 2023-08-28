import React from "react";
import userData from "../../../UserData.json";

type Props = {};

const hello = (props: Props) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Stocks</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.stock}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default hello;
