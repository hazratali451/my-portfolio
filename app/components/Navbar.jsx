"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useScroll from "../hooks/useScroll";
import { ClearIcon, ContactIcon, HamburgerIcon } from "./Icon";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const scroll = useScroll();

  const handleMenuActive = () => {
    const allQuery = document.querySelectorAll(".target-id");
    allQuery.forEach((item) => {
      if (window.scrollY + 100 >= item.offsetTop) {
        const id = item.id;
        const allMenu = document.querySelectorAll(".menu li a");
        allMenu.forEach((menu) => {
          menu.classList.remove("active");
          if (menu.getAttribute("href") === `#${id}`) {
            menu.classList.add("active");
          }
        });
      }
    });
  };

  React.useEffect(() => {
    handleMenuActive();
    const scroll = window.addEventListener("scroll", handleMenuActive);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      <header className={scroll > 0 ? "active" : ""}>
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <div className="img">
                <Image
                  src="/img/hazrat.png"
                  alt="logo"
                  width={60}
                  height={60}
                />
              </div>
              <span>Hazrat</span>
            </div>
            <div className={`menu-wrapper ${open ? "active" : ""}`}>
              <div className="logo d-lg-none mb-4">
                <div className="img">
                  <Image
                    src="/img/hazrat.png"
                    alt="logo"
                    width={60}
                    height={60}
                  />
                </div>
                <span>Hazrat</span>
                <span className="ms-auto" onClick={() => setOpen(!open)}>
                  <ClearIcon />
                </span>
              </div>
              <ul className="menu" onClick={() => setOpen(false)}>
                <li>
                  <Link shallow={true} href="#home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link shallow={true} href="#portfolio">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link shallow={true} href="#works">
                    Works
                  </Link>
                </li>
                <li>
                  <Link shallow={true} href="#contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <Image
                src={"/img/noisy-shape1.png"}
                alt={"noisy"}
                className="right-top-image w-100 mw-100 d-lg-none"
                width={703}
                height={962}
              />
              <div className="d-flex d-lg-none mt-4 w-btn-100">
                <ContactButton onClick={() => setOpen(false)} />
              </div>
            </div>
            <div className="d-flex flex-wrap gap-3 ms-auto ms-lg-0 align-items-center header-btn-grp">
              <ContactButton />
              <button
                type="button"
                className="no-gutter bg-transparent d-lg-none"
                onClick={() => setOpen(!open)}
              >
                <HamburgerIcon />
              </button>
            </div>
          </div>
        </div>
        {open ? (
          <div className="d-lg-none overlay" onClick={() => setOpen(false)} />
        ) : (
          ""
        )}
      </header>
    </>
  );
};
export const ContactButton = ({ text, ...rest }) => {
  return (
    <>
      <Link href="#contact" shallow={true} className="cmn-btn" {...rest}>
        <span>
          {text || "Contact Me"} <ContactIcon />
        </span>
      </Link>
    </>
  );
};
export default Navbar;
