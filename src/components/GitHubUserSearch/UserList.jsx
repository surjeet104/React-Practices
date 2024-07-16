import React from "react";

const UserList = (props) => {
  // console.log(props);
  const { users } = props;
  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img src={user.avatar_url} alt={user.login} />
          <a href={user.html_url} target="_blank">
            {user.login}
          </a>
        </div>
      ))}
    </div>
  );
};

export default UserList;
