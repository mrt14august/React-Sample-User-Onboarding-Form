import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="abc.xyz.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.comfirmPasswords}
        onChange={(e) =>
          setFormData({ ...formData, comfirmPasswords: e.target.value })
        }
      />
    </div>
  );
}

export default SignUpInfo;
