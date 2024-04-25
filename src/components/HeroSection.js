import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import ellipseImage from "./Ellipse 192.svg";
// import hero from "./herogroup.svg";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const textToType = "Software Development";
  const typingSpeed = 200;
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    });

    if (count > 175) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [count]);

  const [secondcount, set2Count] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      set2Count((prevCount) => prevCount + 1);
    });

    if (count > 6) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [count]);

  const [thirdcount, set3Count] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      set3Count((prevCount) => prevCount + 1);
    });

    if (count > 49) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [count]);

  const [fourthcount, set4Count] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      set4Count((prevCount) => prevCount + 1);
    });

    if (count > 97) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <>
      <div className="d-flex justify-content-end position-absolute z-index right">
        <img src={ellipseImage} alt="" />
      </div>
      <div className="d-flex container container-fluid mt-5 position-relative bg-trans align-items-start flx-wrap pt">
        <div className="left-hero-section d-flex flex-column gap-4 bg-trans">
          <motion.div
            initial={{ x: "50%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1 }}
            className="bg-trans"
            viewport={{
              once: true,
            }}
          >
            <h6 className="text-white fs-1 fw-lighter bg-trans text-center-res">
              We are Top-Notch
            </h6>
            <h1
              className="text-blue fs-1 fw-bolder bg-trans text-center-res"
              id="text-effect"
            >
              {typedText}
            </h1>
            <h6 className="text-white fs-1 fw-lighter bg-trans text-center-res">
              Agency
            </h6>
          </motion.div>
          <div className="bg-trans d-flex-1">
            <motion.p
              initial={{ y: "200%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1 }}
              className="text-white bg-trans w-60 text-center-res"
            >
              LaMinds is a leading IT solution provider in India & USA. We are
              currently at the forefront of offshore software development to
              serve the people across the world.
            </motion.p>
            <motion.div
              initial={{ y: "200%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1 }}
              className="d-flex gap-3 bg-trans mb-5 flex-wrap justify-content-center-1"
            >
              <a href="/" className="bg-trans">
                <button className="contact-bttn bg-trans">Contact Us</button>
              </a>
              <a href="/" className="bg-trans">
                <button className="service-btn">Our Services</button>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="">
          <div className="d-flex  align-items-center gap-4">
            <div className="d-flex flex-column gap-4">
              <div className="shape-1 d-flex justify-content-center align-items-center">
                <div className=" d-flex align-items-center flex-column">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M47.9897 0C46.9221 14.5384 43.1335 25.0624 36.6237 31.5722C35.4692 32.7266 34.2051 33.782 32.8314 34.7383L32.8314 40.4007L25.2541 47.978L20.6302 39.8864L8.11306 27.368L0 22.732L7.57732 15.1546L13.2697 15.1547C14.2174 13.7797 15.2667 12.5168 16.4175 11.366C22.9273 4.85624 33.4513 1.06758 47.9897 0ZM42.3067 5.68046L41.2258 5.84438C31.5322 7.36984 24.4799 10.4475 19.9895 14.938C17.2863 17.6412 15.2301 21.1611 13.8376 25.5594L13.7453 25.8563L22.2091 34.3202L22.6278 34.1886C26.5835 32.8605 29.8328 30.9969 32.419 28.6083L33.0517 28.0002C37.5422 23.5097 40.6198 16.4575 42.1453 6.76392L42.3067 5.68046ZM8.9969 31.892L3.63893 37.25L0.0669424 33.678L5.42492 28.32L8.9969 31.892ZM14.3549 37.25L5.42492 46.1799L1.85293 42.6079L10.7829 33.678L14.3549 37.25ZM16.1409 39.036L19.7128 42.6079L14.3549 47.9659L10.7829 44.3939L16.1409 39.036ZM29.0464 15.1546C31.1388 15.1546 32.8351 16.8509 32.8351 18.9433C32.8351 21.0357 31.1388 22.732 29.0464 22.732C26.954 22.732 25.2577 21.0357 25.2577 18.9433C25.2577 16.8509 26.954 15.1546 29.0464 15.1546Z"
                      fill="#00ADEF"
                    />
                  </svg>
                  <h2 className="text-blue text-center fs-1 fw-bold">
                    {count}+
                  </h2>
                  <p className="text-white">Project Deliverd</p>
                </div>
              </div>
              <div className="shape-2 d-flex justify-content-center align-items-center  ">
                <div className=" d-flex align-items-center flex-column">
                  <h2 className="text-blue text-center fs-1 fw-bold">
                    {secondcount}+
                  </h2>
                  <p className="text-white">Years Of Excellence</p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column gap-4 ">
              <div className="shape-3 d-flex justify-content-center align-items-center ">
                <div className=" d-flex align-items-center gap-3">
                  <svg
                    width="49"
                    height="50"
                    viewBox="0 0 49 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.1627 20.4164C29.2977 20.4164 31.985 12.8009 31.985 8.71806C31.985 3.91115 28.4752 0 24.1627 0C19.8487 0 16.3381 3.91115 16.3381 8.71806C16.3381 12.8001 19.0254 20.4164 24.1627 20.4164ZM24.1627 3.05201C26.7974 3.05201 28.933 5.58823 28.933 8.71806C28.933 11.8464 26.7974 17.3644 24.1627 17.3644C21.5265 17.3644 19.3909 11.8464 19.3909 8.71806C19.3909 5.58823 21.5265 3.05201 24.1627 3.05201Z"
                      fill="#00ADEF"
                    />
                    <path
                      d="M32.0209 25.7532C31.4907 25.3733 30.8658 25.2031 30.2401 25.2031C29.6717 25.2031 29.1017 25.374 28.6012 25.693C27.2507 26.5544 25.7163 27.0145 24.162 27.0145C22.6085 27.0145 21.0734 26.5628 19.7229 25.7014C19.2216 25.3824 18.6524 25.2268 18.0832 25.2268C17.4583 25.2268 16.8334 25.4191 16.3031 25.7998C12.3698 28.6252 10.0198 35.5578 10.0198 40.7172C10.0198 42.4027 11.3863 43.6762 13.0718 43.6762H35.2545C36.94 43.6762 38.3066 42.4027 38.3066 40.7172C38.305 35.5578 35.955 28.5786 32.0209 25.7532ZM13.0703 40.6242C13.0703 36.0461 15.064 30.3542 18.0817 28.1872C19.8694 29.3241 21.9447 29.9803 24.1613 29.9803C26.3785 29.9803 28.4547 29.3249 30.2401 28.1872C33.2578 30.3542 35.253 36.0461 35.253 40.6242H13.0703Z"
                      fill="#00ADEF"
                    />
                    <path
                      d="M21.2016 31.3218C20.7393 31.1357 20.2837 30.8999 19.8504 30.6237C19.5871 30.4558 19.2483 30.465 18.995 30.6474C16.6572 32.3282 15.6134 34.7859 15.6134 38.6154C15.6134 39.0373 15.9552 39.3784 16.3764 39.3784C16.7983 39.3784 17.1394 39.0373 17.1394 38.6154C17.1394 35.5168 17.849 33.5605 19.494 32.1886C19.8649 32.3969 20.2448 32.5816 20.6309 32.7372C21.0231 32.8936 21.4672 32.7059 21.6243 32.3145C21.7815 31.9231 21.5931 31.4798 21.2016 31.3218Z"
                      fill="#00ADEF"
                    />
                    <path
                      d="M24.1612 31.8972C23.9056 31.8972 23.6531 31.8835 23.4028 31.8606C22.9831 31.8194 22.6116 32.1307 22.5726 32.5503C22.5337 32.97 22.8427 33.3416 23.2624 33.3805C23.5592 33.408 23.8583 33.4232 24.1612 33.4232C24.5824 33.4232 24.9242 33.0822 24.9242 32.6602C24.9242 32.2383 24.5824 31.8972 24.1612 31.8972Z"
                      fill="#00ADEF"
                    />
                    <path
                      d="M41.7622 26.3028C41.3273 26.051 40.7527 26.0472 40.298 26.2616C40.0989 26.3554 39.3488 26.5477 38.946 26.6507C38.437 26.7835 37.9968 26.8895 37.6878 27.007C36.8988 27.3046 36.5005 28.1714 36.7973 28.9603C37.0934 29.7485 37.9724 30.1224 38.7628 29.8286C38.9185 29.7698 39.3565 29.6089 39.709 29.5196C40.1202 29.412 40.4742 29.2251 40.7787 29.1358C43.1661 31.0387 44.9989 36.0471 45.4628 39.0991H41.1564C40.314 39.0991 39.6304 39.7827 39.6304 40.6251C39.6304 41.4674 40.314 42.1511 41.1564 42.1511H47.1032C47.9456 42.1511 48.6292 41.6559 48.6292 40.8128C48.6292 36.4492 45.9541 28.7421 41.7622 26.3028Z"
                      fill="#00ADEF"
                    />
                    <path
                      d="M10.3631 28.9764C10.6591 28.1875 10.2593 27.3024 9.47038 27.0064C9.37348 26.9698 9.30863 26.9095 9.13619 26.7737C8.94849 26.6279 8.69212 26.4051 8.33656 26.2197C7.87342 25.9786 7.31872 25.9458 6.86626 26.209C2.67509 28.6484 0 36.4485 0 40.8121C0 41.6545 0.68365 42.1497 1.526 42.1497H4.53223C5.37459 42.1497 6.05824 41.466 6.05824 40.6237C6.05824 39.7813 5.37459 39.0977 4.53223 39.0977H3.1657C3.61663 36.0457 5.35933 31.3089 7.64833 29.3015C7.84824 29.4342 8.09164 29.757 8.3976 29.8715C9.18807 30.169 10.0663 29.7662 10.3631 28.9764Z"
                      fill="#00ADEF"
                    />
                    <path
                      d="M12.6453 22.7031C12.7971 22.7222 12.9673 22.7329 13.1496 22.7329C14.4475 22.7329 16.4221 22.1835 17.807 20.1067C18.2747 19.4055 18.0847 18.4578 17.3835 17.9908C16.6831 17.5239 15.7354 17.7139 15.2677 18.4143C14.3491 19.7931 13.1214 19.6885 13.0153 19.674C12.9337 19.6603 12.8505 19.6542 12.7674 19.6542C11.5931 19.6542 9.52308 15.5378 9.52308 12.5339C9.52308 10.251 10.9781 8.39381 12.7674 8.39381C13.6097 8.39381 14.2934 7.71016 14.2934 6.8678C14.2934 6.02545 13.6097 5.3418 12.7674 5.3418C9.2957 5.3418 6.47107 8.56853 6.47107 12.5339C6.47107 16.0811 8.81196 22.5673 12.6453 22.7031Z"
                      fill="#00ADEF"
                    />
                    <path
                      d="M30.8046 17.9901C30.1027 18.4571 29.9135 19.4048 30.3812 20.106C31.7653 22.1844 33.7399 22.7322 35.0385 22.7322C35.2217 22.7322 35.3918 22.7215 35.5437 22.7024C39.3762 22.5666 41.7179 16.0804 41.7179 12.5324C41.7179 8.56707 38.8932 5.34033 35.4216 5.34033C34.5785 5.34033 33.8956 6.02398 33.8956 6.86634C33.8956 7.70869 34.5785 8.39234 35.4216 8.39234C37.21 8.39234 38.6659 10.2495 38.6659 12.5324C38.6659 15.5371 36.5958 19.6527 35.4216 19.6527C35.3384 19.6527 35.2545 19.6596 35.1728 19.6726C35.1606 19.6771 33.8742 19.842 32.9212 18.4128C32.4527 17.7124 31.5058 17.5209 30.8046 17.9901Z"
                      fill="#00ADEF"
                    />
                  </svg>
                  <div>
                    <div className="text-blue text-center fs-2 fw-bold">
                      {thirdcount}+
                    </div>
                    <div className="text-white">IT Experts</div>
                  </div>
                </div>
              </div>
              <div className="shape-4 d-flex justify-content-center align-items-center">
                <div className=" d-flex align-items-center flex-column">
                  <svg
                    width="60"
                    height="54"
                    viewBox="0 0 60 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.9997 15.5027C34.2738 15.5027 37.751 12.0254 37.751 7.75137C37.751 3.47731 34.2737 0 29.9997 0C25.7255 0 22.2483 3.47731 22.2483 7.75137C22.2483 12.0253 25.7255 15.5027 29.9997 15.5027ZM29.9997 3.74191C32.2103 3.74191 34.0089 5.54039 34.0089 7.75113C34.0089 9.96188 32.2104 11.7604 29.9997 11.7604C27.7889 11.7604 25.9904 9.96188 25.9904 7.75113C25.9904 5.54051 27.789 3.74191 29.9997 3.74191Z"
                      fill="#00ADEF"
                    />
                    <path
                      d="M17.4993 34.1728H42.5002C43.5336 34.1728 44.3713 33.3351 44.3713 32.3017C44.3713 24.3771 37.9243 17.9302 29.9998 17.9302C22.0754 17.9302 15.6282 24.3771 15.6282 32.3017C15.6282 33.3351 16.4659 34.1728 17.4993 34.1728ZM40.4641 30.4306H19.5353C21.6079 18.8066 38.3936 18.8183 40.4641 30.4306Z"
                      fill="#00ADEF"
                    />
                    <path
                      d="M37.5514 41.3549L33.493 40.7651L31.678 37.0876C30.993 35.6998 29.0075 35.6988 28.3222 37.0876L26.5072 40.7651L22.4488 41.3549C20.9172 41.5774 20.3029 43.4656 21.4118 44.5465L24.3484 47.409L23.6551 51.4511C23.3934 52.9764 24.9993 54.1443 26.37 53.4236L30 51.5153L33.63 53.4236C34.9923 54.1398 36.6083 52.9868 36.3449 51.4511L35.6516 47.409L38.5882 44.5465C39.6966 43.4661 39.0839 41.5777 37.5514 41.3549ZM32.0157 48.3469C29.8472 47.207 30.0197 47.2771 27.9847 48.3469C28.3748 46.0726 28.4982 46.2279 26.739 44.5131C29.0236 44.1811 28.9129 44.3467 30.0002 42.1437C31.0843 44.3404 30.9738 44.1808 33.2614 44.5131C31.5072 46.2229 31.6249 46.0685 32.0157 48.3469Z"
                      fill="#00ADEF"
                    />
                    <path
                      d="M16.7051 41.3549L12.6467 40.7651L10.8317 37.0876C10.1467 35.6998 8.1612 35.6988 7.47589 37.0876L5.66101 40.7651L1.60257 41.3549C0.0710437 41.5774 -0.543253 43.4656 0.565575 44.5464L3.50229 47.4089L2.80901 51.4509C2.54733 52.9763 4.15327 54.1441 5.5239 53.4234L9.1539 51.515L12.7839 53.4234C14.1461 54.1397 15.7622 52.9867 15.4988 51.4509L14.8055 47.4089L17.7421 44.5464C18.8503 43.4661 18.2376 41.5777 16.7051 41.3549ZM11.1694 48.3469C9.05147 47.2335 9.25632 47.2335 7.13839 48.3469C7.52862 46.0725 7.6519 46.228 5.89268 44.5131C8.17714 44.1811 8.06663 44.3468 9.1539 42.1437C10.238 44.3404 10.1275 44.1806 12.4151 44.5131C10.7628 46.1237 10.754 45.9256 11.1694 48.3469Z"
                      fill="#00ADEF"
                    />
                    <path
                      d="M58.3975 41.3549L54.339 40.7651L52.5242 37.0876C51.8392 35.6998 49.8537 35.6988 49.1684 37.0876L47.3534 40.7651L43.2949 41.3549C41.7634 41.5774 41.1491 43.4656 42.258 44.5465L45.1948 47.409L44.5015 51.4511C44.2398 52.9764 45.8457 54.1441 47.2164 53.4236L50.8464 51.5152L54.4764 53.4236C55.8387 54.1398 57.4547 52.9868 57.1913 51.4511L56.498 47.409L59.4346 44.5465C60.5426 43.4661 59.9299 41.5777 58.3975 41.3549ZM52.8619 48.3469C50.6931 47.2068 50.8764 47.2715 48.8309 48.3469C49.221 46.0726 49.3444 46.2279 47.5852 44.5131C50.0093 44.1608 49.8235 44.2166 50.8464 42.1437C51.9304 44.3404 51.8199 44.1806 54.1076 44.5131C52.3533 46.223 52.4711 46.0686 52.8619 48.3469Z"
                      fill="#00ADEF"
                    />
                  </svg>
                  <h2 className="text-blue text-center fs-1 fw-bold">
                    {fourthcount}%
                  </h2>
                  <p className="text-white">Client Satisfaction</p>
                </div>
              </div>
            </div>
            {/* <motion.img
              initial={{ x: "-50%" }}
              animate={{ x: "0" }}
              transition={{ duration: 1 }}
              src={hero}
              alt=""
              className="bg-trans z-index-1 position-relative img-fluid"
              // width="500px"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
