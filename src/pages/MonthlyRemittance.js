import React from 'react'
import { Layout } from './Layout'
import monthlyremit from '../img/monthlyremit/monthlyremit.png'
import unpaid from '../img/monthlyremit/unpaid.png'
import foronline from '../img/monthlyremit/foronline.png'
import forbank from '../img/monthlyremit/forbank.png'
import forbank2 from '../img/monthlyremit/forbank2.png'
import clickbank from '../img/monthlyremit/clickbank.png'
import printassesment from '../img/monthlyremit/printassesment.png'
import update1 from '../img/monthlyremit/update1.png'
import update2 from '../img/monthlyremit/update2.png'
import update3 from '../img/monthlyremit/update3.png'
import update4 from '../img/monthlyremit/update4.png'
import update5 from '../img/monthlyremit/update5.png'
import recimage from '../img/reciept/recimage.png'
import downloadrec from '../img/reciept/downloadrec.png'
import printedrec from '../img/reciept/printedrec.png'

const MonthlyRemittance = (props) => {
    return (
        <Layout>
            <div className="mt-5">
                <section className="section-gap">
                    <h2 className="mb-4">PAY MONTHLY REMITTANCE</h2>
                    <h4>click on the FILE RETURNS button on the side menu.</h4>
                    <figure>
                        <img className="img-fluid" src={monthlyremit} alt="makepayment" />
                    </figure>

                    <h4 className="mt-4">Click on an unpaid assessment to use one of two means of payment;</h4>
                    <ol>
                        <li> <h4>Online (with debit card)</h4> </li>
                        <li> <h4>Pay at bank branch.</h4> </li>
                    </ol>

                </section>

                <section className="section-gap">
                    <figure>
                        <img className="img-fluid" src={unpaid} alt="makepayment" />
                    </figure>
                </section>


                <section className="section-gap">
                    <h4>
                        <strong>For Online</strong> - Click on “Pay Now”(1) to enter your email and Phone number, then Click on “Select Payment Channel”(2) to select
                        the available online payment channel and Click on “Confirm Payment”(3) to pay.
                    </h4>
                    <figure>
                        <img className="img-fluid" src={foronline} alt="makepayment" />
                    </figure>
                    <h4>
                        Upon successful payment, you will be redirected to your dashboard.
                    </h4>
                </section>


                <section className=" section-gap">

                    <h4>
                        <strong>For Bank branch</strong>  - Click on “Pay Now” to enter your email and Phone number.
                    </h4>
                    <figure>
                        <img className="img-fluid section-gap" src={forbank} alt="makepayment" />
                    </figure>

                    <figure className="section-gap">
                        <img className="img-fluid" src={forbank2} alt="monthlyremittance" />
                    </figure>
                    <h4 className="section-gap">Now click on “Select Payment Channel” select “Bank”
                        and Click on “Confirm Payment” to generate Assessment PDF.
                    </h4>
                    <figure className="section-gap">
                        <img className="img-fluid" src={clickbank} alt="monthlyremittance" />
                    </figure>
                </section>


                <section className="section-gap">

                    <h4>
                        Print Assessment and take to the bank for payment
                    </h4>
                    <figure className="section-gap d-flex justify-content-center">
                        <img className="img-fluid" src={printassesment} alt="print" />
                    </figure>
                    <h4><strong>Printed assessment (SAMPLE).</strong></h4>
                </section>

                <section className="section-gap">

                    <h4>
                        DOWNLOAD/ PRINT RECEIPT
                    </h4>
                    <h4 className="mt-4">After successful payment, taxpayer can download and print out receipt.</h4>
                    <h4 className="mt-4">To do this, on the side menu – click on “Payments”(1)
                        – “Payment history”(2) – click on payment reference number(3) to open payment detail.</h4>
                    <figure className="section-gap mt-5">
                        <img className="img-fluid" src={recimage} alt="print" />
                    </figure>
                    <h4>Then click Download Receipt(4)</h4>
                    <figure className="section-gap mt-5">
                        <img className="img-fluid" src={downloadrec} alt="print" />
                    </figure>
                    <figure className="section-gap mt-5 d-flex justify-content-center">
                        <img className="img-fluid" src={printedrec} alt="print" />
                    </figure>
                    <h4><strong>Printed receipt (SAMPLE)</strong></h4>
                </section>

                <section className="section-gap">

                    <h4>
                        UPDATE REFERENCE WHERE THERE ARE DUPLICATE ASSESSMENTS WITH DIFFERENT STATUS.
                    </h4>
                    <h4 className="mt-4">In cases where Pay direct is used and there are duplicate assessments with status “pending”
                        and “success”. Here is a step-by-step guide to merge payments by updating reference.
                    </h4>
                    <h4 className="mt-4">1.	Click on the assessment showing “success”</h4>
                    <figure className="section-gap mt-5">
                        <img className="img-fluid" src={update1} alt="print" />
                    </figure>
                    <h4 className="mt-4">2.	Copy the payment reference</h4>
                    <figure className="section-gap mt-5">
                        <img className="img-fluid" src={update2} alt="print" />
                    </figure>
                    <h4 className="mt-4">3.	Return back to the dashboard and click on the assessment with the “pending” status</h4>
                    <figure className="section-gap mt-5">
                        <img className="img-fluid" src={update3} alt="print" />
                    </figure>
                    <h4 className="mt-4">4.	Click on the circled link to update reference</h4>
                    <figure className="section-gap mt-5">
                        <img className="img-fluid" src={update4} alt="print" />
                    </figure>
                    <h4 className="mt-4">5.	Enter the payment reference
                        that was copied and click on “submit”. An update successful message
                        will be seen if the update was successful. You can confirm this update from
                        the dashboard where you will no
                        longer see the pending assessment but the paid one.
                    </h4>
                    <figure className="section-gap mt-5">
                        <img className="img-fluid" src={update5} alt="print" />
                    </figure>


                </section>

            </div>
        </Layout >
    )
}
export default MonthlyRemittance;