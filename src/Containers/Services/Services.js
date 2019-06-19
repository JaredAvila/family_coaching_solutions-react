import React from "react";
import ServiceLanding from "../../Components/ServicesComp/ServiceLanding/ServiceLanding";
import CTA from "../../Components/CTA/CTA";
import ServiceInfo from "../../Components/ServicesComp/ServiceInfo/ServiceInfo";
import Payments from "../../Components/Payments/Payments";

import animate from "../../UI/Animations.css";

const Services = () => {
  return (
    <div className={animate.FadeIn}>
      <ServiceLanding />
      <CTA />
      <ServiceInfo />
      <Payments />
    </div>
  );
};

export default Services;
