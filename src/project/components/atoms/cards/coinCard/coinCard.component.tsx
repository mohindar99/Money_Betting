import { Box, CardMedia, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { CardStyled } from "./coinCardStyled";

interface CoinCardInterface {
  networkId: string;
  networkName: string;
  networkMarketCap: number;
  percentChangeIn24Hour: number;
  coinValue: number;
  coinLogo: string;
  Iconheight?: number;
  Iconwidth?: number;
}
const CoinCard = ({
  networkId,
  networkName,
  networkMarketCap,
  percentChangeIn24Hour,
  coinValue,
  coinLogo,
  Iconheight,
  Iconwidth,
}: CoinCardInterface) => {
  Iconheight = Iconheight || 100;
  Iconwidth = Iconwidth || 80;
  networkId = networkId || "NUL";
  networkName = networkName || "NA";
  networkMarketCap = networkMarketCap || 0;
  percentChangeIn24Hour = percentChangeIn24Hour || 0;
  return (
    <CardStyled>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Image src={coinLogo} alt="" height={Iconheight} width={Iconwidth} />
      </Stack>
      <Stack alignItems={"center"}>
        <Stack alignItems={"center"} marginBottom="8px">
          <Stack direction="row" alignItems={"end"}>
            <Typography variant="h6" fontSize={"14px"} fontWeight={600}>
              {networkName}&nbsp;
            </Typography>
            <Typography
              variant="h6"
              fontSize={"14px"}
              fontWeight={400}
              color={(theme) => theme.palette.secondary.main}
            >
              {networkId}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            color={(theme) => theme.palette.text.primary}
          >
            <Typography
              variant="subtitle1"
              fontSize={"14px"}
              fontWeight={500}
              color={"inherit"}
            >
              $
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize={"13px"}
              fontWeight={500}
              color={"inherit"}
            >
              {coinValue}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          color={(theme) => theme.palette.secondary.main}
        >
          <Typography
            variant="h5"
            fontSize={{ xs: "10px", sm: "14px" }}
            fontWeight={500}
            marginTop="2px"
            color={"inherit"}
          >
            $
          </Typography>
          <Typography
            variant="h5"
            fontSize={{ xs: "14px", sm: "20px" }}
            fontWeight={800}
            color={"inherit"}
          >
            {/* @ts-ignore */}
            {JSON.parse(networkMarketCap).toFixed(2)}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"center"}
          fontSize={"12px"}
          marginRight={2}
          color={(theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[400]
          }
        >
          <ArrowDropUpIcon
            sx={{
              fontSize: "18px",
              transform:
                percentChangeIn24Hour < 0 ? `rotate(180deg)` : `rotate(0deg)`,
            }}
          />
          <Typography sx={{ fontSize: "inherit" }}>
            {/* @ts-ignore */}
            {JSON.parse(percentChangeIn24Hour).toFixed(2)}
          </Typography>
        </Stack>
      </Stack>
    </CardStyled>
  );
};

export default CoinCard;
