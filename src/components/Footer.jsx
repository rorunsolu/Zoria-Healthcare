import { companyLogo, groupedLinks, socialLinks } from "../constants/index.js";

const Footer = () => {

    return (
        <footer className="bg-green py-[1rem] px-[1rem]">
            <div className="footer grid grid-cols-1 lg:grid-cols-6 gap-[1.5rem]">

                <div className="footer__company col-span-2">
                    <a className="logo flex items-center gap-[0.35rem] body-1" href="#">
                        <img src={companyLogo.src} alt={companyLogo.alt} />
                        {companyLogo.text}
                    </a>
                    <p className="footer__company-subtitle my-4 text-white">Committed to providing exceptional healthcare services to support your well-being every step of the way.</p>
                    <div className="footer__socials flex gap-[1rem]">
                        {socialLinks.map((link, index) => (
                            <a key={index} className="footer__socials-link text-white hover:text-yellow" href={link.href} target="_blank">
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                    <p className="footer__company-copyright text-white mt-[1rem]">Copyright © 2025. All Rights Reserved.</p>
                </div>

                {groupedLinks.map((group, index) => (
                    <div key={index} className={"footer__group col-span-2"}>
                        <h4 className="footer__group-title text-white font-bold mt-[0.5rem] mb-4">{group.title}</h4>
                        <ul className="footer__group-list space-y-1">
                            {group.links.map((link, index) => (
                                <li key={index}>
                                    <a className="footer__group-link text-white hover:text-yellow" href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;