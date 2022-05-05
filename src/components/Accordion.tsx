import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Form from "./Form";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="blackie"
        >
          <h2 className=""> 👉🏻 Click Here to Checkout</h2>
        </AccordionSummary>
        <AccordionDetails>
          <Form />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
