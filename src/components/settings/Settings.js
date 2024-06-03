import classes from "./Settings.module.css";

const Settings = () => {
  return (
    <section className={classes.main}>
      <div className={classes.players}>Количество игроков</div>
      <div className={classes.tokens}>Токены</div>
      <div className={classes.points}>Очков до победы</div>
      <div className={classes.expansions}>Дополнения</div>
    </section>
  );
};

export default Settings;
