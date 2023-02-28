import { Button, Stack } from "@mui/material";
import BasicModalLayout from "../basicModalLayout/basicModalLayout.component";

const sharedStyle = {
  padding: "2px",
  fontSize: "13px",
  fontWeight: 600,
  minWidth: "100px",
  width: "100%",
  borderRadius: "4px",
};

interface LogoutModalInterface {
  yesFunc?: () => void;
  noFunc?: () => void;
  crossFunc?: () => void;
}

const YesNoModal = ({ yesFunc, noFunc, crossFunc }: LogoutModalInterface) => {
  const title = "Logout";
  const description = "Lorem ipsum dolor, minima quaerat dolores.";

  return (
    <BasicModalLayout
      title={title}
      description={description}
      crossFunc={crossFunc}
    >
      <Stack
        spacing={2}
        direction={"column"}
        sx={{
          width: "100%",
          minWidth: { xs: "100px", sm: "200px", md: "300px" },
        }}
      >
        <Button
          sx={{
            ...sharedStyle,
            backgroundColor: "secondary.main",
            color: (theme) => theme.palette.common.white,
          }}
          variant="contained"
          onClick={yesFunc}
        >
          Yes
        </Button>
        <Button
          sx={{
            ...sharedStyle,
            border: (theme) =>
              `1px solid ${theme.palette.secondary.main} !important`,
            color: (theme) => theme.palette.text.primary,
            backgroundColor: "transparent !important",
          }}
          variant="outlined"
          onClick={noFunc}
        >
          No
        </Button>
      </Stack>
    </BasicModalLayout>
  );
};

export default YesNoModal;
