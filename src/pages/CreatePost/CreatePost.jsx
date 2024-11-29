import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefalt();
  };

  return (
    <div className={styles.create_post}>
      <h2>CriarPost</h2>
      <p>Escreva sbre o que quiser e compartilhe o seu conhecimeno</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense em um bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label>
          <span>URL da Imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que represene o seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>

        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do seu post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </label>

        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tag"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <button type="submit" className="btn">
          Cadastrar
        </button>
        {/* {!loading && (
          <button type="submit" className="btn">
            Cadastrar
          </button>
        )}
        {loading && (
          <button type="submit" className="btn">
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  );
};

export default CreatePost;
