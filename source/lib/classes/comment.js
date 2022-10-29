import { v4 as uuid } from "uuid";
import * as utils from "../utils";

// §18.7.3 Comment
export class Comment {
  constructor(ref, comment, options = {}) {
    this.ref = ref;
    this.comment = comment;
    this.uuid = "{" + uuid().toUpperCase() + "}";
    this.row = utils.getExcelRowCol(ref).row;
    this.col = utils.getExcelRowCol(ref).col;
    this.marginLeft = options.marginLeft || this.col * 88 + 8 + "pt";
    this.marginTop = options.marginTop || (this.row - 1) * 16 + 8 + "pt";
    this.width = options.width || "104pt";
    this.height = options.height || "69pt";
    this.position = options.position || "absolute";
    this.zIndex = options.zIndex || "1";
    this.fillColor = options.fillColor || "#ffffe1";
    this.visibility = options.visibility || "hidden";
  }
}
