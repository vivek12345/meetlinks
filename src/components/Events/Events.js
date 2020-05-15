import React, { useState, useEffect } from 'react';

const Events = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (chrome.runtime.lastError) {
        alert(chrome.runtime.lastError.message);
        return;
      }
      setToken(`Bearer ${token}`);
    });
  }, []);
};
