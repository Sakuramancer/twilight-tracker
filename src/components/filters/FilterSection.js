import Checkbox from "./Checkbox";
import classes from "./FilterSection.module.css";

const FilterSection = ({ filters, handlers }) => {
  const getPhaseHandler = (name) => () => handlers.phases(name);
  const getStageHandler = (name) => () => handlers.stages(name);
  const getExpansionHandler = (name) => () => handlers.expansions(name);
  return (
    <section className={classes.main}>
      <div className={classes.block}>
        <Checkbox
          name="statusPhase"
          label="Фаза статуса"
          defaultChecked={filters.phases.status}
          onClick={getPhaseHandler("status")}
        />
        <Checkbox
          name="actionPhase"
          label="Фаза действий"
          defaultChecked={filters.phases.action}
          onClick={getPhaseHandler("action")}
        />
        <Checkbox
          name="agendaPhase"
          label="Фаза политики"
          defaultChecked={filters.phases.agenda}
          onClick={getPhaseHandler("agenda")}
        />
      </div>
      <div className={classes.block}>
        <Checkbox
          name="stage1"
          label="Цели I этапа"
          defaultChecked={filters.stages.stage1}
          onClick={getStageHandler("stage1")}
        />
        <Checkbox
          name="stage2"
          label="Цели II этапа"
          defaultChecked={filters.stages.stage2}
          onClick={getStageHandler("stage2")}
        />
        <Checkbox
          name="secretStage"
          label="Секретные цели"
          defaultChecked={filters.stages.secret}
          onClick={getStageHandler("secret")}
        />
      </div>
      <div className={classes.block}>
        <Checkbox
          name="mainExpansion"
          label="Базовая игра"
          defaultChecked={filters.expansions.main}
          onClick={getExpansionHandler("main")}
        />
        <Checkbox
          name="pokExpansion"
          label="Пророчество королей"
          defaultChecked={filters.expansions.pok}
          onClick={getExpansionHandler("pok")}
        />
        <Checkbox
          name="omegaExpansion"
          label="Омега-карты"
          defaultChecked={filters.expansions.omega}
          onClick={getExpansionHandler("omega")}
        />
      </div>
    </section>
  );
};

export default FilterSection;
