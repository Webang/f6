import React, { FC } from "react";
import { SpinnerProps } from ".";

const SpinnerLines: FC<SpinnerProps> = ({ ...restProps }) => {
  const delays = [
    -1000, -916.667, -833.333, -750, -666.667, -583.333, -500, -416.667,
    -333.333, -250, -166.667, -83.3333,
  ];
  const list = [180, 210, 240, 270, 300, 330, 0, 30, 60, 90, 120, 150];

  return (
    <div {...restProps}>
      {list.map((it, index) => {
        return (
          <svg
            className="item"
            viewBox="0 0 64 64"
            style={{
              transform: `rotate(${it}deg)`,
              opacity: `${index / 12}`,
              animationDelay: `${delays[index]}ms`,
              animationDuration: `1000ms`
            }}
          >
            <line
              className="line"
              transform="translate(32,32)"
              y1="17"
              y2="29"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default SpinnerLines;
