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
              <span className="badge">Available New Project</span>
              <h1 className="banner-title">
                This is Hazrat Ali <br /> A{" "}
                <span className="text-gradient">
                  <TypeAnimation
                    sequence={[
                      "Web Developer",
                      2000,
                      "Traveller",
                      2000,
                      "Photographer",
                      2000,
                      "Freelancer",
                      3000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <p className="banner-text">
                I am a professional web app developer. I expert in HTML, CSS,
                SCSS, JavsScript, React.js, Node.js, Express.js. I have done
                more than 250 projects worldwide. I have more than 200+ , 5 star{" "}
                <br /> rating in{" "}
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
                <Link href="#" className="secondary-btn">
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
                <Link href="">
                  <Github />
                </Link>
                <Link href="">
                  <Linkedin />
                </Link>
                <Link href="">
                  <Facebook />
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
