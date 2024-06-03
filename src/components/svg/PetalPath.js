import { useState } from "react";

const innerMult = 1;
const outerMult = 1.4;
const innerCoef = 0.04;
const outerCoef = 0.5 + (Math.sqrt(0.75) * innerCoef) / outerMult;

const dataPoints = [
  { angles: [Math.PI / 6, -Math.PI / 6], coef: innerCoef, mult: innerMult },
  { angles: [-Math.PI / 6, Math.PI / 6], coef: innerCoef, mult: innerMult },
  { angles: [0, Math.PI / 3], coef: outerCoef, mult: outerMult },
  { angles: [0, 0], coef: 0, mult: outerMult },
  { angles: [0, -Math.PI / 3], coef: outerCoef, mult: outerMult },
];

const PetalPath = ({
  sitOnSide = false,
  center = { x: 400, y: 400 },
  radius = 200,
  step = 0,
  fill = "whitesmoke",
  hoverFill = fill,
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const hoverHandler = () => {
    setHover((hover) => !hover, []);
  };
  const sideAngle = sitOnSide ? 0.5 : 0;

  const alpha = (step * Math.PI) / 3;
  const rotatedPoints = dataPoints.map(({ angles, coef, mult }) => [
    mult *
      (coef * Math.cos(alpha + angles[0] + sideAngle) +
        (1 - coef) * Math.cos(alpha + angles[1] + sideAngle)),
    mult *
      (coef * Math.sin(alpha + angles[0] + sideAngle) +
        (1 - coef) * Math.sin(alpha + angles[1] + sideAngle)),
  ]);
  const path = rotatedPoints
    .map(([x, y]) => `${center.x + radius * x},${center.y + radius * y}`)
    .join(" ");

  return (
    <path
      {...props}
      onMouseOver={hoverHandler}
      onMouseOut={hoverHandler}
      fill={hover ? hoverFill : fill}
      d={`M${path}z`}
    />
  );
};

export default PetalPath;
