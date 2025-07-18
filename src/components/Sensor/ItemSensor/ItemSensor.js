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
      <h2>Calidad del Aire</h2>
      {dato ? (
        <div className="cardSensor__item">
          <div className="cardSensor__item__cardg">
            <div className="cardSensor__item__cardg__gau">
              <GaugeContainer
                width={300}
                height={200}
                startAngle={-110}
                endAngle={110}
                value={dato.pm1_0}
                valueMin={0}
                valueMax={70}
              >
                <GaugeReferenceArc />
                <GaugeValueArc />
                <GaugePointer />
              </GaugeContainer>
           </div>
            <p>PM 1 : {dato.pm1_0}</p>
          </div>
          <div className="cardSensor__item__cardg">
            <div className="cardSensor__item__cardg__gau">
              <GaugeContainer
                width={300}
                height={200}
                startAngle={-110}
                endAngle={110}
                value={dato.pm2_5}
                valueMin={0}
                valueMax={75}
              >
                <GaugeReferenceArc />
                <GaugeValueArc />
                <GaugePointer />
              </GaugeContainer>
            </div>
            <p>PM 2 : {dato.pm2_5}</p>
          </div>
          <div className="cardSensor__item__cardg">
         <div className="cardSensor__item__cardg__gau">
              <GaugeContainer
                width={300}
                height={200}
                startAngle={-110}
                endAngle={110}
                value={dato.pm10}
                valueMin={0}
                valueMax={150}
              >
                <GaugeReferenceArc />
                <GaugeValueArc />
                <GaugePointer />
              </GaugeContainer>
           </div>
            <p>PM 10: {dato.pm10}</p>
            </div>
          </div>
        
      ) : (
        <p>No hay informacion en la base de datos</p>
      )}
    </div>
  );
}
