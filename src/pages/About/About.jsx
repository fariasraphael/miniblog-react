import { Link } from "react-router-dom";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Projeto consiste em um blog feito com react no front-end e Firebase no
        back-end.
      </p>
      <Link to="/post/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
