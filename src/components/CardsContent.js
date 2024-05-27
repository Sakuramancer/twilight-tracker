import FilterSection from "./filters/FilterSection";
import CardTable from "./cardTable/CardTable";
import ScrollToTop from "./Layout/ScrollToTop";
import { useFilter } from "../hooks/useFilter";

import classes from "./CardsContent.module.css";

const CardsContent = () => {
  const [filters, handlers] = useFilter();
  return (
    <section className={classes.main}>
      <FilterSection filters={filters} handlers={handlers} />
      <CardTable filters={filters} />
      <ScrollToTop />
    </section>
  );
};

export default CardsContent;
