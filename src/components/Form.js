import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [page, setPage] = useState(0);
  // default page number or step number is 0th

  ////////////////////////////////

  const [formData, setFormData] = useState({
    email: "mrt_14",
    password: "",
    comfirmPasswords: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    otherInfo: "",
  });

  // page wise heading
  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = function () {
    if (page === 0)
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    else if (page === 1)
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    else return <OtherInfo formData={formData} setFormData={setFormData} />;
  };

  return (
    <div className="form">
      {/* progress bar code */}
      <div className="progressbar">
        <div
          style={{
            width: page === 0 ? "33.33%" : page === 1 ? "66.66%" : "100%",
          }}
        ></div>
      </div>

      <div className="form-container">
        <div className="header">
          {/* giving form title based on index */}
          <h1>{FormTitles[page]}</h1>
        </div>
        {/* contains inputs */}
        <div className="body"> {PageDisplay()}</div>
        {/* contains buttons */}
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => (currPage = currPage - 1));
            }}
          >
            Prev
          </button>
          <button
            // disabled={page === FormTitles.length - 1}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert(`${formData.firstName} is onboarded`);
              } else setPage((currPage) => (currPage = currPage + 1));
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
