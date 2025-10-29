import "../App.css"
import Logo from "../assets/Logo.png"

function Footer() {
    return (
        <footer>
            <section id="footer-container">
                <div id="logo-image">
                    <img src={Logo} alt="" />
                </div>
                <p>Siga-nos nas redes sociais:</p>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" title="Facebook">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" title="Instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" title="Twitter">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" title="LinkedIn">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </section>
        </footer>
    );
}

export default Footer
