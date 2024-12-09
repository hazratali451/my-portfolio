"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Facebook, Github, LinkArrow, Linkedin } from "./Icon";
import { ContactButton } from "./Navbar";

const Banner = () => {
  return (
    <>
      <div className="target-id" id="home" />
      <section className="banner-section">
        <div className="container">
          <div className="banner-wrapper">
            <div className="banner-content">
              <span className="badge">Available</span>
              <h1 className="banner-title">
                This is Hazrat <br /> A{" "}
                <span className="text-gradient">
                  <TypeAnimation
                    sequence={[
                      "Full Stack",
                      500,
                      "Web Developer",
                      2000,
                      "React Developer",
                      2000,
                      "Top Rated",
                      500,
                      "Fiverr Freelancer",
                      3000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <p className="banner-text">
                I am a professional web application developer specializing in
                MERN Stack development. Additionally, I have expertise in Redux,
                AWS, Docker, and other cutting-edge technologies. With over 650
                successfully completed projects worldwide, I am proud to have
                received more than 500 five-star reviews on <br />{" "}
                <Link
                  href="https://www.fiverr.com/hazratali451"
                  target="_blank"
                  className="text-gradient"
                >
                  Fiverr <LinkArrow />
                </Link>
              </p>

              <div className="banner-btn">
                <ContactButton />
                <Link href="#portfolio" className="secondary-btn">
                  <span>Explore Me</span>
                </Link>
              </div>
            </div>
            <div className="banner-right">
              <Image
                width={434}
                height={434}
                src={"/img/banner.png"}
                alt="hazrat"
              />
              <h5 className="name mt-3 mb-8">Hazrat Ali</h5>
              <div className="mb-3">web app developer</div>
              <div className="social-media">
                <Link target="_blank" href="www.linkedin.com/in/hazratali451">
                  <Linkedin />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/HazratAli451/"
                >
                  <Facebook />
                </Link>
                <Link target="_blank" href="https://github.com/hazratali451">
                  <Github />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
