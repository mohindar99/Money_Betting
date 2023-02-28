import { Box, CardMedia, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ModifiedStepper from "../stepper/modifiedStepper.component";
import { StyledSlider } from "./modifiedSliderStyled";

interface ModifiedSliderInterface {
  type: "carousel" | "banner";
  elemList: string[];
}

const settings = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const ModifiedSlider = ({ elemList, type }: ModifiedSliderInterface) => {
  elemList = elemList || [];
  const sliderRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleCurrentSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  useEffect(() => {
    if (sliderRef) {
      //@ts-ignore
      sliderRef?.current?.slickGoTo(currentSlideIndex);
    }
  }, [sliderRef, currentSlideIndex]);

  if (elemList.length === 0) return <Typography>empty list</Typography>;

  switch (type) {
    case "carousel":
      return (
        <Stack alignItems={"center"}>
          <Stack
            direction={"row"}
            sx={{
              maxHeight: { xs: "200px", sm: "300px" },
              width: "100%",
              borderRadius: "30px",
              overflow: "hidden",
            }}
          >
            <StyledSlider
              {...settings}
              ref={sliderRef}
              afterChange={(current) => {
                handleCurrentSlide(current);
              }}
            >
              {elemList?.map((item, index) => (
                <Box
                  sx={{
                    maxHeight: "315px",
                    minHeight: "315px",
                    position: "relative",
                  }}
                  key={index + "modifiedSlider"}
                >
                  <Image
                    src="/profilePic/profile1.webp"
                    alt=""
                    fill
                    objectFit="cover"
                    objectPosition="left"
                  />
                </Box>
              ))}
            </StyledSlider>
          </Stack>
          <Box sx={{ marginTop: { xs: "-10px", sm: "-26px" }, zIndex: 5 }}>
            <ModifiedStepper
              selectedItemIndex={currentSlideIndex}
              numberOfElements={elemList?.length}
              handleClick={handleCurrentSlide}
            />
          </Box>
        </Stack>
      );

    default:
      return (
        <Stack alignItems={"center"}>
          <Stack
            direction={"row"}
            sx={{
              background: "red",
              maxHeight: { xs: "200px", sm: "300px" },
              width: "100%",
              borderRadius: "30px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                minHeight: { xs: "200px", sm: "300px" },
                position: "relative",
                width: "100%",
              }}
            >
              <Image
                src="/profilePic/profile1.webp"
                alt=""
                fill
                objectFit="cover"
                objectPosition="left"
              />
            </Box>
          </Stack>
        </Stack>
      );
  }
};

export default ModifiedSlider;
