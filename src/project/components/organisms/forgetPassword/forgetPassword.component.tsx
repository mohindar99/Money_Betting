import ModifiedInput from "@/project/components/atoms/modifiedInput/modifiedInput.component";
import { Button, Divider, Stack } from "@mui/material";
import React, { useState } from "react";
import BasicModalLayout from "../../molecules/modal/basicModalLayout/basicModalLayout.component";
import ModifiedModal from "../../molecules/modal/modifiedModal.component";
import { CustomModalBox } from "../../molecules/modal/modifiedModalStyled";

interface ForgerPasswordModalInterface {
  emailString?: string;
  handleEmailString?: (e: any) => void;
  handleSendLink?: () => void;
}

const ForgetPasswordPage = ({
  emailString,
  handleEmailString,
  handleSendLink
}: ForgerPasswordModalInterface) => {
  const title = "Forgot Password";
  const description = "Lorem ipsum dolor, minima quaerat dolores.";
  const sharedDivider = <Divider sx={{ margin: "4px 0px" }} />;
  // const [emailString, setEmailString] = useState("");

  // const handleInput = (e: any) => {
  //   setEmailString(e.target.value);
  // };

  return (
    <Stack
      sx={{
        padding: "40px 30px",
        margin: "auto",
        backgroundColor: (theme) => theme.palette.primary.main,
        minWidth: { xs: "100%", sm: "450px" },
        overflow: "hidden",
        borderRadius: "20px",
      }}
    >
      <BasicModalLayout title={title} description={description}>
        {sharedDivider}
        <ModifiedInput
          fieldName="Enter Email Address"
          placeholderText="Gauran_7056@gmail.com"
          inputValue={emailString}
          handleChangeInputFunc={handleEmailString}
        />
        {sharedDivider}
        <Button
          sx={{
            marginTop: "20px",
            width: "100%",
            borderRadius: 2,
            backgroundColor: (theme) =>
              `${theme.palette.secondary.main} !important`,
          }}

          onClick={handleSendLink}
        >
          Send Mail
        </Button>
      </BasicModalLayout>
    </Stack>
  );
};

export { ForgetPasswordPage };
