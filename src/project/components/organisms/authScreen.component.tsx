/* eslint-disable react-hooks/exhaustive-deps */
import {
  authAccessDispatchers,
  resetLogin,
} from "@/project/reduxToolkit/auth/authSlice";
import { RootState } from "@/project/reduxToolkit/store";
import { Constants, XHR_STATE } from "@/project/utility/constants";
import { inputFieldValidator } from "@/project/utility/functions/inputFieldValidator";
import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Link,
  Snackbar,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModifiedInput from "../atoms/modifiedInput/modifiedInput.component";
import AuthCard from "../molecules/authCard/authCard.component";

const messageString = "User Successfully added with - Username";
interface FormDetailsInterface {
  [key: string]: string;
}
const AuthScreen = () => {
  const [formDetails, setFormDetails] = useState<FormDetailsInterface>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const [emailValidated, setEmailValidated] = useState<boolean>(false);
  const [emailValidationData, setEmailValidationData] = useState<object>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { loginEmail } = useSelector((state: RootState) => state?.authSlice);
  const [snackBarSuccessText, setSnackBarSuccessText] = useState<string>("");
  const [snackBarErrorText, setSnackBarErrorText] = useState<string>("");
  const [connectorList, setConnectorList] = useState<any>(null);

  const title = "Login";
  const description =
    "Login description loren ipsum dolor/ sit amet, consetetur asdfasf asfs fasklas jask";

  const handleInput = useCallback(
    async (e: any) => {
      const { name, value } = e.target;
      let data = { ...formDetails, [name]: value };
      setFormDetails(data);
    },

    [formDetails]
  );

  useEffect(() => {
    if (loginEmail.loading === XHR_STATE.IN_PROGRESS) {
      setIsLoading(true);
    }
    if (
      loginEmail.response !== null &&
      loginEmail.error === "" &&
      loginEmail.loading === XHR_STATE.COMPLETE
    ) {
      setIsLoading(false);
      setSnackBarSuccessText(
        `Login successful with username - "${loginEmail.response.user.username}`
      );
      dispatch(resetLogin());
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else if (
      loginEmail.error !== "" &&
      loginEmail.loading === XHR_STATE.ASLEEP
    ) {
      setIsLoading(false);
      setSnackBarErrorText("Could not register request - " + loginEmail.error);
    }
  }, [loginEmail]);

  useEffect(() => {
    const validationData = inputFieldValidator({
      fieldType: "email",
      inputString: formDetails.email,
    });

    if (validationData) {
      setEmailValidationData(validationData);
      if (
        validationData.allFields.length ===
        validationData.passedFieldIndexes?.length
      ) {
        setEmailValidated(true);
      } else {
        setEmailValidated(false);
      }
    }
  }, [formDetails.email]);

  const handleLogin = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { email, password, rememberMe: remember }: any = formDetails;
    let userObj: any = {
      email,
      password,
      remember,
    };
    dispatch(
      // @ts-ignore
      authAccessDispatchers.loginWithEmail(userObj, {
        success: (response: any) => {
          return response;
        },
      })
    );
  };

  return (
    <Stack>
      <Backdrop
        sx={{
          color: (theme) => theme.palette.secondary.main,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <AuthCard
        title={title}
        description={description}
        userName={formDetails.username}
        connectorList={connectorList}
      >
        <>
          <Stack
            spacing={3}
            sx={{
              width: "100%",
              marginTop: "15px",
              marginBottom: "10px",
            }}
          >
            <ModifiedInput
              name={"email"}
              fieldName="Enter Email Id"
              validationFields={emailValidationData}
              check={emailValidated ? "right" : "wrong"}
              inputValue={formDetails?.email}
              handleChangeInputFunc={(e: any) => handleInput(e)}
              placeholderText={Constants.INPUT_FIELD_PLACEHOLDER_EMAIL}
            />
            <ModifiedInput
              name={"password"}
              fieldName="Enter Password"
              inputValue={formDetails?.password}
              handleChangeInputFunc={(e: any) => handleInput(e)}
              type="password"
            />
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            width={"100%"}
            sx={{ margin: "15px 0px" }}
          >
            <Link
              variant="caption"
              fontWeight={600}
              sx={{
                color: (theme) => theme.palette.secondary.main,
                cursor: "pointer",
              }}
              onClick={() => {
                router.push("/forgetPassword");
              }}
            >
              Forget Password ?
            </Link>
          </Stack>
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontSize: 12,
              borderRadius: "10px",
              margin: "10px",
              backgroundColor: (theme) => theme.palette.secondary.main,
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.common.white
                  : theme.palette.common.white,
            }}
            onClick={(e: React.MouseEvent<HTMLElement>) => handleLogin(e)}
          >
            Login
          </Button>
        </>
      </AuthCard>
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
    </Stack>
  );
};

export default AuthScreen;
