import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";
import { useRouter } from "next/router";

const Status = () => {
  const [status, setStatus] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const { getSession } = useContext(AccountContext);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  return(
  <div>
    {status ? (
      "You are now logged in. Enjoy!"
    ) : (
      <div className="login-overlay">
        <div className="login-modal">
          <p>It looks like you haven't logged into CoffeeAI just yet, please login!</p>
          <button class="login-modal-button" onClick={handleLoginRedirect}>Go to Login</button>
        </div>
      </div>
    )}
  </div>
  );
};

export default Status;