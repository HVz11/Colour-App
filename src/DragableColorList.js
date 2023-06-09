import React from "react";
import DragableColorBox from "./DragableColorBox";
import { SortableContainer } from "react-sortable-hoc";

const DragableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <DragableColorBox
          index={i}
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => removeColor(color.name)}
        />
      ))}
    </div>
  );
});
export default DragableColorList;
