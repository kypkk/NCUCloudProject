import React, { useEffect } from "react";

const RedirComponent = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace("https://google.com");
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return <></>;
};

export default RedirComponent;
