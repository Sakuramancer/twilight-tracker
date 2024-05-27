import UpArrowSvg from "./UpArrowSvg";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import classes from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const [showButton, scrollMethod] = useScrollToTop({ behavior: "smooth" });

  if (showButton) {
    return (
      <div onClick={scrollMethod} className={classes.container}>
        <UpArrowSvg className={classes.svg} />
      </div>
    );
  }
  return <></>;
};

export default ScrollToTop;
