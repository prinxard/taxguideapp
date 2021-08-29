import React from "react";
import { AiFillWarning } from "react-icons/ai";
import returns1 from '../img/ATOmodule/returns1.png'
import returns2 from '../img/ATOmodule/returns2.png'
import downloadsched from '../img/ATOmodule/downloadsched.png'
import uploadsc from '../img/ATOmodule/uploadsc.png'
import schedupload from '../img/ATOmodule/schedupload.png'
import pendingasse from '../img/ATOmodule/pendingasse.png'
import deleteassesment from '../img/ATOmodule/deleteassesment.png'
import copyid from '../img/ATOmodule/copyid.png'
import enterid from '../img/ATOmodule/enterid.png'
import deleteas from '../img/ATOmodule/deleteas.png'
import confirmdel from '../img/ATOmodule/confirmdel.png'
import { Layout } from "./Layout";

const ATOModule = () => {
  return (
    <Layout>
      <div className="mt-5">
        <section className="section-gap">
          <h2 className="mb-4">RHM-ATOs Module</h2>
          <h4>For administration RHM-ATO module gives access to all the information
            regarding the various filing done by taxpayers.
          </h4>
          <h4 className="mt-4">RETURNS</h4>
          <figure>
            <img className="img-fluid" src={returns1} alt="makepayment" />
          </figure>
          <h4>To drill down to a particular taxpayer/organisation, click on the name to show details that include; employees,
            number of months filed, paid tax, expected tax and variance.
          </h4>
          <figure>
            <img className="img-fluid" src={returns2} alt="deleteassessment" />
          </figure>
        </section>

        <section section className="section-gap">
          <h4>
            DOWNLOAD SAMPLE SCHEDULE TEMPLATE (csv)
          </h4>
          <h4 className="mt-5">Select sample csv then Click on Download CSV to download the sample CSV template for
            Monthly Remittance Schedules and fill in the necessary data in the right format.
          </h4>
          <figure>
            <img className="img-fluid" src={downloadsched} alt="downloadsched" />
          </figure>

        </section>

        <section section className="section-gap">
          <h4>
            UPLOAD SCHEDULE
          </h4>
          <h4 className="mt-5">To upload monthly remittance schedules – click on Upload Monthly Remittance Schedules. Fill
            in the Taxpayers Name/KGTIN, select the year and month of returns, now click on OK button.
          </h4>
          <figure>
            <img className="img-fluid" src={uploadsc} alt="uploadsched" />
          </figure>

        </section>

        <section className="mb-4" className="section-gap">
          <h4>
            Now click on “browse” button and select
            the month remittance document you saved. Click the “Upload CSV” button to upload the file.
          </h4>
          <figure>
            <img className="img-fluid" src={schedupload} alt="uploadsched" />
          </figure>
          <h4> <AiFillWarning color='#ebb434' size={'2rem'} /> <strong>RHM only accepts CSV file formats.</strong> </h4>
          <h4 className="mt-4">If all data entered are in the correct format you should get a success message, if not, the system will
            throw up an error message(s) which will guide you as to where the specific error can be found.
          </h4>
        </section>

        <section className="mb-4" className="section-gap">
          <h4 className="mb-4">PENDING ASSESSMENT</h4>
          <figure>
            <img className="img-fluid" src={pendingasse} alt="uploadsched" />
          </figure>
          <h4>Click on Pending Assessment – To
            download and Print the generated assessment to take to the bank for payment.
          </h4>
        </section>

        <section className="mb-4" className="section-gap">
          <h4 className="mb-4">DELETE ASSESSMENT</h4>
          <h4>
            Click on “Delete monthly remittance” from the returns menu.
          </h4>
          <figure>
            <img className="img-fluid" src={deleteassesment} alt="uploadsched" />
          </figure>
          <h4>Copy the Assessment ID on the pending assessment generated.
            (You can only delete schedules uploaded by you).
          </h4>
          <figure>
            <img className="img-fluid" src={copyid} alt="assessmentid" />
          </figure>
        </section>

        <section className="mb-4" className="section-gap">
          <h4 className="mb-4">Enter the assessment ID in the form below and click on the suggestion if it equals assessment ID entered.</h4>
          <figure>
            <img className="img-fluid" src={enterid} alt="assessmentid" />
          </figure>
          <h4>
            The rest of the field populates automatically. Then click on “Delete assessment”
          </h4>
          <figure>
            <img className="img-fluid" src={deleteas} alt="assessmentid" />
          </figure>
          <h4>Confirm the delete by clicking ok.</h4>
          <figure>
            <img className="img-fluid" src={confirmdel} alt="assessmentid" />
          </figure>
        </section>
      </div>
    </Layout>
  );
};
export default ATOModule;
