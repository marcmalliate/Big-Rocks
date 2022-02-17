import React, { useEffect, useState } from "react";
import RockForm from "../components/Rock/RockForm";
import RockHeader from "../components/Rock/RockHeader";
import RockLayout from "../components/Rock/RockLayout";
import RockLists from "../components/Rock/RockLists";

import { Container } from "react-bootstrap";

const MyRocks = () => {
  const [error, setError] = useState(null);
  const [rock, setRock] = useState("");
  const [rocks, setRocks] = useState([]);

  useEffect(() => {
    const storedRocks = JSON.parse(localStorage.getItem("rocks"));
    if (storedRocks) setRocks(storedRocks);
  }, []);

  // saving the Rocks in browser storage to prevent loss of Rocks on refreshing tab
  useEffect(() => {
    localStorage.setItem("rocks", JSON.stringify(rocks));
  }, [rocks]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (rock.length < 1) {
      setError("At least 1 letter required!");
      return false;
    }

    setRocks([{ id: Date.now(), title: rock, done: false }, ...rocks]);

    setRock("");
    setError(null);
  };

  const delHandler = (rockId) => {
    if (window.confirm("Are you sure")) {
      const updatedRocks = rocks.filter((item) => item.id !== rockId);

      setRocks(updatedRocks);
    }
  };

  const doneHandler = (rockId) => {
    const index = rocks.findIndex((emp) => emp.id === rockId);
    const newRock = [...rocks];

    newRock[index] = {
      id: rocks[index].id,
      title: rocks[index].title,
      done: !rocks[index].done,
    };

    setRocks(newRock);
  };

  return (
    <RockLayout>
      <RockHeader />
      <RockForm
        error={error}
        value={rock}
        submit={submitHandler}
        onChange={(e) => setRock(e.target.value)}
      />
      <hr className="border-primary" />
      <RockLists
        rocks={rocks}
        delHandler={delHandler}
        doneHandler={doneHandler}
      />
    </RockLayout>
  );
};

export default MyRocks;
