import React from "react";
import ServiceLanding from "../../Components/ServicesComp/ServiceLanding/ServiceLanding";
import CTA from "../../Components/CTA/CTA";
import ServiceInfo from "../../Components/ServicesComp/ServiceInfo/ServiceInfo";
import Payments from "../../Components/Payments/Payments";

const Services = () => {
  return (
    <div>
      <ServiceLanding />
      <CTA />
      <ServiceInfo />
      <Payments />
    </div>
  );
};

export default Services;
