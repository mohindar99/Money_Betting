import { Box, Grid, Popover, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Connector, useAccount, useConnect, useSignMessage } from "wagmi";
import { CustomChip } from "./walletButtonTrayStyled";
import FortmaticLogo from "/public/logo/FortmaticLogo.svg";
import MetamaskLogo from "/public/logo/Metamask.svg";
import WalletConnectLogo from "/public/logo/WalletConnect.svg";

const icon = (walletName: string) => {
  switch (walletName) {
    case "MetaMask":
      return (
        <MetamaskLogo
          style={{
            height: "38px",
            width: "38px",
            color: "inherit",
          }}
        />
      );
    case "Coinbase Wallet":
      return (
        <FortmaticLogo
          style={{
            height: "38px",
            width: "38px",
            color: "inherit",
          }}
        />
      );
    case "WalletConnect":
      return (
        <WalletConnectLogo
          style={{
            height: "38px",
            width: "38px",
            color: "inherit",
          }}
        />
      );
    default:
      return <Box>No icon</Box>;
  }
};
interface WalletButtonTray {
  enableTray?: boolean;
  connectorList: Connector[];
  userName?: string;
  handleOnclickFunc?: (connector: Connector) => {};
}
const WalletButtonTray = ({
  enableTray,
  connectorList,
  handleOnclickFunc,
}: WalletButtonTray) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      width={{ xs: "100%", md: "80%" }}
      minWidth={"fit-content"}
      sx={{ position: "relative" }}
    >
      {connectorList?.length > 0 &&
        connectorList?.map((connector: Connector<any, any, any>) => {
          return (
            connector.ready && (
              <Grid item xs={12} md={6} key={connector.id}>
                <CustomChip
                  disabled={!enableTray}
                  onClick={() =>
                    handleOnclickFunc && handleOnclickFunc(connector)
                  }
                  icon={icon(connector?.name)}
                  label={connector?.name}
                />
              </Grid>
            )
          );
        })}
    </Grid>
  );
};

export default WalletButtonTray;
