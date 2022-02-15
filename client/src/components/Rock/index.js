// import React from "react";
// import { Card } from "react-bootstrap";

// import "./Rocks.css";
// import { Link } from "react-router-dom";

// const Rocks = ({ rock }) => {
//   return (
//     <Card className="my-3 p-3 rounded">
//       <Link to={`/rocks/${rock.rock_id}`}></Link>

//       <Card.Body>
//         <Link to={`/rocks/${rock.rock_id}`}>
//           <Card.Title as="div">
//             <div className="card-body-title">
//               <strong>{rock.name}</strong>
//             </div>
//           </Card.Title>
//         </Link>

//         <Card.Text as="div">
//           <light value={rock.rockText} />
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Rocks;

import React, { useState } from "react";
import RockForm from "../RockForm/index";

function Rock(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    eagerness: "",
  });

  console.log(props.rock);

  const submitUpdate = (value) => {
    props.editRockItem(edit.id, value);
    setEdit({ id: null, value: "", eagerness: "" });
  };

  if (edit.id) {
    return <RockForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.rock.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `rock-row complete ${item.eagerness}`
          : `rock-row ${item.eagerness}`
      }
      key={i}
    >
      <div key={item.id} onClick={() => props.completeRockItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        {console.log(item)}
        <p
          onClick={() =>
            setEdit({
              id: item.id,
              value: item.text,
              eagerness: item.eagerness,
            })
          }
        >
          {" "}
          ✏️
        </p>
        <p onClick={() => props.RockItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Rock;
