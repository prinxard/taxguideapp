import React from 'react'
import newpayment from '../img/payments/newpayment.png'
import confirm from '../img/payments/confirm.png'
import paymenthistory from '../img/payments/paymenthistory.png'
import unpaidassessment from '../img/payments/unpaidassessment.png'
import filereturns from '../img/payments/filereturns.png'

import { Layout } from './Layout'

const MakePayment = (props) => {
    return (
        <Layout>
            <div className="mt-5">
                <section className="section-gap">
                    <h2 className="mb-4">NEW PAYMENT</h2>
                    <h4>This menu gives you the option to initiate
                        payments for MDAs and every associate revenue items.
                    </h4>
                    <figure>
                        <img className="img-fluid" src={newpayment} alt="makepayment" />
                    </figure>
                    <ul className="mt-4">
                        <li>
                            <h4>Click on “Select MDA”(1) and choose the MDA you wish to make payment to</h4>
                        </li>
                        <li>
                            <h4> Click on “Select Item”(2) to choose the item you wish to pay for</h4>
                        </li>
                        <li>
                            <h4> Enter the Amount(4) you wish to pay</h4>
                        </li>
                        <li>
                            <h4> Click on the “Select Payment Channel”(5) which will drop down all the available payment
                                channels (Interswitch, Bank, Remita and eTransact).</h4>
                        </li>
                        <li>
                            <h4> After all these is done, click on “Make Payment”(6)</h4>
                        </li>
                    </ul>
                </section>


                <section className="section-gap">
                    <h4>
                        Click on Confirm Payment, which will either direct you to generate
                        a payment assessment for Bank payment or to the Online (Debit card) payment channel.
                    </h4>
                    <figure>
                        <img className="img-fluid" src={confirm} alt="confirm" />
                    </figure>
                    <h4>
                        Click on Confirm Payment, which will either direct you to generate a payment
                        assessment for Bank payment or to the Online (Debit card) payment channel.
                    </h4>
                </section>


                <section className="section-gap">
                    <h2>PAYMENT HISTORY</h2>
                    <h4 className="section-gap">
                        This provides users with a view of payment status over time.
                    </h4>
                    <figure>
                        <img className="img-fluid" src={paymenthistory} alt="confirm" />
                    </figure>
                </section>

                <section className="section-gap">
                    <h2>UNPAID ASSESSMENT</h2>
                    <h4 className="section-gap">
                        This provides users with a view of all pending assessments. Payments can
                        be initiated and completed by clicking on a particular assessment.
                    </h4>
                    <figure>
                        <img className="img-fluid" src={unpaidassessment} alt="confirm" />
                    </figure>
                </section>

                <section className="section-gap">
                    <h2>FILE RETURNS</h2>
                    <h4 className="section-gap">
                        File Returns menu gives you the option to upload and view your Monthly Remittance
                        Schedule and Withholding Tax.
                    </h4>
                    <figure>
                        <img className="img-fluid" src={filereturns} alt="confirm" />
                    </figure>
                </section>    

            </div>
        </Layout>
    )
}
export default MakePayment;