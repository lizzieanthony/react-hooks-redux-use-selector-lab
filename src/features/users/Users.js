import React from "react";
import { useSelector } from "react-redux";

function Users() {

  const users = useSelector((state) => state.users);
  const usersCount = useSelector((state) => state.users.length);


  return (
    <div>
      <ul>
        Users:
        {users.map((user) => (
          <p>{user.username} from {user.hometown}</p>
        ))}
      </ul>
      Total Users: {usersCount}
    </div>
  );
}

export default Users;
