const Navbar = () => {
  return (
    <nav className="fixed z-[100] w-full">
      <div className="nav flex items-center justify-between p-[1rem] bg-green">
        <a className="logo flex items-center gap-[0.35rem] body-1" href="#">
          <img src="./src/images/logo.png" alt="" />
          Zoria
        </a>

        <ul className="nav__list flex items-center">
          <li className="nav__item">
            <a
              className="nav__link relative pt-[0.5rem] pb-[0.5rem] pl-[1rem] pr-[1rem] text-white"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link relative pt-[0.5rem] pb-[0.5rem] pl-[1rem] pr-[1rem] text-white"
              href="#about"
            >
              About Us
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link relative pt-[0.5rem] pb-[0.5rem] pl-[1rem] pr-[1rem] text-white"
              href="#pricing"
            >
              Pricing
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link relative pt-[0.5rem] pb-[0.5rem] pl-[1rem] pr-[1rem] text-white"
              href="#conversion"
            >
              Contact
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link relative pt-[0.5rem] pb-[0.5rem] pl-[1rem] pr-[1rem] text-white"
              href="#benefits"
            >
              Benefits
            </a>
          </li>
        </ul>

        <div className="nav__button-wrapper flex items-center gap-[0.5rem]">
          <a className="button button--nav" href="#">
            Login
          </a>
          <span className="text-white">|</span>
          <a className="button button--nav" href="#">
            Get Started
          </a>
        </div>

        <button
          className="nav__toggle-open hidden text-white"
          aria-label="open menu"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
