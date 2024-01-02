import React, { useState } from "react";

import Edit from "./Edit";

const Cards = ({ todo, setTodo }) => {
  let [Toggle, setToggle] = useState("");
  let [save, setSave] = useState("Edit");

  let Delete = () => {
    setTodo((prevTodo) => {
      return prevTodo.filter((item) => item.id !== todo.id);
    });
  };

  let handleEdits = (a) => {
    if (a === "") {
      setSave("Edit");
      setToggle("");
    } else {
      setToggle(
        Toggle === "" ? (
          <Edit
            todo={todo}
            setToggle={setToggle}
            toggle={Toggle}
            setTodo={setTodo}
            id={todo.id}
            handleEdits={handleEdits}
          />
        ) : (
          ""
        )
      );
      setSave(save === "Edit" ? "Save" : "Edit");
    }
  };

  return (
    <>
      <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Name:{todo.title}</h5>

            <p className="card-text">Description:{todo.description}</p>
            <div className="btn-group">
              Status &nbsp;{" "}
              <button
                className="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {todo.status ? "Completed" : "Not Completed"}
              </button>
              <ul className="dropdown-menu">
                <li>Completed</li>
                <li>Not Completed</li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-end w-auto">
            <button
              className="btn btn-secondary btn-sm w-auto"
              onClick={handleEdits}
            >
              {save}
            </button>
            &nbsp;
            <div>
              <button
                className="btn btn-secondary btn-sm w-auto"
                onClick={Delete}
              >
                Delete
              </button>
            </div>
          </div>
          <div>{Toggle}</div>
        </div>
      </div>
    </>
  );
};

export default Cards;
