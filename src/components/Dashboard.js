import { useState } from "react";
import { Container, Row } from "reactstrap";
import SelectSeatType from "./SelectSeatType";
import TAB_OPTIONS from "../Data/TabOptions";
import SeatBooking from "./SeatBooking";

export default function Dashboard() {
  const [tab, setTab] = useState(TAB_OPTIONS.SEAT_TYPE);
  const [seatSelection, setSeatSelection] = useState({});
  function handleTabChange(tab, seatSelection) {
    setTab(tab);
    setSeatSelection(seatSelection);
  }
  return (
    <Container>
      <Row>
        <h1> Movie ticket booking </h1>
      </Row>
      {tab === TAB_OPTIONS.SEAT_TYPE ? (
        <SelectSeatType onProceed={handleTabChange} />
      ) : null}
       {tab === TAB_OPTIONS.SEAT_SELECTION ? (
        <SeatBooking onProceed={handleTabChange} seatSelection={seatSelection} />
      ) : null}
    
    </Container>
  );
}
