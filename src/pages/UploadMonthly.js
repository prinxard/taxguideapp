import React from 'react'
import payemonthly from '../img/payemonthly/payemonthly.png'
import viewmonthly from '../img/payemonthly/viewmonthly.png'
import pay from '../img/payemonthly/pay.png'
import { AiFillWarning } from "react-icons/ai";

import { Layout } from './Layout'

const UploadMonthly = (props) => {
    return (
        <Layout>
            <div className="uploadmonthly mt-5">
                <section className="section-gap">
                    <h2>PAYE Monthly</h2>
                    <h4>Upload Schedule.</h4>
                    <h4>From the side menu bar – click on File Returns - click on the PAYE
                        Monthly, “Upload” button;
                    </h4>
                    <figure>
                        <img className="img-fluid" src={payemonthly} alt="confirm" />
                    </figure>

                    <ul>
                        <li>
                            <h4>Click on “DOWNLOAD SAMPLE CSV” for the Monthly PAYE returns template and
                                fill in the necessary data in the right format.
                            </h4>
                        </li>
                        <li>
                            <h4> Select year and month</h4>
                        </li>
                        <li>
                            <h4>Choose the document to be uploaded and click on “submit”</h4>
                        </li>
                    </ul>
                    <h4 className="mb-5"> <AiFillWarning color='#ebb434' size={'2rem'} /> <strong>Portal uploads only accepts CSV file formats.</strong> </h4>
                    <h4>
                        Now select the year and month of returns, then click on Select File button and select the
                        remittance document you saved. Click the Submit button to upload the file.
                    </h4>
                    <h4>
                        If all data entered are in the correct format you should get a success message, if not, the system will
                        throw up error message(s) which will guide you as to where the specific error can be found.
                    </h4>
                    <h4>
                        The system calculates the tax expected and takes you to the payment log to show
                        pending payment, which is the amount due from the uploaded schedule.
                    </h4>

                </section>

                <section section className="section-gap">
                    <h4>VIEW SCHEDULE</h4>
                    <h4>From the side menu – click on File Returns - click on PAYE Monthly – click on the View button;</h4>
                    <figure>
                        <img className="img-fluid" src={viewmonthly} alt="confirm" />
                    </figure>
                </section>


                <section className="mb-4" className="section-gap">
                    <h4>
                        Here you can select a month to view Monthly PAYE returns. This gives in addition to uploaded
                        data, Expected Tax and Variance (net tax paid Vs expected tax)
                    </h4>

                </section>


                <section className="mb-4" className="section-gap">
                    <figure>
                        <img className="img-fluid" src={pay} alt="confirm" />
                    </figure>
                    <ul>
                        <li>
                            <h4>Click on “Pay Now”(1) to proceed with payments.</h4> 
                        </li>
                        <li>
                            <h4>Click on “Delete”(2) to delete the upload if there is an error with the uploaded schedule.</h4>
                            
                        </li>
                    </ul>
                </section>


            </div>
        </Layout>
    )
}
export default UploadMonthly;