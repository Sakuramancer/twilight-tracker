import ColorPicker from "./ColorPicker";
import classes from "./ColorsContent.module.css";

const ColorsContent = () => {
  return (
    <section className={classes.main}>
      <h1 className={classes.title}>Выберите цвета игроков</h1>
      <ColorPicker />
    </section>
  );
};

export default ColorsContent;
