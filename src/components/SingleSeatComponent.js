import React, { useState } from "react";
import { PaginationItem, PaginationLink } from "reactstrap";
import '../Styles/style.css'

export default function SingleSeatComponent({
  selected = false,
  seatNumber,
  row,
  blank,
  available = true,
}) {
  const [active, setActive] = useState(selected);
  const activeClass = active ? `active-single-seat` : `single-seat`;
  console.log(row)
  console.log(seatNumber)

  function handleSelected() {
    if (available) {
      setActive(!active);
    }
  }

  return (
    <PaginationItem>
      <PaginationLink className={available ? activeClass : "not-available"} onClick={handleSelected}>
        {`${row}${seatNumber}`}
      </PaginationLink>
    </PaginationItem>
  );
}
