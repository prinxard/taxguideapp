import React from "react";
import filereturn from "../img/filereturn.png";
import uploadwith from "../img/UploadWHT.png";
import uploadmonthlywith from "../img/uploadmonthlyWHTpage.png";
import viewwith from "../img/viewWHT.png";
import searchmonthlywith from "../img/WHTSEARCH.png";
import { Layout } from "./Layout";

const UploadWithholding = () => {
  return (
    <Layout>
      <div className="upload-monthly">
        <section className="section-gap">
          <h2 className="mb-4">UPLOAD</h2>
          <h4>click on the FILE RETURNS button on the side menu bar.</h4>
          <img className="img-fluid w-75" src={filereturn}></img>
        </section>

        <section section className="section-gap">
          <h4>
            Click on UPLOAD MONTHLY WITHHOLDING TAX SCHEDULE on the upload/view
            page.
          </h4>
          <img className="img-fluid w-75" src={uploadwith}></img>
        </section>

        <section className="mb-4" className="section-gap">
          <ul>
            <h5>
              <li>
                Select period – this provides you with a dropdown with which you
                select month and year you intend to upload for.
              </li>
            </h5>
            <h5>
              <li>
                Choose csv file – Click on CHOOSE FILE to upload the file already
                entered correctly by the taxpayer. <strong>Please note that a sample is
                shown on the page.</strong> A download csv file button is provided below
                the page. This is to ensure taxpayers get the correct format to
                file in their Withholding Tax Schedule.
              </li>
            </h5>
          </ul>
          <h4>After choosing the correct file, click on UPLOAD.</h4>
          <img className="img-fluid w-75" src={uploadmonthlywith}></img>
          <h4>
            If all data entered are correct you should get a success message, if
            not, the system will throw up error message(s).
          </h4>
        </section>

        <section className="mb-4" className="section-gap">
          <h2>VIEW</h2>
          <h4>
            To view monthly Withholding Tax Schedule uploaded, simply click on
            VIEW Withholding Tax Schedule schedule.
          </h4>
          <img className="img-fluid w-75" src={viewwith}></img>
        </section>

        <section className="mb-4" className="section-gap">
          <h4>Select year, month and click on SEARCH.</h4>
          <img className="img-fluid w-75" src={searchmonthlywith}></img>
        </section>
      </div>
    </Layout>
  );
};
export default UploadWithholding;
