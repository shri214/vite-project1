import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import "./style.css";

interface FormData {
  Name: string;
  Email: string;
  Phone: number;
}

export const MyForm = () => {
  const [formData, setFormData] = useState<FormData>({
    Name: "",
    Email: "",
    Phone: NaN,
  });
  const [flag, setFlag] = useState(false);

  const navigation=useNavigate();

  const Submit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.Name === "" || formData.Email === "" || formData.Phone === 0) {
      setFlag(true);
    } else {
      setFlag(false);
      console.log(formData);
      localStorage.setItem("User", JSON.stringify(formData))
      setFormData({ Name: "", Email: "", Phone: 0 });
      navigation("/profile")
    }
  };


 
  return (
    <form onSubmit={Submit} className="forms">
      <h1 style={{ textAlign: "center" }}>Sing Up</h1>

      <div className="groups">
        <label htmlFor="Name">
          {" "}
          First Name <strong style={{ color: "red" }}>*</strong>
        </label>
        <input
          type="text"
          placeholder="userName"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData((prev) => ({ ...prev, Name: e.target.value }))
          }
          value={formData.Name}
        />
      </div>

      <div className="groups">
        <label htmlFor="Email">
          Email <strong style={{ color: "red" }}>*</strong>
        </label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData((prev) => ({ ...prev, Email: e.target.value }))
          }
          value={formData.Email}
        />
      </div>

      <div className="groups">
        <label htmlFor="Phone :">
          Phone <strong style={{ color: "red" }}>*</strong>
        </label>
        <input
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData((prev) => ({ ...prev, Phone: Number(e.target.value) }))
          }
          value={formData.Phone}
        />
      </div>

      {flag && <div style={{ color: "red" }}>All field are required !</div>}

      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};
