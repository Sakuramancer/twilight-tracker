import { Link } from "react-router-dom";
import classes from "./Error.module.css";

const Error = () => {
  return (
    <section className={classes.total}>
      <div className={classes.main}>
        <h1>Что-то пошло не так!</h1>
        <p>Мы не нашли у себя такой страницы</p>
        <Link to="/">Вернуться на главную страницу</Link>
      </div>
    </section>
  );
};

export default Error;
