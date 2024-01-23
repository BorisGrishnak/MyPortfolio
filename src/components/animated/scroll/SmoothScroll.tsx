import React from "react";
import { Link } from "react-scroll";

interface SmoothScrollProps {
    to: string;
    children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ to, children }) => {
    return (
        <Link
          to={to}
          smooth={true}
          duration={800}
          offset={-50}
          className="cursor-pointer"
        >
            {children}
        </Link>
    );
};

export default SmoothScroll;