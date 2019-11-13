import React from "react";


function List({ groceries }) {
  let items = groceries.map(item => {
    if (item.purchased) {
      return <li key={item.id} className='list-group-item'>{item.name}</li>
    }
  }

  );
  console.log(items)

  return (
    <ul className="list-group">
      {items}
    </ul>
  )
}

export default List;
