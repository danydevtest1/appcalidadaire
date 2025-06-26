import React from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

import "./ItemSensor.scss";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

export function ItemSensor(props) {
  const { dato } = props;

  return (
    <div className="cardSensor">
      <h1>Calidad del Aire</h1>
      {dato ? (
        <div className="cardSensor__cardItems">
          <div>
            <GaugeContainer
              width={500}
              height={200}
              startAngle={-110}
              endAngle={110}
              value={30}
            >
              <GaugeReferenceArc />
              <GaugeValueArc />
              <GaugePointer />
            </GaugeContainer>
            <p>PM 1 : {dato.pm1_0}</p>
          </div>
          <div>
            <GaugeContainer
              width={500}
              height={200}
              startAngle={-110}
              endAngle={110}
              value={30}
            >
              <GaugeReferenceArc />
              <GaugeValueArc />
              <GaugePointer />
            </GaugeContainer>

            <p>PM 2 : {dato.pm2_5}</p>
          </div>
          <div>
            <GaugeContainer
              width={500}
              height={200}
              startAngle={-110}
              endAngle={110}
              value={30}
            >
              <GaugeReferenceArc />
              <GaugeValueArc />
              <GaugePointer />
            </GaugeContainer>
            <p>PM 10: {dato.pm10}</p>
          </div>
        </div>
      ) : (
        <p>No hay informacion en la base de datos</p>
      )}
    </div>
  );
}
