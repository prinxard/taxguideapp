import React from 'react'
import filereturn from '../img/filereturn.png'
import monthlyremittance from '../img/Monthlyremittance.png'
import uploadmonthlyremittance from '../img/uploadmonthlyremittance.png'
import viewmonthlyremittance from '../img/viewmonthlyremittance.png'
import searchmonthly from '../img/searchmonthly.png'
import { Layout } from './Layout'

const UploadMonthly = (props) => {
    return (
        <Layout>
            <div className="upload-monthly">
                <section className="section-gap">
                    <h2>UPLOAD</h2>
                    <h4>To Upload monthly PAYE remittance schedule,
                        click on the FILE RETURNS button on the side menu bar.</h4>
                    <img className="img-fluid w-75" src={filereturn}></img>
                </section>

                <section section className="section-gap">
                    <h4>
                        Click on UPLOAD MONTHLY PAYE REMITTANCE SCHEDULE on the upload/view page.
                    </h4>
                    <img className="img-fluid w-75" src={monthlyremittance}></img>
                </section>


                <section className="mb-4" className="section-gap">
                    <h4>
                        On the upload monthly PAYE remittance schedule page, there are buttons to:
                    </h4>

                    <ul>
                        <h5>
                            <li>
                                Select period – this provides you with a dropdown with which you select
                                the month,year you intend to upload for, select station, select payment method.
                            </li>
                        </h5>
                        <h5>
                            <li>
                                Choose csv file – Click on CHOOSE FILE to upload the file already entered correctly by the taxpayer.
                                <strong>Please note that a sample is shown on the page,</strong> download csv file button is also provided below the page.
                                This is to ensure taxpayers gets the correct format to file in the monthly PAYE remittance schedule.
                            </li>
                        </h5>
                    </ul>
                    <h4>
                        After choosing the correct file, click on UPLOAD.
                    </h4>
                    <img className="img-fluid w-75" src={uploadmonthlyremittance}></img>
                </section>


                <section className="mb-4" className="section-gap">
                    <h2>
                        VIEW
                    </h2>
                    <h4>
                        To view monthly PAYE remittance schedule uploaded, simply click on VIEW monthly PAYE remittance schedule.
                    </h4>
                    <img className="img-fluid w-75" src={viewmonthlyremittance}></img>
                </section>


                <section className="mb-4" className="section-gap">
                    <h4>
                        Select year, month and click on SEARCH.
                    </h4>
                    <img className="img-fluid w-75" src={searchmonthly}></img>

                </section>
            </div>
        </Layout>
    )
}
export default UploadMonthly;