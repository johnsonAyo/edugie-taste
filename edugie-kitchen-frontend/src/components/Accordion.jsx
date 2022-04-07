import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
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
          <Typography>Input order Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Form />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
