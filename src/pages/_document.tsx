import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@mui/material";

export default function Document() {
  return (
    <Html lang="en" style={{ overflow: "hidden", height: "100%" }}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <body style={{ height: "100%", overflow: "auto" }}>
        {/* MUI recommended way to remove default styling just like normalise.css */}
        <CssBaseline />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
