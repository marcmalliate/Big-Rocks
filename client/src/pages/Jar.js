import React, { useEffect, useState } from "react";
import Form from "../components/MyJar/Form";
import Header from "../components/MyJar/JarHeader";
import Layout from "../components/MyJar/Layout";
import Lists from "../components/MyJar/Lists";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

import MyRocks from "./MyRocks";

const Jar = () => {
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // saving the todos in browser storage to prevent loss of todos on refreshing tab
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (todo.length < 1) {
      setError("At least 1 letter required!");
      return false;
    }

    setTodos([{ id: Date.now(), title: todo, done: false }, ...todos]);

    setTodo("");
    setError(null);
  };

  const delHandler = (todoId) => {
    if (window.confirm("Are you sure")) {
      const updatedTodos = todos.filter((item) => item.id !== todoId);

      setTodos(updatedTodos);
    }
  };

  const doneHandler = (todoId) => {
    const index = todos.findIndex((emp) => emp.id === todoId);
    const newTodo = [...todos];

    newTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    };

    setTodos(newTodo);
  };

  return (
    <span className="font-link">
      <Layout>
        <div>
          {Auth.loggedIn() ? (
            <div>
              <Header />
              <Form
                error={error}
                value={todo}
                submit={submitHandler}
                onChange={(e) => setTodo(e.target.value)}
              />
              <hr className="border-primary" />
              <Lists
                todos={todos}
                delHandler={delHandler}
                doneHandler={doneHandler}
              />
            </div>
          ) : (
            <>
              <p>
                You need to be logged in to view your rocks. Please{" "}
                <Link to="/login">login</Link>
              </p>
            </>
          )}
        </div>
      </Layout>
    </span>
  );
};

export default Jar;
