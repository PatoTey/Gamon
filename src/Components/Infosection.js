import { Link } from "react-router-dom"

export default function Infosection(){
    return (
        <section className="info">
            <div className="info1">
                <ul>
                    <li className="listtitle">About Gamon</li>
                    <li><Link className="unlink" to="about">About us</Link></li>
                    <li><Link className="unlink" to="contact">Contact Us</Link></li>
                    <li><Link className="unlink" to="about">Our Carrer</Link></li>
                </ul>

                <ul>
                    <li className="listtitle">Help</li>
                    <li>FAQs</li>
                    <li>How to activate games</li>
                    <li>Create a ticket</li>
                    <li>Refund Politics</li>
                </ul>
            </div>
            <div className="info2">
                <ul>
                    <li className="listtitle">Buy</li>
                    <li>How to buy</li>
                    <li>Game list</li>
                    <li>Collections</li>
                </ul>

                <ul>
                    <li className="listtitle">Community</li>
                    <li>Blog</li>
                    <li>Giveaways</li>
                    <li>Become Afiliate</li>
                </ul>
            </div>
            <div className="sociallinks">

            </div>
        </section>
    )
}