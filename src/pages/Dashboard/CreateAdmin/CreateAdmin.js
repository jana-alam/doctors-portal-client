import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const CreateAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();
  const handleBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdmin = (e) => {
    e.preventDefault();
    const adminUser = { email };
    fetch("http://localhost:5000/user/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(adminUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form onSubmit={handleAdmin}>
        <TextField
          onBlur={handleBlur}
          label="Email"
          variant="standard"
          type="email"
        />
        <Button type="submit" variant="contained">
          Make Admiv
        </Button>
      </form>
    </div>
  );
};

export default CreateAdmin;
