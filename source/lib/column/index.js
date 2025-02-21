import { Column } from "../column/column";

/**
 * Module repesenting a Column Accessor
 * @alias Worksheet.column
 * @namespace
 * @func Worksheet.column
 * @desc Access a column in order to manipulate values
 * @param {Number} col Column of top left cell
 * @returns {Column}
 */
export default function colAccessor(ws, col) {
  if (!(ws.cols[col] instanceof Column)) {
    ws.cols[col] = new Column(col, ws);
  }
  return ws.cols[col];
}
