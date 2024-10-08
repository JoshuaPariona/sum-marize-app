import React from "react";
import "../Home.css";
import FileUpload from "./FileUpload";

const Legend = () => {
  const dataLegend = {
    ep: "Examen Parcial",
    ef: "Examen Final",
    ec: "Evaluación continua",
  };

  return (
    <div className="legend-container">
      <FileUpload />
      <table aria-hidden="true" className="legend-table">
        <tr className="row-header row-green">
          <td  colSpan={6} >Leyenda</td>
        </tr>
        <tr>
          <td className="cell-weight">EP</td>
          <td>{dataLegend.ep}</td>
          <td className="cell-weight">EF</td>
          <td>{dataLegend.ef}</td>
          <td className="cell-weight">EC</td>
          <td>{dataLegend.ec}</td>
        </tr>
      </table>
    </div>
  );
};

export default Legend;
