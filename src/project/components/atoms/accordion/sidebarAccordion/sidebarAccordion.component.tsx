import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

interface SidebarAccordionInterface {
  icon: ReactNode;
  heading: string;
  children?: ReactNode;
}
const SidebarAccordion = ({
  icon,
  heading,
  children,
}: SidebarAccordionInterface) => {
  return (
    <Accordion
      sx={{
        boxShadow: "none",
        background: "transparent",
        "&.MuiAccordion-root:before": {
          backgroundColor: "transparent",
        },
      }}
    >
      <AccordionSummary sx={{}} expandIcon={children && <ExpandMoreIcon />}>
        {icon}
        <Typography
          variant="h1"
          fontWeight={400}
          fontSize={14}
          sx={{
            display: "flex !important",
            alignItems: "center",
          }}
        >
          {heading}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingLeft: "50px" }}>
        <Stack spacing={3}>{children}</Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default SidebarAccordion;
