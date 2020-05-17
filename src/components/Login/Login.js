import React from "react";
import { api } from "../../helpers/ApiLibrary";

const Login = ({ onSuccess }) => {
  const handleLogin = () => {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (chrome.runtime.lastError) {
        alert(chrome.runtime.lastError.message);
        return;
      }
      console.log(`Bearer ${token}`);
      api.setAuthorizationToken(token);
      onSuccess();
    });
  };
  return (
    <div className="rounded-t mb-0 px-6 py-6">
      <div className="text-center mb-3">
        <h6 className="text-gray-600 text-md font-bold">Sign in with</h6>
      </div>
      <div className="btn-wrapper text-center">
        <button
          className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
          type="button"
          onClick={handleLogin}
        >
          <img
            alt="..."
            className="w-4 mr-1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          />
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
