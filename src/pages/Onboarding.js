import React from "react";
import { AiFillWarning } from "react-icons/ai";
import signup from '../img/onboarding/signup.png'
import submit from '../img/onboarding/submit.png'
import donesubmit from '../img/onboarding/donesubmit.png'
import login from '../img/onboarding/login.png'
import { Layout } from "./Layout";

const Onboarding = (props) => {
  return (
    <Layout>
      <div className="onboarding">
        <div className="onboarding">
          <h2 className="m-4">ONBOARDING</h2>
          <h4 className="mb-3">
            For first time users, one is expected to click on the “sign up” button.
          </h4>
          <figure>
            <img className="img-fluid" src={signup} alt="signup" />
          </figure>
        </div>


        <section className="get-started section-gap">
          <h4>
            The portal provides a signup page where user enters taxpayer ID and clicks on “submit”.
          </h4>

        </section>

        <section className="mb-4" className="validation ">
          <figure>
            <img className="img-fluid" src={submit} alt="submit" />
          </figure>

        </section>

        <section className="mb-4" >

          <h4 className="text-justify">
            After which a token is sent via email/SMS to the registered
            email and phone number linked to the Tax Identification Number.
          </h4>

          <h4> <AiFillWarning color='#ebb434' size={'2rem'} /> <strong>Note: Successful login redirects you to your dashboard.</strong> </h4>
          <h5> <strong>Note: To register for a Tax Identification Number, user can visit the State IRS website (self-service) or click on Get KGTIN of the registration menu on the signup page on the portal [INDIVIDUAL] or [BUSINESS] as it applies to you.</strong> </h5>
          <h4> After clicking on submit, a window like this will appear and you will have to fill in all the necessary details; create a password and enter the token sent to your phone/email. Once done click the “submit” button. </h4>
        </section>

        <section className="section-gap">
          <figure>
            <img className="img-fluid" src={donesubmit} alt="submit" />
            <h4> On-boarding happens once. On subsequent visits, user just logs in.</h4>
          </figure>
        </section>

        <section>
          <h2 className="">Login</h2>
          <h4 className="mb-3">
          To login, enter Tax Identification Number and Password.
          </h4>
          <figure>
            <img className="img-fluid" src={login} alt="signup" />
          </figure>
          <h4>This takes you straight to your dashboard.</h4>
        </section>
      </div>
    </Layout>
  );
};
export default Onboarding;
