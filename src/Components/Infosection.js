import { Link } from "react-router-dom"
import { ThemeContext } from "../Context/ThemeContext"
import { useContext } from "react"

export default function Infosection(){
    const {theme} = useContext(ThemeContext)
    return (
        <section className={`info ${theme === "light" ? "infolight" : ""}`}>
            <div className="info1">
                <ul>
                    <li className="listtitle">About Gamon</li>
                    <li><Link className="unlink" to="about">About us</Link></li>
                    <li><Link className="unlink" to="contact">Contact Us</Link></li>
                    <li><Link className="unlink" to="about">Our Carrer</Link></li>
                </ul>

                <ul>
                    <li className="listtitle">Help</li>
                    <li><Link className="unlink" to="faqs">FAQs</Link></li>
                    <li><Link className="unlink" to="faqs/1">How to activate games</Link></li>
                    <li><Link className="unlink" to="contact">Create a ticket</Link></li>
                    <li><Link className="unlink" to="faqs/4">Refund Politics</Link></li>
                </ul>
            </div>
            <div className="info2">
                <ul>
                    <li className="listtitle">Buy</li>
                    <li><Link className="unlink" to="faqs/2">How to buy</Link></li>
                    <li><Link className="unlink" to="games">Game list</Link></li>
                    <li><Link className="unlink" to="games">Collections</Link></li>
                </ul>

                <ul>
                    <li className="listtitle">Community</li>
                    <li>Blog</li>
                    <li>Giveaways</li>
                    <li><Link className="unlink" to="contact">Become Afiliate</Link></li>
                </ul>
            </div>
        </section>
    )
}