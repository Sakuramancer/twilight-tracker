import { Link } from "react-router-dom";
import classes from "./HomeMenu.module.css";

const HomeMenu = () => {
  return (
    <section className={classes.total}>
      <div className={classes.main}>
        <h1>Трекер Сумерек</h1>
        <div className={classes.disabled}>
          <span>Новая игра</span>
          <span className={classes.italic}>Скоро!</span>
        </div>
        <div className={classes.button}>
          <Link to="/cards">Карты целей</Link>
        </div>
        <div className={classes.warning}>
          Сайт работает в&nbsp;тестовом режиме и&nbsp;предназначен
          для&nbsp;персонального использования администратором игровой сессии.{" "}
        </div>
        <div className={classes.redWarning}>
          Никому не&nbsp;передавайте ссылку на&nbsp;этот сайт!
        </div>
      </div>
    </section>
  );
};

export default HomeMenu;
