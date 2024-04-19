import React, { useRef } from "react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import "./offer.css";
import data from "./webdev.jpg";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
export default function Offers() {
  return (
    <motion.section
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      className=" p-4 md:p-8"
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="z-1 position-relative bg-trans mt-5 ">
          <h2 className="text-white text-center bg-trans">What We Offer</h2>
          <p className="text-white text-center bg-trans fs-6">
            We're an innovative IT company dedicated to delivering cutting-edge
            software and hardware solutions tailored to meet your business
            needs.
          </p>
        </div>
        <div className="row mt-5">
          <Link
            heading="Website Development"
            subheading="Our website development professionals recognize the value of solid information architecture design and integrative branding that engages the customer from the first stop at your site. Engagement with your customer is crucial to tying into their emotional connection to your site and developing loyalty."
            imgSrc={data}
            href="#"
          />
          <Link
            heading="Application Development"
            subheading="Build amazing mobile apps powered by open web tech.Reuse existing web development skills to quickly make hybrid applications built with HTML, CSS and JavaScript. Create experiences for multiple platforms with a single codebase so you can reach your audience no matter their device."
            imgSrc={data}
            href="#"
          />
          <Link
            heading="Database Development"
            subheading="We handle and manage databases and cater to database related services, including structured and semi structured data. We have expertise in Microsoft SQL Server, a RDBMS using primary query languages T-SQL and following SQL services.We create basic reports containing tables and graphs, and more complex data visualizations, using charts, maps and sparklines."
            imgSrc={data}
            href="#"
          />
          <Link
            heading="UI/UX Design"
            subheading="We handle and manage databases and cater to database related services, including structured and semi structured data. We have expertise in Microsoft SQL Server, a RDBMS using primary query languages T-SQL and following SQL services.We create basic reports containing tables and graphs, and more complex data visualizations, using charts, maps and sparklines."
            imgSrc={data}
            href="#"
          />
          <Link
            heading="Wordpress Development"
            subheading="We handle and manage databases and cater to database related services, including structured and semi structured data. We have expertise in Microsoft SQL Server, a RDBMS using primary query languages T-SQL and following SQL services.We create basic reports containing tables and graphs, and more complex data visualizations, using charts, maps and sparklines."
            imgSrc={data}
            href="#"
          />
        </div>
      </div>
    </motion.section>
  );
}

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="d-flex align-items-center text-decoration-none justify-content-between border-bottom border-secondary py-4 transition duration-500 hover-border-light md-py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="position-relative z-10 d-block display-4 font-weight-bold text-secondary transition duration-500 group-hover text-light md-display-1"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block poppins-medium"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="position-relative z-10 mt-2 d-block text-secondary transition duration-500 group-hover text-light poppins-regular fs-7">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
          width: "300px",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="z-0 rounded-lg object-cover"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="position-relative z-10 p-4"
      >
        {/* <motion.img
          style={{
            width: "300px", // Set the image width here
          }}
          // variants={{
          //   initial: { scale: 0, rotate: "-12.5deg" },
          //   whileHover: { scale: 1, rotate: "12.5deg" },
          // }}
          // transition={{ type: "spring" }}
          src={data}
          className="z-0 rounded-lg object-cover"
          alt={`Image representing a link for ${heading}`}
        /> */}
        {/* <FiArrowRight className="fs-2 text-white poppins-bold" /> */}
      </motion.div>
      <img src={data} alt="" width={300} className="d-hover" />
    </motion.a>
  );
};
