import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const HeaderComponent = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [header, setHeader] = useState("");
  const [detail, setDetail] = useState("");

  const whichHeader = () => {
    switch (location.pathname) {
      case "/":
        setHeader("Introduction: Easy Management of PAYE and Withholding Tax");
        setDetail("A step-by-step guide to filing returns / schedules.");
        return;
      case "/onboarding":
        setHeader("Onboarding: Sign up on eTax");
        setDetail("Follow step-by-step instructions to successfully onboard.");
        return;
      case "/uploadyearly":
        setHeader(" File Annual PAYE Returns");
        setDetail("Follow step-by-step instructions to upload and view");
        return;
      case "/uploadmonthly":
        setHeader("Upload Monthly PAYE Returns");
        setDetail("Follow step-by-step instructions to upload and view");
        return;
      case "/uploadwithholding":
        setHeader("Upload Withholding Tax Schedule");
        setDetail("Follow step-by-step instructions to upload and view");
        return;
      case "/makepayment":
        setHeader("Proceed to Make Payment");
        setDetail("Follow step-by-step instructions to complete payment");
        return;
    }
  };

  useEffect(() => {
    whichHeader();
  }, [location.pathname]);

  return (
    <>

      <div className="d-flex main-head justify-content-center">
        <div className="">
          <h4 className="mb-3">Getting Started with eTax</h4>
          <h1 className="fs-1 fw-bold">Filing your Returns</h1>
          <h4>Managing PAYE, Withholding Tax</h4>
        </div>
      </div>
      <div className="d-flex text-white justify-content-center header-detail">
        <div className="">
          <h2 className="header-switch">{header}</h2>
          <h5 className="detail=switch">{detail}</h5>
        </div>
      </div>

    </>
  );
};
export default HeaderComponent;
