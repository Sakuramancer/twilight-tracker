import ObjectiveCard from "./ObjectiveCard";
import objectives from "../../data/objectives.json";
import classes from "./CardTable.module.css";

const CardTable = ({ filters }) => {
  const filterFunc = (card) =>
    filters.phases[card.phase] &&
    filters.stages[card.stage] &&
    filters.expansions[card.expansion];

  return (
    <section className={classes.main}>
      {Object.values(objectives)
        .filter(filterFunc)
        .map((card) => (
          <ObjectiveCard key={card.id} cardId={card.id} />
        ))}
    </section>
  );
};

export default CardTable;
