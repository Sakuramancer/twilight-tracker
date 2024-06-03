import { useState } from "react";
import SvgCanvas from "../svg/SvgCanvas";
import HexPath from "../svg/HexPath";
import PetalPath from "../svg/PetalPath";
import ColorHexes from "../svg/ColorHexes";
import colors from "../../data/colors.json";

import classes from "./ColorPicker.module.css";

const defPetals = [
  { colorId: "_default" },
  { colorId: "_default" },
  { colorId: "_default" },
  { colorId: "_default" },
  { colorId: "_default" },
  { colorId: "_default" },
];

const ColorPicker = () => {
  const [petals, setPetals] = useState(defPetals);
  const [clicked, setClicked] = useState(-1);

  const petalClickHandler = (event) => {
    setClicked((value) => {
      const newValue = Number(event.target.id);
      return value === newValue ? -1 : newValue;
    }, []);
    event.preventDefault();
  };

  const colorPickHandler = (event) => {
    setPetals((list) => {
      const newPetals = list;
      newPetals[clicked] = { colorId: event.target.id };
      return newPetals;
    }, []);
    setClicked(-1);
    event.preventDefault();
  };

  const center = { x: 600, y: 520 };

  return (
    <SvgCanvas className={classes.canvas} viewbox="0 0 1200 1040">
      <HexPath center={center} />
      {petals.map((petal, index) => {
        const color = colors[petal.colorId];
        return (
          <PetalPath
            key={index}
            id={index}
            center={center}
            className={classes.clickable}
            fill={color.color}
            hoverFill={color.hoverColor}
            onClick={petalClickHandler}
            step={index}
          />
        );
      })}
      {clicked !== -1 && (
        <ColorHexes
          className={classes.clickable}
          step={clicked}
          center={center}
          onClick={colorPickHandler}
        />
      )}
    </SvgCanvas>
  );
};

export default ColorPicker;
