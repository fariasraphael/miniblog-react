import { NavLink } from "react-router-dom";

import { useAuthantication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { user } = useAuthValue();

  const { logout } = useAuthantication();

  const isActive = ({ isActive }) => (isActive ? styles.active : "");

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={isActive}>
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to="/login" className={isActive}>
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={isActive}>
                Cadastrar
              </NavLink>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <NavLink to="/posts/create" className={isActive}>
                Novo Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={isActive}>
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/about" className={isActive}>
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
