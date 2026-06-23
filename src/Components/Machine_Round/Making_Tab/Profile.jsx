import React from "react";

const Profile = ({ data, setData, errors }) => {
  const { name, email, age } = data;

  const handleChange = (key, value) => {
    console.log("value changes ", key, " -> ", value);
    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div>
      <h1>Profile Component</h1>
      <div className="profile_container">
        <div>
          <label htmlFor="name">Name : </label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        {console.log("errors.name-> ", errors.name)}
        {errors.name && <span>{errors.name}</span>}
        <div>
          <label htmlFor="email">Email : </label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        {errors.email && <span>{errors.email}</span>}
        <div>
          <label htmlFor="age">Age : </label>
          <input
            name="age"
            type="number"
            value={age}
            onChange={(e) => handleChange("age", e.target.value)}
          />
        </div>
        {errors.age && <span>{errors.age}</span>}
      </div>
    </div>
  );
};

export default Profile;
