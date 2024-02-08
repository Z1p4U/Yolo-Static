import { Link } from "react-scroll";

const NavLink = ({ href, title }) => {
  return (
    <Link
      to={href}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      className="hover:no-underline cursor-pointer"
    >
      <p className="text-xl text-[#530FFE] hover:text-[#530FFEa0] transition-all duration-300">
        {title}
      </p>
    </Link>
  );
};

export default NavLink;
