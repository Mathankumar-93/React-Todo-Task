import React, { useState } from "react";
import Cards from "./Cards";

const TopBar = ({ todo, setTodo, completed, setCompleted }) => {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [editTitle, setEditTitle] = useState("");
  let [editDescription, setEditDescription] = useState("");
  let [editTodo, setEditTodo] = useState("Add Todo");

  let handleEditChange = (editedTitle, editedDescription, changeTodo) => {
    setEditTitle(editedTitle);
    setEditDescription(editedDescription);
    setEditTodo(changeTodo);
  };

  let handleDrop = () => {
    if (e.target.innerText === "All") {
      let sample = e.target.innerText;
      setCompleted("All");
    } else {
      let completion = e.target.innerText;
      setCompleted(completion === "Completed" ? "Completed" : "Not Completed");
    }
  };

  let handleClick = () => {
    let id = todo.length ? todo[todo.length - 1].id + 1 : 1;
    let newArray = [...todo];
    newArray.push({
      id,
      title,
      description,
    });
    setTodo(newArray);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <h1 className="text-center Header">My Todo</h1>
      <div className="container overflow-hidden text-center">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <input
                type="text"
                value={title}
                placeholder="Todo"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <input
                type="text"
                value={description}
                placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <button onClick={handleClick}>{editTodo}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center p-5">
        <div>
          <h6 className="fw-bold">My Todos</h6>
        </div>
        <div>
          <h4>
            Status Filter :
            <span>
              <div className="btn-group">
                <button
                  className="btn btn-secondary btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {completed}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a onClick={handleDrop}>All</a>
                  </li>
                  <li>
                    <a onClick={handleDrop}>Completed</a>
                  </li>
                  <li>
                    <a onClick={handleDrop}>Not completed</a>
                  </li>
                </ul>
              </div>
            </span>
          </h4>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {completed === "All"
            ? todo.map((e, i) => {
                return (
                  <Cards
                    handleEditChange={handleEditChange}
                    handle
                    editDescription={editDescription}
                    completed={completed}
                    setCompleted={setCompleted}
                    todo={e}
                    setTodo={setTodo}
                    key={i}
                  />
                );
              })
            : completed === "Completed"
            ? todo.map((e, i) => {
                if (e.status === true) {
                  return (
                    <Cards
                      handleEditChange={handleEditChange}
                      handle
                      editDescription={editDescription}
                      completed={completed}
                      setCompleted={setCompleted}
                      todo={e}
                      setTodo={setTodo}
                      key={i}
                    />
                  );
                }
              })
            : todo.map((e, i) => {
                if (e.status === false) {
                  return (
                    <Cards
                      handleEditChange={handleEditChange}
                      handle
                      editDescription={editDescription}
                      completed={completed}
                      setCompleted={setCompleted}
                      todo={e}
                      setTodo={setTodo}
                      key={i}
                    />
                  );
                }
              })}
        </div>
      </div>
    </>
  );
};

export default TopBar;
