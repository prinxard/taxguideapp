import React from "react";
import { Link } from "react-router-dom";
import taxmanager from "../img/taxmanager.png";
import { Layout } from "./Layout";

const Introduction = (props) => {
  return (
    <Layout>
      <div className="introduction">
        <div className="overview section-gap">
          <h2>OVERVIEW</h2>
          <h4>
            The eTax portal is designed to automate payment, filing of PAYE and
            Withholding taxes. Taxpayers get to see their tax history and can
            print receipt from this site.
          </h4>
          <h4>
            This guide will walk you through the steps to use the eTax portal. A
            document template for download is provided; taxpayers can choose
            convenient payment option of their choice.
          </h4>
        </div>
        <div className="application-structure section-gap">
          <h2>APPLICATION STRUCTURE</h2>
          <h4>
            The diagram below provides a visual representation of the eTax
            portal. This is to help understand the activities that can be
            carried out on the portal.
          </h4>
          <figure className="tax-manager">
            <img className="img-fluid" src={taxmanager} alt="tax-manager" />
          </figure>
        </div>
        <div className="Chapters section-gap">
          <h2>Chapters</h2>
          <h5>This guide is divided into four short chapters</h5>

          <ol class=" list-numbered">
            <h4>
              <li class="list-item">
                <Link to="/onboarding" className="text-decoration-none">How to Onboard : </Link>Enter KGTIN and set
                password
              </li>
            </h4>
            <h4>
              <li class="list-item">
                <Link to="/uploadyearly" className="text-decoration-none">Upload Anual PAYE Returns : </Link>Enter and
                save data in the correct format,upload and view annual PAYE
                returns
              </li>
            </h4>
            <h4>
              <li class="list-item">
                <Link to="/uploadmonthly" className="text-decoration-none">Upload Monthly Schedule : </Link>Enter and
                save data in the correct format, upload and view monthly
                schedule
              </li>
            </h4>
            <h4>
              <li class="list-item">
                <Link to="/uploadwithholding" className="text-decoration-none">Upload/View Withholding Tax Schedule : </Link>
                Enter and save data in the correct format, upload and view
                withholding tax schedule.
              </li>
            </h4>
            <h4>
              <li class="list-item">
                <Link to="/makepayment" className="text-decoration-none">Make Payment : </Link>Choose payment option
                most suitable for you and proceed to make payment
              </li>
            </h4>
          </ol>
        </div>
      </div>
    </Layout>
  );
};
export default Introduction;
