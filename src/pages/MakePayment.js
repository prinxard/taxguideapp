import React from 'react'

import { Layout } from './Layout'

const MakePayment = (props) => {
    return (
        <Layout>
            <div className="makepayment">
                <section className="section-gap">
                    <h2 className="mb-4">MAKING PAYMENT</h2>
                    <h4>Payment can be made online or through any bank branch. <strong>Please note payment should
                        be done through Remita, Paystack or eTranzact(webConnect).</strong>
                    </h4>
                    <h3 className="text-primary mb-4">Online Payment</h3>

             
                </section>


                <section className="mb-4" className="section-gap">

                    <ul>
                        <h5>
                            <li>
                                Pay – This button is to continue payment online.

                            </li>
                        </h5>
                        <h5>
                            <li>
                                Enter Payment Reference Number –
                                This is to update reference number for payments made through the bank.
                            </li>
                        </h5>
                        <h5>
                            <li>
                                Delete - To delete records.
                            </li>
                        </h5>
                    </ul>
                    <h4>
                        To continue with online payment, click on PAY.
                    </h4>
     

                </section>


                <section className="mb-4" className="section-gap">
                    <h4>
                        Select payment method and the tax station on the dropdown that pops up and click on PROCEED.
                    </h4>
             
                </section>


                <section className="mb-4" className="section-gap">
                    <h4>
                        On the service payment provider confirmation page,
                        provide you email and phone number, click on MAKE PAYMENT..
                    </h4>
                  

                </section>
                <section className="mb-4" className="section-gap">
                    <h4>
                        Click SUBMIT if satisfied with all the information on
                        the service payment provider page.
                    </h4>
           

                </section>
                <section className="mb-4" className="section-gap">
                    <h4>
                        Provide your card details and click on PAY.
                    </h4>
              

                </section>
                <section className="mb-4" className="section-gap">
                    <h4>
                        Enter one time password sent by your service provider and click PAY.
                    </h4>
             

                </section>
                <section className="mb-4" className="section-gap">
                    <h4>
                        Upon successful payment you will be redirected to the successful payment page.
                    </h4>
      

                </section>
                <section className="section-gap">
                    <h2 className="mb-4 text-primary">Bank Payment</h2>
                    <h4 className="section-gap">Bank payment must be made through remita, paystack or eTranzact( webConnect) w
                        ith your KGTIN. Payment can be made before or after uploading schedule.
                        Ensure to update payment reference on the the portal after payment.
                    </h4>
                    <h4>
                        To update Reference number from the dashboard, click on PAYMENT button.
                    </h4>

             
                </section>
                <section className="section-gap">
                    <h4>
                        Click on PENDING INVOICES to navigate to the payment page..
                    </h4>
              

                </section>
                <section className="section-gap">
                    <h4>
                        Buttons are provided to pay, update and delete record with details
                        of the selected invoice.Click on ENTER PAYMENT REFERENCE NUMBER.
                    </h4>
               
                </section>
                <section className="section-gap">
                    <h4>
                        Fill the dropdown provided with the Payment Reference gotten from the Bank then click on GO.
                    </h4>
              

                </section>
                <section className="section-gap">
                    <h4>
                        Upon successful update, you will be prompted..
                    </h4>
                   

                </section>

            </div>
        </Layout>
    )
}
export default MakePayment;