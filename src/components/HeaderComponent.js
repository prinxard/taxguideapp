import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { FaBookOpen, FaRegCircle } from "react-icons/fa";
const HeaderComponent = (props) => {
  const location = useLocation();
  const history = useHistory();
  console.log(location);
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
      case "/upload_view_annual":
        setHeader(" File Annual PAYE Returns");
        setDetail("Follow step-by-step instructions to upload and view");
        return;
      case "/upload_view_monthly":
        setHeader("Upload Monthly PAYE Returns");
        setDetail("Follow step-by-step instructions to upload and view");
        return;
      case "/upload_view_withholding":
        setHeader("Upload Withholding Tax Schedule");
        setDetail("Follow step-by-step instructions to upload and view");
        return;
      case "/make_payment":
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
      <div className="text-white intro-area container-fluid">
        <h4 className="mb-3">Getting Started with eTax</h4>
        <h1 className="fs-1 fw-bold">Filing your Returns</h1>
        <h4>Managing PAYE, Withholding Tax</h4>
      </div>
      <div className="container-fluid ">
        <nav className="nav bg-white row col d-flex align-items-center ">
          <Link className="nav-link  col-lg-2 text-dark d-flex flex-column align-items-center" aria-current="page" to="/">
            <FaBookOpen size="3rem" />
            <h4 className="link">Introduction</h4>    
          </Link>
          <Link className="nav-link text-dark col-lg-2 d-flex flex-column align-items-center" to="/onboarding">
            <FaRegCircle size="3rem" />
            <h4 className="link">Onboarding</h4>
          </Link>
          <Link className="nav-link text-dark col-lg-2 align-items-center d-flex flex-column align-items-center" to="/upload_view_annual">
            <FaRegCircle size="3rem" />
            <h4 className="link">Upload and View Annual Returns</h4>           
          </Link>
          <Link className="nav-link col-lg-2 text-dark d-flex flex-column align-items-center" to="/upload_view_monthly">
            <FaRegCircle size="3rem" />
            <h4 className="link">Upload and View Monthly Schedule</h4>        
          </Link>
          <Link className="nav-link col-lg-2 text-dark  d-flex flex-column align-items-center"  to="/upload_view_withholding">
            <FaRegCircle size="3rem" />
            <h4 className="link">Upload and View Withholding</h4>            
          </Link>
          <Link className="nav-link col-lg-2 text-dark  d-flex flex-column align-items-center" to="/make_payment">
            <FaRegCircle size="3rem"/>
            <h4 className="link">Make Payment</h4>           
          </Link>
        </nav>
      </div>

      <div className="text-white header-detail">
        <h2 className="header-switch">{header}</h2>
        <h5 className="detail=switch">{detail}</h5>
      </div>
    </>
  );
};
export default HeaderComponent;
