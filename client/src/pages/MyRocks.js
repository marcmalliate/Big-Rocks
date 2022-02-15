import React from "react";
import Rocks from "../components/Rocks/Rocks";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_ROCKS } from "../utils/queries";
import { Row, Col } from "react-bootstrap";

const Rocks = () => {
  const { loading, data } = useQuery(QUERY_ALL_ROCKS);
  const rocks = data?.rocks || [];

  return (
    <>
      <h1> My Big Rocks</h1>
      <Row>
        {loading ? (
          <div> Loading</div>
        ) : (
          rocks?.map((product) => (
            <Col key={rock.rock_id} sm={12} md={6} lg={4} ex={3}>
              <Rock rock={rock} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default Rocks;
