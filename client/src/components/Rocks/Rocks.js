import React from "react";
import { Card } from "react-bootstrap";
import QUERY_ALL_ROCKS from "./utils/queries";
import ADD_ROCK from "./utils/mutations";
import "./Rocks.css";
import { Link } from "react-router-dom";

const Rocks = ({ rock }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/rocks/${rock.rock_id}`}></Link>

      <Card.Body>
        <Link to={`/rocks/${rock.rock_id}`}>
          <Card.Title as="div">
            <div className="card-body-title">
              <strong>{rock.name}</strong>
            </div>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={rock.rockText} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Rocks;
