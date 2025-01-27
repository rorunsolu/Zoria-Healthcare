import { navbarLinks, companyLogo } from "../constants/index.js";

const Navbar = () => {
  return (
    <nav className="fixed z-[100] w-full bg-green">
      <div className="container nav flex items-center justify-between pt-[1rem] pb-[1rem]">

        <div className="flex gap-8">
          <a className="logo flex items-center gap-[0.35rem] body-1" href="#">
            <img src={companyLogo.src} alt={companyLogo.alt} />
            {companyLogo.text}
          </a>

          <ul className="nav__list hidden items-center md:flex">
            {navbarLinks.map((link, index) => (
              <li key={index} className="nav__item">
                <a
                  className="nav__link relative font-semibold pt-[0.5rem] pb-[0.5rem] pl-[1rem] pr-[1rem] text-white hover:text-yellow"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__button-wrapper hidden items-center gap-[0.5rem] lg:flex">
          <a
            className="button button--nav border-2 border-white bg-transparent text-white hover:bg-green-hover"
            href="#"
          >
            Login
          </a>
          <a className="button button--nav" href="#">
            Get Started
          </a>
        </div>

        <button
          className="nav__toggle-open text-white md:hidden text-[32px] hover:text-yellow"
          aria-label="open menu"
          type="button"
        >
          <i className="ri-menu-line"></i>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
