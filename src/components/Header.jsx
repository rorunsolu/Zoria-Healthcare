const Header = () => {
  return (
    <header className="h-dvh grid place-items-center bg-green">
      <div className="container header">
        <div className="header__text-wrapper">
          <h1 className="header__title uppercase h1 text-white">
            Welcome to <span className="text-yellow">Zoria Healthcare</span>
          </h1>
          <p className="header__subtitle text-white max-w-[900px] body-1 text font-normal">
            Providing comprehensive and compassionate care to ensure your health
            and well-being. Your health is our priority.
          </p>
        </div>
        <div className="header__button-wrapper mt-[2.5rem]">
          <a className="button button--header" href="#">
            Improve Your Health
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
