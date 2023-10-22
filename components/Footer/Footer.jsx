"use client";

import Logo from "../Logo";
import FooterColumn from "./FooterColumn";

import { footerColumns } from "./footerData";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const footerVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.footer
      ref={ref}
      variants={footerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: [0.65, 0.05, 0.36, 1], delay: 0.2 }}
      className="flex place-content-center border-t border-gray-200"
    >
      <section className="flex flex-col items-center gap-12 py-12 px-6 w-full max-w-1140 md:px-0">
        <div className="flex flex-col gap-6 sm:w-full md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
            <Logo />
            <p className="font-light text-gray-400 text-center md:text-left">
              We kaboom your beauty holiday <br className="hidden md:block" />
              instantly and memorable.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-3 md:gap-16">
            {footerColumns.map((column, index) => (
              <FooterColumn key={index} {...column} />
            ))}
          </div>
        </div>
        <p className="font-light text-gray-400 text-center">
          Copyright 2019 • All rights reserved • Staycation
        </p>
      </section>
    </motion.footer>
  );
};

export default Footer;
