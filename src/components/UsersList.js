import React from "react";

const UsersList = ({ users, removeUser, selectUser }) => {
  return (
    <table className="table-afg">
        <caption className="table-title">User-Manager</caption>
        <thead>
            <tr className="head-title">
                <th>first_name</th>
                <th>first_name</th>
                <th>email</th>
                <th>password</th>
                <th>birthday</th>
            </tr>
        </thead>
        <tbody>
      {
        users.map((user) => (
        <tr className="animation-table" key={user.id}>

            <td>{user.first_name}</td>
            <td>{user.first_name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.birthday}</td>
        <td className='options-user'>   
            <button className='btn-edit circle' onClick={() => removeUser(user.id)}>
            <i className="fa-solid fa-trash"></i>                
            </button>
          
            <button className='btn-delete circle' onClick={() => selectUser(user)}>
            <i className="fa-solid fa-pen"></i>
            </button>
        </td>
        </tr>
      ))}
    </tbody>  
    </table>
  );
};

export default UsersList;
