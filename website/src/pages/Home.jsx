import React from "react";
import { Specials } from "../components/Specials/Specials";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { About } from "../components/About/About";
import Main from "./Main";


export const Home = () => {
  return (
    <div>
      <Main />
      <Specials />
      <Testimonials />
      <About />
    </div>
  );
};
