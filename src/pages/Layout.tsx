import { NavLink, Outlet } from "react-router-dom";
import '../scss/_Layout.scss'

export const Layout = () => {
    return (
      <>
        <header>
          <nav className="navBar">
            <ul>
              <li>
                <NavLink to={"/"}>Hem</NavLink>
              </li>
              <li>
                <NavLink to={"/animals"}>Djuren</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
  };
  