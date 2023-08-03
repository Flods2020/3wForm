import Users from "../Users/Users.js";
import { formStyles } from "./formStyles.css";
import { useState } from "react";

const Form = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers(prenom);
    console.log("users :::: ", users);
    return users;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Prénom :
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Nom :
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </label>
        <button>Ajouter</button>
      </form>

      <Users users={users} />
    </>
  );
};

export default Form;
