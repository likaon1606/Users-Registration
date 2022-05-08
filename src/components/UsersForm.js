import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UsersForm = ({
  addUser,
  userEdit,
  selectUser,
  updateUser
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    console.log("Cambió userEdit");
    if (userEdit) {
      setFirstName(userEdit.first_name);
      setLastName(userEdit.last_name);
      setEmail(userEdit.email);
      setPassword(userEdit.password);
      setBirthday(userEdit.birthday);
    } else {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setBirthday("");
    }
  }, [userEdit]);

  const submit = (e) => {
    e.preventDefault();
    const user = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      birthday
    };
    if (userEdit) {
      user.id = userEdit.id;
      updateUser(user);
    } else {
      addUser(user);
      console.log(user," us")
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={submit}>
        
        {/*FIRST_NAME */}
            <input type="text"
                id="firstName"
                placeholder="first_name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}/>
        {/*LAST NAME */}
            <input type="text"
                id="lastName"
                placeholder="last_name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}/>
        {/*EMAIL */}
            <input type="text"
                id="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
        {/*PASSWORD */}
            <input type="text"
                id="password"
                placeholder="Enter password (only numbers)"
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>
        {/*BIRTHDAY */}        
            <input type="text"
                id="birthday"
                placeholder="Enter birthday (AAAA-MM-DD)"
                onChange={(e) => setBirthday(e.target.value)}
                value={birthday}/>
        {/*USER REGISTER */}
        <button className="register">User Register</button>
        {userEdit && (
          <button className="cancel" type="button" onClick={() => selectUser(null)}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default UsersForm;
