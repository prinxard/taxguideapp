import React from 'react'

import { Layout } from './Layout'

const UploadYearly = (props) => {
    return (
        <Layout>
            <div className="uploadyearly  justify-content-center">
                <div className="">
                    <section className="Upload section-gap">
                        <h2 className="mb-4">UPLOAD</h2>
                        <h4>click on the FILE RETURNS button on the side menu.</h4>

                    </section>

                    <section className="section-gap">
                        <h4>
                            Buttons are provided to file and view on the upload and view page.
                            Click on UPLOAD ANNUAL PAYE RETURNS to upload your schedule.
                        </h4>
                    </section>


                    <section className="section-gap">
                        <h4>
                            On the upload annual PAYE returns page, there are options to:
                        </h4>
                        <ul>
                            <h5>
                                <li>
                                    Select year – this provides you with a
                                    dropdown with which you select the year you intend to upload for
                                </li>
                            </h5>

                            <h5>
                                <li>
                                    Choose csv file – Click on CHOOSE FILE to upload the file already entered with
                                    the right format by the taxpayer. <strong>Please note that a sample is shown on the page.</strong>
                                    Download csv file /download guide buttons are provided below the page. This is to
                                    ensure taxpayers gets the correct format to file
                                    in the annual return and guide taxpayers through the process.
                                </li>
                            </h5>
                        </ul>
                        <h4>
                            After choosing the correct file click on UPLOAD.
                        </h4>

                        <h4>
                            If all data entered are in the correct format you should get a success message,
                            if not, the system will throw up error message(s).
                        </h4>
                    </section>


                    <section className="mb-4" className="view-annual pay section-gap">
                        <h2>
                            VIEW
                        </h2>
                        <h4>
                            To view annual PAYE returns uploaded, simply click on VIEW ANNUAL PAYE RETURNS.
                        </h4>

                    </section>


                    <section className="mb-4" className="viewannualreturn section-gap">

                        <h4>
                            Select year and click SEARCH.
                        </h4>

                        <h4>Successful login redirects you to your dashboard.</h4>
                    </section>
                </div>

            </div>
        </Layout >
    )
}
export default UploadYearly;