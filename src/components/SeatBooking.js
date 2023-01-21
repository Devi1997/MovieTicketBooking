import { useEffect, useState } from "react";
import { Row, Label, Col, Pagination } from "reactstrap";
import SEAT from "../Data/SeatData";
import SingleSeatComponent from "./SingleSeatComponent";

export default function SeatBooking({ onProceed, seatSelection }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [availableSeats, setAvailableSeats] = useState([]);

  function RenderSeatsRow({ structure }) {
    var rows = [];
    for (let i = 1; i <= structure.totalPlaces; i++) {
      rows.push(
        <SingleSeatComponent
          seatNumber={i}
          row={structure.row}
          blank={!structure.seats.includes(i)}
          selected={selectedSeats.includes(`${structure.row}${i}`)}
          available={availableSeats.includes(`${structure.row}${i}`)}
        />
      );
    }
    return rows;
  }

  function getAvailableSeats() {
    const availableSeats = [];
    SEAT.SEAT_TYPE.map((itemType) => {
      SEAT.SEAT_STRUCTURE[itemType.type].map((rowItem) => {
        rowItem.seats.map((seatItem) =>
          availableSeats.push(`${rowItem.row}${seatItem}`)
        );
      });
    });
    return availableSeats;
  }
  useEffect(() => {
    const availableSeats = getAvailableSeats();
    setAvailableSeats(availableSeats);
  }, []);

  return (
    <Row>
      <Col>
        <Label>Select your desired seat</Label>
        {SEAT.SEAT_TYPE.map((item) => {
        return  <Row key={`${item.type}_type`}>
            <Label>{item.title}</Label>
            {SEAT.SEAT_STRUCTURE[item.type].map((itemRow) => (
              <Row key={itemRow.row}>
                <Pagination>
                  <RenderSeatsRow structure={itemRow} />
                </Pagination>
              </Row>
            ))}
          </Row>;
        })}
      </Col>
    </Row>
  );
}
