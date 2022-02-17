// import React from "react";
// import Rock from "../components/Rocks/Rocks";
// import { useQuery } from "@apollo/client";
// import { QUERY_ALL_ROCKS } from "../utils/queries";

// import { Row, Col } from "react-bootstrap";

// const MyRocks = () => {
//   const { loading, data } = useQuery(QUERY_ALL_ROCKS);
//   const rock = data?.rock || [];

//   return (
//     <>
//       <h1> My Big Rocks</h1>
//       <Row>
//         {loading ? (
//           <div> Loading</div>
//         ) : (
//           rock?.map((rock) => (
//             <Col key={rock.rock_id} sm={12} md={6} lg={4} ex={3}>
//               <Rock rock={rock} />
//             </Col>
//           ))
//         )}
//       </Row>
//     </>
//   );
// };

// export default MyRocks;

import React, { useState } from "react";
import Rock from "../components/Rock";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_ROCKS } from "../utils/queries";
import RockForm from "../components/RockForm";

function RockList() {
  const [rock, setRock] = useState([]);
  const [error, setError] = useState(null);
  const [rocks, setRocks] = useState([]);

  // NEED TO ADD LOCAL STORAGE!!!
  // useEffect(() => {
  //   const storedRocks = JSON.parse(localStorage.getItem("rock"));
  //   if (storedRocks) setRocks(storedRocks);
  // }, []);

  // // saving the rocks in browser storage to prevent loss of rocks on refreshing tab
  // useEffect(() => {
  //   localStorage.setItem("rock", JSON.stringify(rock));
  // }, [rock]);

  // Function to add a Rocklist item
  const addRockItem = (item) => {
    console.log("Add Rock Item", item);
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new Rocklist item to the existing array of objects
    const newRock = [item, ...rock];
    console.log(newRock);

    // Call setRock to update state with our new set of Rocklist items
    setRock(newRock);
  };

  // Function to mark Rocklist item as complete
  const completeRockItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedRock = Rock.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedRock);
    setRock(updatedRock);
  };

  // Function to remove Rocklist item and update state
  const removeRockItem = (id) => {
    const updatedRock = [...rock].filter((item) => item.id !== id);

    setRock(updatedRock);
  };

  // Function to edit the Rocklist item
  const editRockItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setRock((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>My Big Rocks</h1>
      <RockForm onSubmit={addRockItem} />
      <Rock
        rock={rock}
        completeRockItem={completeRockItem}
        removeBucketItem={removeRockItem}
        editRockItem={editRockItem}
      ></Rock>
    </div>
  );
}

export default RockList;
