const Footer = () => {
    return (
        <footer>
            <div className="footer">

                <div className="footer__company">
                    <a className="logo" href=""><img src="./src/images/logo.png" alt="Healthcare logo" />Zoria Healthcare</a>
                    <p className="footer__company-subtitle">Committed to providing exceptional healthcare services to support your
                        well-being every step of the way.</p>
                    <div className="footer__socials">
                        <a className="footer__socials-link" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a className="footer__socials-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a className="footer__socials-link" href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                    <p className="footer__company-copyright">Copyright © 2025. All Rights Reserved.</p>
                </div>

                <div className="footer__group">
                    <h4 className="footer__group-title">Our Pages</h4>
                    <ul className="footer__group-list">
                        <li><a className="footer__group-link" href="#">Home</a></li>
                        <li><a className="footer__group-link" href="#">About Us</a></li>
                        <li><a className="footer__group-link" href="#">Services</a></li>
                        <li><a className="footer__group-link" href="#">Contact</a></li>
                        <li><a className="footer__group-link" href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="footer__group">
                    <h4 className="footer__group-title">Quick Links</h4>
                    <ul className="footer__group-list">
                        <li><a className="footer__group-link" href="#">FAQ</a></li>
                        <li><a className="footer__group-link" href="#">Pricing</a></li>
                        <li><a className="footer__group-link" href="#">About Us</a></li>
                        <li><a className="footer__group-link" href="#">Terms</a></li>
                        <li><a className="footer__group-link" href="#">Privacy</a></li>
                    </ul>
                </div>

                <div className="footer__input">
                    <h4 className="footer__input-title">Subscribe to our mailing list</h4>
                    <p className="footer__input-subtitle">Stay informed with the latest news and insights from HealthCare Inc. Sign up
                        to receive our updates directly in your inbox.</p>
                    <div className="footer__input-wrapper">
                        <label htmlFor="email" className="visually-hidden">Email Address</label>
                        <input type="text" placeholder="Enter your email address" />
                        <button className="button button--input">Subscribe</button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;