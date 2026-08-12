import { useState } from "react";

// {items : [], heading: string}
interface Props {
  items: string[];
  heading: string;
  OnSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, OnSelectItem }: Props) {
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //

  //   items = [];
  //   const message = items.length === 0 ? <p>No items found</p> : null;
  return (
    <>
      <h1>{heading}</h1>
      {/* {message} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? " list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(item, index)}
            // onClick={(event) => console.log(event)}
            onClick={() => {
              setSelectedIndex(index);
              OnSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
