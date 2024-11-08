import { GiMilkCarton } from "react-icons/gi";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { FaHome } from "react-icons/fa";


interface Link {
  id: number;
  name: string;
  url: string;
  icon: JSX.Element;
}

export const links: Link[] = [
  {
    id: 1,
    name: "Inicio",
    url: "/",
    icon: <FaHome className="h-6 w-6" />, 
  },
  {
    id: 2,
    name: "Belleza",
    url: "/beauty",
    icon: <MdOutlineCoffeeMaker className="h-6 w-6" />, 
  },
  {
    id: 3,
    name: "Alimentación",
    url: "/groceries",
    icon: <GiMilkCarton className="h-6 w-6" />,
  }
];