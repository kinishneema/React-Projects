import React, { useRef, useState } from "react";
import { MdAddComment } from "react-icons/md";

function AddTodo({ onnewitem }) {
  const todonameelement = useRef();
  const duedateelement = useRef();

  const handleaddbuttonclick = (event) => {
    event.preventDefault();
    const todoname = todonameelement.current.value;
    const duedate = duedateelement.current.value;
    todonameelement.current.value = "";
    duedateelement.current.value = "";
    onnewitem(todoname, duedate);
  };
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input
              type="text"
              ref={todonameelement}
              placeholder="Enter Todo Here"
            />
          </div>
          <div class="col-4">
            <input type="date" ref={duedateelement} />
          </div>
          <div class="col-2">
            <button
              type="button"
              class="btn btn-success kg-button"
              onClick={handleaddbuttonclick}
            >
              <MdAddComment></MdAddComment>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
