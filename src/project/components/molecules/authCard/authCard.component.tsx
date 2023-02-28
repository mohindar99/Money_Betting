import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { Connector } from "wagmi";
import Loginbanner from "../../atoms/banner/loginbanner/loginbanner.component";
import { CustomCard, CustomStack } from "./authCardStyled";

interface AuthCardInterface {
  title: string;
  userName: string;
  description: string;
  enableTray?: boolean;
  children: ReactNode;
  connectorList: Connector[];
}
const lineString = "----------------------";

const AuthCard = ({
  title,
  userName,
  description,
  enableTray,
  children,
  connectorList,
}: AuthCardInterface) => {
  title = title || "login";
  description = description || "Please Enter description";

  return (
    <CustomStack direction={"row"}>
      <CustomCard variant="outlined">
        <Typography variant="h1" fontSize={"25px"} fontWeight={900}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign={"center"}
          fontSize={"13px"}
          fontWeight={400}
          sx={{
            margin: "20px 10px",
            lineHeight: "1.12",
          }}
        >
          {description}
        </Typography>
        {children}
      </CustomCard>
      <Loginbanner />
    </CustomStack>
  );
};

export default AuthCard;
