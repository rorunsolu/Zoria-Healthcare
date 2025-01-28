const Header = () => {
  return (
    <header className=" grid  bg-green">
      <div className="container header mt-[7rem] sm:mt-[7.5rem]">
        <div className="header__top">
          <h1 className="header__title uppercase h1 text-white">
            Empowering <span className="underline">Your Health Journey</span>{" "}
            with Zoria Healthcare
          </h1>
          <p className="header__subtitle text-white body-1 text font-normal max-w-[37.5rem] leading-[1.875rem]">
            — Providing comprehensive and compassionate care to ensure your
            health and well-being. Your health is our priority.
          </p>
          <div className="header__button-wrapper mt-[2.5rem] mb-16">
            <a className="button button--header" href="#">
              Improve Your Health
            </a>
          </div>
        </div>
        <div className="header__bottom flex flex-col">
          <img
            className="header__image aspect-[10/8] object-right sm:aspect-auto mb-[6rem] rounded-none"
            src="hero/zoria-hero.png"
            alt="Doctors office"
          />
          <div className="flex flex-col gap-[2rem] mb-8">
            <div className="header__logos flex items-center justify-center gap-[1.5rem] flex-wrap mb-[4rem]">
              <img
                className="w-[8.75rem] md:w-[12.5rem]"
                src="hero/Company logo.svg"
                alt="Logo 1"
              />
              <img
                className="w-[8.75rem] md:w-[12.5rem]"
                src="hero/Company logo-1.svg"
                alt="Logo 2"
              />
              <img
                className="w-[8.75rem] md:w-[12.5rem]"
                src="hero/Company logo-2.svg"
                alt="Logo 3"
              />
              <img
                className="w-[8.75rem] md:w-[12.5rem]"
                src="hero/Company logo-3.svg"
                alt="Logo 4"
              />
              <img
                className="w-[8.75rem] md:w-[12.5rem]"
                src="hero/Company logo-4.svg"
                alt="Logo 5"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
