import React from "react";

const MovieDetailRow = (props) => {

  const tdStyle = {
    width: "25%"
  }

  return (
    <tr>
      <td style={tdStyle}>
        <label>{props.label}</label>
      </td>
      <td>
        <span>{props.value}</span>
      </td>
    </tr>
  );
}

export default MovieDetailRow;