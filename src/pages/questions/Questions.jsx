import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../../components/layout/Layout";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "60%",
    alignItems: "center",
    marginTop: theme.spacing(4),
    margin: "auto",
    backgroundColor: "#f0f0f0",
    zIndex: "-1",
  },
  accordion: {
    backgroundColor: "D81B60", // Custom background color
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "80.33%",
    flexShrink: 0,
    color: "rgb(216,27,96)", // Custom heading color
  },
}));

const Questions = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Layout>
      <div>
      <div className={classes.main}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              What is this website about?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This website allows users to request access to books in PDF format
              by submitting their books details.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>
              How do I request a book PDF?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To request a book PDF, simply visit the website and fill out the
              details such as username, email, book name, edition, year of
              publication, and desired delivery time for the PDF. Then, click on
              the submit button.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              What happens after I submit my details?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              After submitting your details, you will be redirected to a
              confirmation page, indicating that your submission was successful.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>
              How will I receive the requested book PDF?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Once your request is processed, the requested book PDF will be
              sent to the email address you provided during submission of the
              request as per your chosen delivery time of the pdf..
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>
              Is there a cost associated with requesting a book PDF?{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, there is a fee associated with accessing the requested book
              PDF. After receiving the PDF via email, you will be prompted to
              make payment before accessing the content (pdf).
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography className={classes.heading}>
              How do I make payment for the PDF?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Upon receiving the book PDF via email, you will be provided with
              instructions on how to make payment. Typically, this involves
              following a link or instructions provided in the email to complete
              the payment process securely.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography className={classes.heading}>
              {" "}
              Can I cancel or modify my request after submission?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {" "}
              Unfortunately, requests cannot be canceled or modified after
              submission you will get the delivery but the pdf will get only
              accessible( downloadable) after the payment. Please ensure all
              details are accurate before submitting your request.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Typography className={classes.heading}>
              What should I do if I encounter any issues with the submission or
              payment process?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you encounter any issues or have questions about the submission
              or payment process, please contact on the same email address which
              used to send the bookpdf.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9bh-content"
            id="panel9bh-header"
          >
            <Typography className={classes.heading}>
              What if the book PDF does not get delivered on my chosen delivery
              time frame ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            If the requested book PDF will not get delivered in the chosen  time frame then the fee will get adjusted  as per the time difference between the order time and delivery time . Example - if you ordered an abc book PDF at 2:07 pm with delivery time frame 30 min but the requested book delivered on 2:38 then you will be charged as per the 45 min delivery time frame.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      </div>
    </Layout>
  );
};

export default Questions;
