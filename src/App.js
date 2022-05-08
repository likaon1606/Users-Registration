import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  // ESTADO PRINCIPAL
  const [users, setUsers] = useState([]);
  const [userEdit, setUserEdit] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const addUser = (user) => {
    axios
      .post("https://users-crud1.herokuapp.com/users/", user)
      .then(() => getUsers());
      console.log(user)
  };

  const removeUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };

  const selectUser = (user) => setUserEdit(user);

  const updateUser = (userInfo) => {
    axios
      .put(
        `https://users-crud1.herokuapp.com/users/${userInfo.id}/`,
        userInfo
      )
      .then(() => {
        getUsers();
        setUserEdit(null);
      });
  };

  return (
    <div className="App">
      <UsersForm
        addUser={addUser}
        userEdit={userEdit}
        selectUser={selectUser}
        updateUser={updateUser}
      />
      <UsersList
        users={users}
        removeUser={removeUser}
        selectUser={selectUser}
      />
    </div>
  );
}

export default App;
