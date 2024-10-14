import React from "react";
import "../Home.css";
import FileUpload from "./FileUpload";

const Legend = () => {
  const dataLegend = {
    ep: "Examen Parcial",
    ef: "Examen Final",
    ec: "Evaluación continua",
    pf: "Nota promedio final"
  };

  return (
    <div className="legend-container">
      <FileUpload />
      <table aria-hidden="true" className="legend-table">
        <thead>
          <tr className="row-header row-green">
            <td  colSpan={8} >Leyenda</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cell-weight">EP</td>
            <td>{dataLegend.ep}</td>
            <td className="cell-weight">EF</td>
            <td>{dataLegend.ef}</td>
            <td className="cell-weight">EC</td>
            <td>{dataLegend.ec}</td>
            <td className="cell-weight">PF</td>
            <td>{dataLegend.pf}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Legend;
