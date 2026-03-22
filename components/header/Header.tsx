import Link from "next/link";
import { Routes } from "./routes";
import { NavLink } from "./NavLink";
import "./_header.css"

const Header = () => {

  return (
    <nav>
      {!!Routes.length && (
        <ul>
          {Routes.map((link) => (
            <li key={link.url}>
              <NavLink {...link} />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export { Header };