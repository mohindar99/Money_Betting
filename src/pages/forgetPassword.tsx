import { ForgetPasswordPage } from "@/project/components/organisms/forgetPassword/forgetPassword.component";
import RootLayout from "@/project/layout/root.layout";
import { authAccessDispatchers } from "@/project/reduxToolkit/auth//authSlice";
import { RootState } from "@/project/reduxToolkit/store";
import { Constants, XHR_STATE } from "@/project/utility/constants";
import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ForgetPassword = () => {
  const { forgetPassword } = useSelector(
    (state: RootState) => state?.authSlice
  );
  const router = useRouter();
  const [emailString, setEmailString] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [snackBarSuccessText, setSnackBarSuccessText] = useState<string>("");
  const [snackBarErrorText, setSnackBarErrorText] = useState<string>("");
  const dispatch = useDispatch();

  const handleInput = useCallback((e: any) => {
    setEmailString(e.target.value);
  }, []);

  // dispatch(authAccessDispatcher)
  const handleSendLink = useCallback(() => {
    dispatch(
      // @ts-ignore
      authAccessDispatchers.forgetPassword(emailString, {
        success: (response: any) => {
          return response;
        },
      })
    );
  }, [emailString]);

  useEffect(() => {
    if (forgetPassword.loading === XHR_STATE.IN_PROGRESS) {
      setIsLoading(true);
    }
    if (
      forgetPassword.response !== null &&
      forgetPassword.error === "" &&
      forgetPassword.loading === XHR_STATE.COMPLETE
    ) {
      setIsLoading(false);
      setSnackBarSuccessText(`${forgetPassword.response.message}`);
    } else if (
      forgetPassword.error !== "" &&
      forgetPassword.loading === XHR_STATE.ASLEEP
    ) {
      setIsLoading(false);
      setSnackBarErrorText("Unable to send mail - " + forgetPassword.error);
    }
  }, [forgetPassword]);

  return (
    <RootLayout enableRoot={"deactive"}>
      <Backdrop
        sx={{
          color: (theme) => theme.palette.secondary.main,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <ForgetPasswordPage
        emailString={emailString}
        handleEmailString={handleInput}
        handleSendLink={handleSendLink}
      />
      <Snackbar
        open={Boolean(snackBarErrorText)}
        autoHideDuration={Constants.SNACKBAR_TIME}
        onClose={() => setSnackBarErrorText("")}
      >
        <Alert severity="error">{snackBarErrorText}</Alert>
      </Snackbar>
      <Snackbar
        open={Boolean(snackBarSuccessText)}
        autoHideDuration={Constants.SNACKBAR_TIME}
        onClose={() => setSnackBarSuccessText("")}
      >
        <Alert severity="success">{snackBarSuccessText}</Alert>
      </Snackbar>
    </RootLayout>
  );
};

export default ForgetPassword;
