import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Todoitems({ todoname, tododate, ondeleteclick }) {
  return (
    <div>
      <div class="container ">
        <div class="row kg-row">
          <div class="col-6">{todoname}</div>
          <div class="col-4">{tododate}</div>
          <div class="col-2">
            <button
              type="button"
              class="btn btn-danger kg-button"
              onClick={() => ondeleteclick(todoname)}
            >
              <MdDeleteForever></MdDeleteForever>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todoitems;
