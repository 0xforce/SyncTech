import {
  ComputerDesktopIcon,
  EnvelopeIcon,
  CodeBracketIcon,
  UserGroupIcon,
  ServerStackIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "360-Degree Web",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Web and Mobile App Design & Development",
      desc: "Transform your online and mobile presence with our expert design and development services.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "E-Commerce Store Development",
      desc: "Launch and grow your online store with our comprehensive e-commerce development services.",
      icon: <ComputerDesktopIcon />,
    },
    {
      title: "SaaS & Web Apps Support",
      desc: "Ensure your software-as-a-service (SaaS) and web applications run smoothly with our dedicated support services.",
      icon: <CodeBracketIcon />,
    },
    {
      title: "CRM & Automation Setup",
      desc: "Optimize your customer relationship management and automate your business processes with our CRM and automation setup services.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "API and Salesforce Integration",
      desc: "Enhance your systems with seamless API and Salesforce integration.",
      icon: <ServerStackIcon />,
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      desc: "Stay ahead of the curve with our cutting-edge AI and ML solutions.",
      icon: <UserGroupIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Lead Generation",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Targeted Campaigns",
      desc: "Leverage our data-driven lead generation strategies to attract high-quality leads.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Email Marketing",
      desc: "Nurture your leads with personalized email campaigns.",
      icon: <EnvelopeIcon />,
    },
    {
      title: "Landing Page Optimization",
      desc: "Maximize your conversion rates with optimized landing pages. Our team designs and tests landing pages to ensure they effectively capture and convert leads.",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
