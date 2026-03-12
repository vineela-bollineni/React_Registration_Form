import React, { useState } from "react"; 
import InputField from "./Inputfield";
import Button from "./Button";
import "../App.css";


const BaseForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.fullname) newErrors.fullname = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    alert("Registration Successful 🎉");
    console.log(formData);
 
    setFormData({
      fullname: "",
      email: "",
      password: "",
    });
 
    setErrors({});
  }
};

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <InputField
          label="Full Name"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          error={errors.fullname}
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <Button text="Register" />
      </form>
    </div>
  );
};

export default BaseForm;
