import React from "react";

export default function Contact(){
    return (
        <section className="contact">
            <div className="problems">
                <h1>Problems with your purechase?</h1>
                <p>The easiest way to solve it is to make a ticket</p>
                <div className="btncontainer">
                    <button>Create a ticket NOW</button>
                </div>
            </div>
            <div className="othercontact">
                <div>
                    <h3>Business</h3>
                    <small>Want to work with us or have any business question? Contact us through:</small>
                    <p className="contactmail">bussines@gamondemo.com</p>
                </div>
                <div>
                    <h3>Legal Department</h3>
                    <small>If you have questions about our legal affairs contact us through: </small>
                    <p className="contactmail">legal@gamondemo.com</p>
                </div>
                <div>
                    <h3>Talents Team</h3>
                    <small>Searching for a new job? Contact our talent team through: </small>
                    <p className="contactmail">jobs@gamondemo.com</p>
                </div>
            </div>
        </section>
    )
}