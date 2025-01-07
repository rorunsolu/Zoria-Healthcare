const Footer = () => {
    return (
        <footer className="bg-green py-16">
            <div className="footer px-[1rem] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-12">

                <div className="footer__company">
                    <a className="logo flex items-center gap-2 text-white font-bold" href="">
                        <img src="./src/assets/logo/logo.png" alt="" className="h-10" />Zoria
                    </a>
                    <p className="footer__company-subtitle my-4 text-white">
                        Committed to providing exceptional healthcare services to support your well-being every step of the way.
                    </p>
                    <div className="footer__socials flex gap-4">
                        <a className="footer__socials-link text-white hover:text-yellow-500" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a className="footer__socials-link text-white hover:text-yellow-500" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a className="footer__socials-link text-white hover:text-yellow-500" href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                    <p className="footer__company-copyright text-white mt-4">Copyright © 2025. All Rights Reserved.</p>
                </div>

                <div className="footer__group">
                    <h4 className="footer__group-title text-white font-bold mb-4">Our Pages</h4>
                    <ul className="footer__group-list space-y-2">
                        <li><a className="footer__group-link text-white hover:text-yellow-500" href="#">Home</a></li>
                        <li><a className="footer__group-link text-white hover:text-yellow-500" href="#">About Us</a></li>
                        <li><a className="footer__group-link text-white hover:text-yellow-500" href="#">Services</a></li>
                        <li><a className="footer__group-link text-white hover:text-yellow-500" href="#">Contact</a></li>
                        <li><a className="footer__group-link text-white hover:text-yellow-500" href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="footer__group">
                    <h4 className="footer__group-title text-white font-bold mb-4">Quick Links</h4>
                    <ul className="footer__group-list space-y-2">
                        <li><a className="footer__group-link text-white hover:text-yellow-500" href="#">FAQ</a></li>
                        <li><a className="footer__group-link text-white hover:text-yellow-500" href="#">Pricing</a></li>
                        <li><a className="footer__group-link text-white hover:text-yellow-500" href="#">About Us</a></li>
                        <li><a className="footer__group-link text-white hover:text-yellow-500" href="#">Terms</a></li>
                        <li><a className="footer__group-link text-white hover:text-yellow-500" href="#">Privacy</a></li>
                    </ul>
                </div>

                <div className="footer__input">
                    <h4 className="footer__input-title text-white font-bold capitalize mb-4">Subscribe to our mailing list</h4>
                    <p className="footer__input-subtitle text-white mb-6">
                        Stay informed with the latest news and insights from HealthCare Inc. Sign up to receive our updates directly in your inbox.
                    </p>
                    <div className="footer__input-wrapper flex items-center gap-4 p-4 bg-white rounded shadow-md md:flex-row flex-col">
                        <input type="text" placeholder="Enter your email address" className="flex-1 p-2 border border-gray-300 rounded" />
                        <button className="button button--input">Subscribe</button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
