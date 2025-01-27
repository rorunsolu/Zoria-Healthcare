import { useEffect } from "react";
import { navbarLinks } from "../constants/index.js";

const Sidebar = () => {
  useEffect(() => {
    const openNavBtn = document.querySelector(".nav__toggle-open");
    const popupContainer = document.querySelector(".popup-container");
    const closeNavBtn = popupContainer?.querySelector(".nav__toggle-close");

    const openNavHandler = () => {
      popupContainer.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeNavHandler = () => {
      popupContainer.classList.remove("active");
      document.body.style.overflow = "auto";
    };

    const linkClickHandler = () => {
      popupContainer.classList.remove("active");
      document.body.style.overflow = "auto";
    };

    if (openNavBtn && popupContainer) {
      openNavBtn.addEventListener("click", openNavHandler);

      if (closeNavBtn) {
        closeNavBtn.addEventListener("click", closeNavHandler);
      }

      const navLinks = popupContainer.querySelectorAll(".nav__link");
      navLinks.forEach((link) => {
        link.addEventListener("click", linkClickHandler);
      });

      popupContainer.addEventListener("click", (event) => {
        if (event.target === popupContainer) {
          closeNavHandler();
        }
      });
    }

    return () => {
      if (openNavBtn) {
        openNavBtn.removeEventListener("click", openNavHandler);
      }
      if (popupContainer) {
        popupContainer.removeEventListener("click", closeNavHandler);
      }
      if (closeNavBtn) {
        closeNavBtn.removeEventListener("click", closeNavHandler);
      }
      const navLinks = popupContainer?.querySelectorAll(".nav__link");
      navLinks?.forEach((link) => {
        link.removeEventListener("click", linkClickHandler);
      });
    };
  }, []);

  return (
    <div className="popup-container fixed top-0 right-0 left-0 w-full h-full transform translate-x-full transition-transform duration-200 ease-in-out z-[990]">
      <div className="popup-inner-container fixed top-0 right-0 flex flex-col items-end gap-4 z-[999] bg-green  pt-4 pr-8 pl-8 w-[90%] max-w-[250px] h-full">
        <div className="popup-nav flex flex-col items-end gap-4 w-full text-right">
          <div className="popup-nav__button-wrapper flex justify-end w-full">
            <button
              className="nav__toggle-close text-white md:hidden text-[32px] hover:text-yellow"
              type="button"
            >
              <i className="ri-close-circle-line"></i>
            </button>
          </div>
          <div className="popup-nav__links flex flex-col items-end gap-4 w-full">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;