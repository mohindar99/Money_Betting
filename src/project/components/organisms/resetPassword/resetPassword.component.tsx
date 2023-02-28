import ModifiedInput from "@/project/components/atoms/modifiedInput/modifiedInput.component";
import { authAccessDispatchers } from "@/project/reduxToolkit/auth/authSlice";
import { RootState } from "@/project/reduxToolkit/store";
import { XHR_STATE } from "@/project/utility/constants";
import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Divider,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicModalLayout from "../../molecules/modal/basicModalLayout/basicModalLayout.component";

const ResetPasswordPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const title = "Reset Password";
  const description = "Lorem ipsum dolor, minima quaerat dolores.";
  const { resetPassword } = useSelector((state: RootState) => state?.authSlice);
  const sharedDivider = <Divider sx={{ margin: "10px 0px" }} />;
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [snackBarSuccessText, setSnackBarSuccessText] = useState<string>("");
  const [snackBarErrorText, setSnackBarErrorText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleInput = useCallback(
    (e: any) => {
      setPassword({ ...password, [e.target.name]: e.target.value });
    },
    [password]
  );

  const [newConfirmMatched, setNewConfirmMatched] = useState(false);
  const { resetToken } = router?.query;

  const handleClick = () => {
    if (!resetToken) return;

    if (password.newPassword === password.confirmPassword) {
      dispatch(
        // @ts-ignore
        authAccessDispatchers.resetPassword(resetToken, {
          newPassword: password?.newPassword,
        })
      );

      setTimeout(() => {
        router.push("/");
      }, 2000);
      setNewConfirmMatched(true);
    } else {
      setNewConfirmMatched(false);
    }
  };

  useEffect(() => {
    if (password.newPassword === password.confirmPassword) {
      setNewConfirmMatched(true);
    } else {
      setNewConfirmMatched(false);
    }
  }, [password]);

  useEffect(() => {
    if (resetPassword.loading === XHR_STATE.IN_PROGRESS) {
      setIsLoading(true);
    }
    if (
      resetPassword.response !== null &&
      resetPassword.error === "" &&
      resetPassword.loading === XHR_STATE.COMPLETE
    ) {
      setIsLoading(false);
      setSnackBarSuccessText(`${resetPassword.response.message}`);
    } else if (
      resetPassword.error !== "" &&
      resetPassword.loading === XHR_STATE.ASLEEP
    ) {
      setIsLoading(false);
      setSnackBarErrorText("Unable to send mail - " + resetPassword.error);
    }
  }, [resetPassword]);

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
      <Backdrop
        sx={{
          color: (theme) => theme.palette.secondary.main,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <BasicModalLayout title={title} description={description}>
        {sharedDivider}
        <ModifiedInput
          name="newPassword"
          fieldName="New Password"
          placeholderText="Please Enter Password"
          inputValue={password.newPassword}
          type={"password"}
          handleChangeInputFunc={handleInput}
        />
        {sharedDivider}
        <ModifiedInput
          name="confirmPassword"
          fieldName="Confirm Password"
          placeholderText="Confirm Password"
          inputValue={password.confirmPassword}
          type={"password"}
          handleChangeInputFunc={handleInput}
        />
        {!newConfirmMatched && (
          <Typography
            variant="subtitle1"
            sx={{
              color: "red",
              fontSize: "14px",
              marginTop: "5px !important",
              marginLeft: "15px !important",
            }}
          >
            Password did not match !
          </Typography>
        )}
        {sharedDivider}
        <Button
          sx={{
            marginTop: "20px",
            width: "100%",
            borderRadius: 2,
            backgroundColor: (theme) =>
              `${theme.palette.secondary.main} !important`,
          }}
          onClick={() => handleClick()}
        >
          New Password
        </Button>
        <Snackbar
          open={Boolean(snackBarErrorText)}
          autoHideDuration={2000}
          onClose={() => setSnackBarErrorText("")}
        >
          <Alert severity="error">{snackBarErrorText}</Alert>
        </Snackbar>
        <Snackbar
          open={Boolean(snackBarSuccessText)}
          autoHideDuration={2000}
          onClose={() => setSnackBarSuccessText("")}
        >
          <Alert severity="success">{snackBarSuccessText}</Alert>
        </Snackbar>
      </BasicModalLayout>
    </Stack>
  );
};
export { ResetPasswordPage };
