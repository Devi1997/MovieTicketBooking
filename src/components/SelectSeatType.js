import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Label,
} from "reactstrap";

import '../Styles/style.css'
import SEAT from "../Data/SeatData";
import TAB_OPTIONS from "../Data/TabOptions";

export default function SelectSeatType({ onProceed }) {
  const [seatCount, setSeatCount] = useState(0);
  const [seatType, setSeatType] = useState(null);
  const [isProceedDisable, setProceedDisable] = useState(true);

  const RenderSeatCounts = () => {
    var rows = [];
    for (let i = 1; i <= SEAT.MAX_SEAT_ALLOWED; i++) {
      rows.push(
        <PaginationItem key={i} active={seatCount === i ? true : false}>
          <PaginationLink onClick={() => setSeatCount(i)}>{i}</PaginationLink>
        </PaginationItem>
      );
    }
    return rows;
  };

  useEffect(() => {
    if (seatCount > 0 && seatType) setProceedDisable(false);
  }, [seatCount, seatType]);

  function handleProceed() {
    onProceed(TAB_OPTIONS.SEAT_SELECTION, { seatCount, seatType });
  }
  return (
    <Row>
      <Row>
        <Col>
          <Label>Select Seat Type</Label>
          <ListGroup horizontal >
            {SEAT.SEAT_TYPE.map((item) => (
              <ListGroupItem 
                key={item.type}
                active={seatType === item.type ? true : false}
                tag="a"
                onClick={() => setSeatType(item.type)}
              >
                {item.title} (₹{SEAT.SEAT_PRICE[item.type]}.00/seat)
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>Total Seats</Label>
          <Pagination>
            <RenderSeatCounts />
          </Pagination>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>
            Total Price:{" "}
            <b>
              ₹
              {seatCount > 0 && seatType
                ? SEAT.SEAT_PRICE[seatType] * seatCount
                : 0}
              .00
            </b>
          </Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={handleProceed} disabled={isProceedDisable} >Proceed</button>
        </Col>
      </Row>
    </Row>
  );
}
