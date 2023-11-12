import React from "react";
import "./FAQs.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#fff" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#1b1c20",
  color: "#fff",
  fontSize: "1.5rem",
  fontFamily: "Visby Bold",
  padding: ".5rem 0",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down("sx")]: {
    fontSize: "1rem",
  },
  "@media screen and (max-width: 450px)": {
    fontSize: "1rem",
  },
  "@media screen and (max-width: 450px) and (max-height: 710px)": {
    fontSize: ".75rem",
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#1b1c20",
  color: "#B5B8BF",
  fontFamily: "Visby Thin", 
  fontSize: "1.25rem",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sx")]: {
    fontSize: ".75rem",
  },
  "@media screen and (max-width: 450px)": {
    fontSize: ".75rem",
  },
  "@media screen and (max-width: 450px) and (max-height: 710px)": {
    fontSize: ".5rem",
  }
}));

const FAQs = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <section className="faqs">
      <div className="faqs-heading">Questions & Answers</div>
      <div className="faqs-container">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            What is CA?
          </AccordionSummary>
          <AccordionDetails>
              A campus ambassador is the one responsible for the outreach and
              publicity of the festival in their college. Simply put, you would
              be the face of the festival as well as BITS itself for the
              students in your college.
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            Who can become a Campus Ambassador?
          </AccordionSummary>
          <AccordionDetails>
            
              Any College Student with a valid College Student Identity Card.
            
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            How to become a College Ambassador?
          </AccordionSummary>
          <AccordionDetails>
            
              By Simply Registering on the College Ambassador Portal. You can
              initiate your registration process by clicking on the "Register"
              button at the opening page.
            
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            How many CAs can be there from a college?
          </AccordionSummary>
          <AccordionDetails>
            
              APOGEE can appoint more than one College Ambassador from the same
              college if the student participation from that college is large
              enough. Your appointment will be confirmed via a call after the
              registrations close. Incase of multiple applications, Campus
              Ambassadors may be selected on the basis of their performance in a
              short task given by APOGEE 2024.
            
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            
              {" "}
              What are the conditions under which I will get a CA Certificate?{" "}
            
          </AccordionSummary>
          <AccordionDetails>
            
              In order to get a CA Certificate, College Ambassadors will have to
              earn more than the minimum Cut-off points which would be set by
              APOGEE, BITS Pilani. The Points allocation can be seen under the
              tab “Points Scheme”.
            
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            
              How much do I have to work to Top the Leaderboard?
            
          </AccordionSummary>
          <AccordionDetails>
            
              Completion of every task on time would keep you on the list of
              contenders for the top positions to grab the incentives of
              Internships and monetary concession at APOGEE 2024.
            
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
