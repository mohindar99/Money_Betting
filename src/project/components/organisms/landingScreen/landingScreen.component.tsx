import { serviceWorkersApi } from "@/project/utility/serviceWorkers";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CoinCard from "../../atoms/cards/coinCard/coinCard.component";
import ModifiedSlider from "../../atoms/modifiedSlider/modifiedSlider.component";
import { GridDisplayBox } from "./landingScreenStyled";

const LandingScreen = () => {
  const elemList = ["elem 1", "elem 2", "elem 1", "elem 2", "elem 1", "elem 2"];
  const [[ethereum, bitcoin, solana, polygon], setCryptoMarketPrice] =
    useState<any>([]);

  useEffect(() => {
    let data = serviceWorkersApi.cryptoMarketCapApi().then((result) => {
      try {
        setCryptoMarketPrice(result.list);
      } catch (error) {
        console.log({ error });
      }
    });
  }, []);

  // console.log({ ethereum, bitcoin, solana, polygon });
  return (
    <Stack p={4}>
      <ModifiedSlider type="carousel" elemList={elemList} />
      <Grid container sx={{ padding: "30px 0px" }}>
        <Grid item xs={12} lg={5}>
          <Stack>
            <Typography
              variant="h1"
              fontWeight={800}
              fontSize={"38px"}
              lineHeight={1.08}
              color="text.primary"
            >
              Posf sfpaosf isadfoisf dsafdj
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Stack
            sx={{
              marginLeft: { xs: "0px", lg: "5rem" },
              height: "100%",
              marginTop: "15px",
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={400}
              lineHeight={1.2}
              fontSize={"12px"}
              color="text.secondary"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              dicta neque rem expedita libero provident quis sunt delectus nemo,
              voluptate enim ipsa aut. Esse, libero facilis ipsam sint corrupti
              temporibus? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Facere dicta neque rem expedita libero provident quis sunt
              delectus nemo, voluptate enim ipsa aut. Esse, libero facilis ipsam
              sint corrupti temporibus?
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <GridDisplayBox>
        <CoinCard
          networkId={"ETH"}
          networkName={"Ethereum"}
          coinValue={ethereum?.priceInUSD}
          networkMarketCap={ethereum?.usdMarketCap}
          percentChangeIn24Hour={ethereum?.usd24hChange}
          coinLogo="/chainIcon/Ethereum.png"
          Iconwidth={60}
        />
        <CoinCard
          networkId={"BTC"}
          networkName={"Bitcoin"}
          coinValue={bitcoin?.priceInUSD}
          networkMarketCap={bitcoin?.usdMarketCap}
          percentChangeIn24Hour={bitcoin?.usd24hChange}
          coinLogo="/chainIcon/BtcCoin.png"
        />
        <CoinCard
          networkId={"MATIC"}
          networkName={"Polygon"}
          coinValue={polygon?.priceInUSD}
          networkMarketCap={polygon?.usdMarketCap}
          percentChangeIn24Hour={polygon?.usd24hChange}
          coinLogo="/chainIcon/Polygon.png"
          Iconheight={75}
        />
        <CoinCard
          networkId={"SOL"}
          networkName={"Solana"}
          coinValue={solana?.priceInUSD}
          networkMarketCap={solana?.usdMarketCap}
          percentChangeIn24Hour={solana?.usd24hChange}
          coinLogo="/chainIcon/Solana.png"
          Iconheight={75}
        />
      </GridDisplayBox>
      <ModifiedSlider type="banner" elemList={elemList} />
    </Stack>
  );
};

export default LandingScreen;
