import React, { act, useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";
import "../../../styles/Making_Tab_Form_Component.css";

const Making_Tab_Form_Component = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    age: 0,
    interest: [],
    theme: "",
  });

  const [errors, setErrors] = useState({});

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        const { name, email, age } = data;
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
        if (name.length < 2) {
          err.name = "Name is not valid";
        }
        if (email.length < 2 || emailRegex.test(email) === false) {
          err.email = "Email is not valid";
        }
        if (age < 18) {
          err.age = "Age is not Valid";
        }
        setErrors(err);
        return err.name || err.email || err.age ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        const { interest } = data;
        if (interest.length < 1) {
          err.interest = "Select atleast one hobby";
        }
        setErrors(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handlePrev = () => {
    setActiveTab((prev) => prev - 1);
  };
  const handleNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handleSubmit = () => {
    console.log("values --> ", data);
  };

  return (
    <div>
      <h1>Tab Form Component</h1>

      <div className="tabs_container">
        {tabs?.map((t, index) => (
          <div className="tabs" key={index} onClick={() => setActiveTab(index)}>
            {t.name}
          </div>
        ))}
      </div>
      <div>
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
        {activeTab > 0 && <button onClick={handlePrev}>Prev</button>}

        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNext}> Next</button>
        )}
      </div>
    </div>
  );
};

export default Making_Tab_Form_Component;
