import HexPath from "./HexPath";
import colors from "../../data/colors.json";

const sqrt3 = Math.sqrt(3);
const dataPoints = [
  {
    colorId: "black",
    shift: { x: 0, y: 0 },
  },
  {
    colorId: "blue",
    shift: { x: 1, y: 0 },
  },
  {
    colorId: "orange",
    shift: { x: 0.5, y: 0.5 * sqrt3 },
  },
  {
    colorId: "red",
    shift: { x: 0.5, y: -0.5 * sqrt3 },
  },
  {
    colorId: "pink",
    shift: { x: -0.5, y: 0.5 * sqrt3 },
  },
  {
    colorId: "yellow",
    shift: { x: -0.5, y: -0.5 * sqrt3 },
  },
  {
    colorId: "green",
    shift: { x: 0, y: sqrt3 },
  },
  {
    colorId: "purple",
    shift: { x: 0, y: -sqrt3 },
  },
];

const coef = 0.55;

const ColorHexes = ({
  sitOnSide = false,
  center = { x: 400, y: 400 },
  radius = 200,
  step = 0,
  ...props
}) => {
  const alpha = (step * Math.PI) / 3;
  return (
    <>
      {dataPoints.map(({ shift, colorId }) => {
        const [shiftX, shiftY] = [2 + coef * shift.x, coef * shift.y];
        const x = shiftX * Math.cos(alpha) - shiftY * Math.sin(alpha);
        const y = shiftX * Math.sin(alpha) + shiftY * Math.cos(alpha);
        const color = colors[colorId];
        return (
          <HexPath
            {...props}
            id={colorId}
            key={colorId}
            center={{
              x: center.x + radius * x,
              y: center.y + radius * y,
            }}
            radius={0.3 * radius}
            fill={color.color}
            hoverFill={color.hoverColor}
          />
        );
      })}
    </>
  );
};

export default ColorHexes;
