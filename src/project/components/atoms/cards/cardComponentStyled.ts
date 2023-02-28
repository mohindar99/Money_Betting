import { Avatar } from "@mui/material";
import { styled } from "@mui/system";

const AvatarStyled = styled(Avatar)(({ theme }) => {
  const sharedDimension = "46px";
  return {
    borderRadius: "7px",
    width: sharedDimension,
    height: sharedDimension,
  };
});

export { AvatarStyled };
