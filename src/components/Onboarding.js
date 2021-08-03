import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import loginimage from "../img/loginimage.png";
import startup from "../img/Startup.png";
import validation from "../img/validation.png";
import dashboard from "../img/dashboard.png";
import login from "../img/Login.png";
import { Layout } from "./Layout";

const Onboarding = (props) => {
  return (
    <Layout>
      <div className="onboarding-component">
        <div className="onboarding">
          <h2 className="mb-4">ONBOARDING</h2>
          <h4 className="mb-3">
            The basic requirement to onboard on eTax portal is your TIN number (
            Tax Identification Number). The home page provides you with link to
            create a KGTIN for yourself if you do not have.
          </h4>
          <ul className="mb-4">
            <h4>
              <li>
                <Link to="/onboarding" className="text-decoration-none">SIGN UP : </Link>For new users.
              </li>
            </h4>
            <h4>
              <li>
                <Link to="/onboarding" className="text-decoration-none">INDIVIDUAL KGTIN REGISTRATION : </Link>For
                individuals without KGTIN number.
              </li>
            </h4>
            <h4>
              <li>
                <Link to="/onboarding" className="text-decoration-none">NON INDIVIDUAL KGTIN REGISTRATION : </Link>
                For non individuals without KGTIN numbers.
              </li>
            </h4>
            <h4>
              <li>
                <Link to="/onboarding" className="text-decoration-none">LOGIN : </Link>For returning users who have
                successfully on-boarded.
              </li>
            </h4>
            <h4>
              <li>
                <Link to="/onboarding" className="text-decoration-none">FORGET PASSWORD : </Link>To retrieve forgotten
                password for a returning user.
              </li>
            </h4>
          </ul>
        </div>
        <div className="mb-4" className="signup section-gap">
          <h2 className="mb-4 text-primary">Sign Up</h2>
          <section>
            <h4>
              For first time users with a TIN number click on SIGNUP on the home
              page.
            </h4>
            <img className="img-fluid" src={loginimage}></img>
          </section>
        </div>

        <section className="mb-4" className="get-started section-gap">
          <h4>
            Provide TIN, click on the captcha, accept terms and conditions and
            click on GET STARTED. A token is sent to the phone number / email
            linked to the TIN number provided.
          </h4>
          <img className="img-fluid" src={startup}></img>
        </section>

        <section className="mb-4" className="validation section-gap">
          <h4>
            On the validation page, enter the token sent to you, set password,
            click turing, accept terms and condition then click on GET STARTED.
          </h4>
          <img className="img-fluid" src={validation}></img>
        </section>

        <section className="mb-4" className="dashboard section-gap">
          <h4>Successful onboarding redirects you to your dashboard.</h4>
          <img className="img-fluid  w-75" src={dashboard}></img>
        </section>

        <section className="mb-4" className="login section-gap">
          <h2 className="text-primary">LOGIN</h2>
          <h4 className="text-justify">
            Onboarding is done once. For returning users, provide your TIN
            number, enter your password, click on the captcha and click on
            LOGIN.
          </h4>
          <img className="img-fluid" src={login}></img>
          <h4>Successful login redirects you to your dashboard.</h4>
        </section>
      </div>
    </Layout>
  );
};
export default Onboarding;
