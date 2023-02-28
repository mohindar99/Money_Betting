import {
  Constants,
  TDispatcherOptions,
  XHR_STATE,
} from "@/project/utility/constants";
import { createSlice } from "@reduxjs/toolkit";
import { authControlApi } from "./authApi";
import { UserType } from "./authTypes";

type authSlice = {
  signUpEmail: {
    response: any;
    loading: XHR_STATE;
    error: string;
  };
  signUpWallet: {
    response: any;
    loading: XHR_STATE;
    error: string;
  };
  loginEmail: {
    response: any;
    loading: XHR_STATE;
    error: string;
  };
  loginWallet: {
    response: any;
    loading: XHR_STATE;
    error: string;
  };
  verifyUsername: {
    response: any;
    loading: XHR_STATE;
    error: string;
  };
  verifyEmail: {
    response: any;
    loading: XHR_STATE;
    error: string;
  };
  forgetPassword: {
    response: any;
    loading: XHR_STATE;
    error: string;
  };
  resetPassword: {
    response: any;
    loading: XHR_STATE;
    error: string;
  };
  userDetails: {
    response: any;
    loading: XHR_STATE;
    error: string;
  };
  logout: {
    response: any;
    loading: XHR_STATE;
    error: string;
  };
};

const initialState: authSlice = {
  signUpEmail: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  signUpWallet: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  loginEmail: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  loginWallet: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  verifyUsername: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  verifyEmail: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  forgetPassword: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  resetPassword: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  userDetails: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
  logout: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    // Sign up with Email....
    signUpEmailStart: (state, action) => {
      state.signUpEmail.loading = XHR_STATE.IN_PROGRESS;
      state.signUpEmail.error = "";
    },
    signUpEmailSuccess: (state, action) => {
      state.signUpEmail.loading = XHR_STATE.COMPLETE;
      state.signUpEmail.response = action.payload;
    },
    signUpEmailError: (state, action) => {
      state.signUpEmail.loading = XHR_STATE.ASLEEP;
      state.signUpEmail.error =
        action.payload && action.payload.message
          ? `${action.payload.message} 😵`
          : Constants.DEFAULT_ERROR_TEXT;

      console.log({ errorMessaege: action.payload });
    },

    //Sign up wallet....
    signUpWalletStart: (state, action) => {
      state.signUpWallet.loading = XHR_STATE.IN_PROGRESS;
      state.signUpWallet.error = "";
    },
    signUpWalletSuccess: (state, action) => {
      state.signUpWallet.loading = XHR_STATE.COMPLETE;
      state.signUpWallet.response = action.payload;
    },
    signUpWalletError: (state, action) => {
      state.signUpWallet.loading = XHR_STATE.ASLEEP;
      state.signUpWallet.error =
        action.payload && action.payload.message
          ? `${action.payload.message} 😵`
          : Constants.DEFAULT_ERROR_TEXT;
    },

    //Login with email.....
    logInEmailStart: (state, action) => {
      state.loginEmail.loading = XHR_STATE.IN_PROGRESS;
      state.loginEmail.error = "";
    },
    logInEmailSuccess: (state, action) => {
      state.loginEmail.loading = XHR_STATE.COMPLETE;
      state.loginEmail.response = action.payload;
    },
    logInEmailError: (state, action) => {
      state.loginEmail.loading = XHR_STATE.ASLEEP;
      state.loginEmail.error =
        action.payload && action.payload.message
          ? `${action.payload.message} 😵`
          : Constants.DEFAULT_ERROR_TEXT;
    },

    //Login with wallet.....
    logInWalletStart: (state, action) => {
      state.loginEmail.loading = XHR_STATE.IN_PROGRESS;
      state.loginEmail.error = "";
    },
    logInWalletSuccess: (state, action) => {
      state.loginEmail.loading = XHR_STATE.COMPLETE;
      state.loginEmail.response = action.payload;
    },
    logInWalletError: (state, action) => {
      state.loginEmail.loading = XHR_STATE.ASLEEP;
      state.loginEmail.error =
        action.payload && action.payload.message
          ? `${action.payload.message} 😵`
          : Constants.DEFAULT_ERROR_TEXT;
    },

    //Verify username.......
    verifyUsernameStart: (state, action) => {
      state.verifyUsername.loading = XHR_STATE.IN_PROGRESS;
      state.verifyUsername.error = "";
    },
    verifyUsernameSuccess: (state, action) => {
      state.verifyUsername.loading = XHR_STATE.COMPLETE;
      state.verifyUsername.response = action.payload;
    },
    verifyUsernameError: (state, action) => {
      state.verifyUsername.loading = XHR_STATE.ASLEEP;
      state.verifyUsername.error =
        action.payload && action.payload.message
          ? `${action.payload.message} 😵`
          : Constants.DEFAULT_ERROR_TEXT;
    },

    //Verify email .....
    verifyEmailStart: (state, action) => {
      state.verifyEmail.loading = XHR_STATE.IN_PROGRESS;
      state.verifyEmail.error = "";
    },
    verifyEmailSuccess: (state, action) => {
      state.verifyEmail.loading = XHR_STATE.COMPLETE;
      state.verifyEmail.response = action.payload;
    },
    verifyEmailError: (state, action) => {
      state.verifyEmail.loading = XHR_STATE.ASLEEP;
      state.verifyEmail.error =
        action.payload && action.payload.message
          ? `${action.payload.message} 😵`
          : Constants.DEFAULT_ERROR_TEXT;
    },

    //Forget password....
    forgetPassowrdStart: (state, action) => {
      state.forgetPassword.loading = XHR_STATE.IN_PROGRESS;
      state.forgetPassword.error = "";
    },
    forgetPasswordSuccess: (state, action) => {
      state.forgetPassword.loading = XHR_STATE.COMPLETE;
      state.forgetPassword.response = action.payload;
    },
    forgetPasswordError: (state, action) => {
      state.forgetPassword.loading = XHR_STATE.ASLEEP;
      state.forgetPassword.error =
        action.payload && action.payload.message
          ? `${action.payload.message} 😵`
          : Constants.DEFAULT_ERROR_TEXT;
    },

    //Reset password.....
    resetPassowrdStart: (state, action) => {
      state.resetPassword.loading = XHR_STATE.IN_PROGRESS;
      state.resetPassword.error = "";
    },
    resetPasswordSuccess: (state, action) => {
      state.resetPassword.loading = XHR_STATE.COMPLETE;
      state.resetPassword.response = action.payload;
    },
    resetPasswordError: (state, action) => {
      state.resetPassword.loading = XHR_STATE.ASLEEP;
      state.resetPassword.error =
        action.payload && action.payload.message
          ? `${action.payload.message} 😵`
          : Constants.DEFAULT_ERROR_TEXT;
    },

    //Reset password.....
    userDetailsStart: (state, action) => {
      state.resetPassword.loading = XHR_STATE.IN_PROGRESS;
      state.resetPassword.error = "";
    },
    userDetialsSuccess: (state, action) => {
      state.resetPassword.loading = XHR_STATE.COMPLETE;
      state.resetPassword.response = action.payload;
    },
    userDetailsError: (state, action) => {
      state.resetPassword.loading = XHR_STATE.ASLEEP;
      state.resetPassword.error =
        action.payload && action.payload.message
          ? `${action.payload.message} 😵`
          : Constants.DEFAULT_ERROR_TEXT;
    },
    logoutStart: (state, action) => {
      state.logout.loading = XHR_STATE.IN_PROGRESS;
      state.logout.error = "";
    },
    logoutSuccess: (state, action) => {
      state.logout.loading = XHR_STATE.COMPLETE;
      state.logout.response = action.payload;
    },
    logoutError: (state, action) => {
      state.logout.loading = XHR_STATE.ASLEEP;
      state.logout.error =
        action.payload && action.payload.message
          ? `${action.payload.message} 😵`
          : Constants.DEFAULT_ERROR_TEXT;
    },
    resetLogin: (state) => {
      state.loginEmail.response = null;
      state.loginEmail.loading = XHR_STATE.ASLEEP;
      state.loginEmail.error = "";

      state.loginWallet.response = null;
      state.loginWallet.loading = XHR_STATE.ASLEEP;
      state.loginWallet.error = "";
    },

    resetSignUp: (state) => {
      state.signUpEmail.response = null;
      state.signUpEmail.loading = XHR_STATE.ASLEEP;
      state.signUpEmail.error = "";

      state.signUpWallet.response = null;
      state.signUpWallet.loading = XHR_STATE.ASLEEP;
      state.signUpWallet.error = "";
    },
  },
});

export const authAccessDispatchers = {
  signupWithEmail:
    (signupDTo: any, options?: TDispatcherOptions) => async (dispatch: any) => {
      try {
        dispatch(signUpEmailStart(signupDTo));
        const response = await authControlApi.signupEmail(signupDTo);
        dispatch(signUpEmailSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response\n", (error as any).response);
        dispatch(
          signUpEmailError(
            ((error as any).response && (error as any).response.data) || null
          )
        );
        if (options && options.error) options.error();
      }
    },
  signupWithWallet:
    (signupDTo: any, options?: TDispatcherOptions) => async (dispatch: any) => {
      try {
        dispatch(signUpWalletStart(signupDTo));
        const response = await authControlApi.signupWallet(signupDTo);
        dispatch(signUpWalletSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response\n", (error as any).response);
        dispatch(
          signUpWalletError(
            ((error as any).response && (error as any).response.data) || null
          )
        );
        if (options && options.error) options.error();
      }
    },
  loginWithEmail:
    (signupDTo: any, options?: TDispatcherOptions) => async (dispatch: any) => {
      try {
        dispatch(logInEmailStart(signupDTo));
        const response = await authControlApi.loginEmail(signupDTo);
        dispatch(logInEmailSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response\n", (error as any).response);
        dispatch(
          logInEmailError(
            ((error as any).response && (error as any).response.data) || null
          )
        );
        if (options && options.error) options.error();
      }
    },
  loginWithWallet:
    (signupDTo: any, options?: TDispatcherOptions) => async (dispatch: any) => {
      try {
        dispatch(logInWalletStart(signupDTo));
        const response = await authControlApi.loginWallet(signupDTo);
        dispatch(logInWalletSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response\n", (error as any).response);
        dispatch(
          logInWalletError(
            ((error as any).response && (error as any).response.data) || null
          )
        );
        if (options && options.error) options.error();
      }
    },
  verifyUsername:
    (usernameDTo: string, options?: TDispatcherOptions) =>
    async (dispatch: any) => {
      try {
        dispatch(verifyUsernameStart(usernameDTo));
        const response = await authControlApi.verifyUsername(usernameDTo);
        dispatch(verifyUsernameSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response\n", (error as any).response);
        dispatch(
          verifyUsernameError(
            ((error as any).response && (error as any).response.data) || null
          )
        );
        if (options && options.error) options.error();
      }
    },
  verifyEmail:
    (token: string, options?: TDispatcherOptions) => async (dispatch: any) => {
      try {
        dispatch(verifyEmailStart(token));
        const response = await authControlApi.verifyEmail(token);
        dispatch(verifyEmailSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response\n", (error as any).response);
        dispatch(
          verifyEmailError(
            ((error as any).response && (error as any).response.data) || null
          )
        );
        if (options && options.error) options.error();
      }
    },
  forgetPassword:
    (email: string, options?: TDispatcherOptions) => async (dispatch: any) => {
      try {
        dispatch(forgetPassowrdStart(email));
        const response = await authControlApi.forgetPassword(email);
        dispatch(forgetPasswordSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response\n", (error as any).response);
        dispatch(
          forgetPasswordError(
            ((error as any).response && (error as any).response.data) || null
          )
        );
        if (options && options.error) options.error();
      }
    },
  resetPassword:
    (token: string, resetDto: any, options?: TDispatcherOptions) =>
    async (dispatch: any) => {
      try {
        dispatch(resetPassowrdStart(token));
        const response = await authControlApi.resetPassword(resetDto, token);
        dispatch(resetPasswordSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response\n", (error as any).response);
        dispatch(
          resetPasswordError(
            ((error as any).response && (error as any).response.data) || null
          )
        );
        if (options && options.error) options.error();
      }
    },
  userDetails:
    (id: string, options?: TDispatcherOptions) => async (dispatch: any) => {
      try {
        dispatch(userDetailsStart(id));
        const response = await authControlApi.userDetails(id);
        dispatch(userDetialsSuccess(response));
        if (options && options.success) options.success(response);
      } catch (error) {
        console.error("error.response\n", (error as any).response);
        dispatch(
          userDetailsError(
            ((error as any).response && (error as any).response.data) || null
          )
        );
        if (options && options.error) options.error();
      }
    },
  logout: (options?: TDispatcherOptions) => async (dispatch: any) => {
    try {
      dispatch(logoutStart("id"));
      const response = await authControlApi.logout();
      dispatch(logoutSuccess(response));
      if (options && options.success) options.success(response);
    } catch (error) {
      console.error("error.response\n", (error as any).response);
      dispatch(
        logoutError(
          ((error as any).response && (error as any).response.data) || null
        )
      );
      if (options && options.error) options.error();
    }
  },
};

export const {
  signUpEmailStart,
  signUpEmailSuccess,
  signUpEmailError,
  signUpWalletStart,
  signUpWalletSuccess,
  signUpWalletError,
  logInEmailStart,
  logInEmailSuccess,
  logInEmailError,
  logInWalletStart,
  logInWalletSuccess,
  logInWalletError,
  verifyEmailStart,
  verifyEmailSuccess,
  verifyEmailError,
  verifyUsernameStart,
  verifyUsernameSuccess,
  verifyUsernameError,
  forgetPassowrdStart,
  forgetPasswordSuccess,
  forgetPasswordError,
  resetPassowrdStart,
  resetPasswordSuccess,
  resetPasswordError,
  userDetailsStart,
  userDetialsSuccess,
  userDetailsError,
  logoutStart,
  logoutError,
  logoutSuccess,
  resetLogin,
  resetSignUp
} = authSlice.actions;

export default authSlice.reducer;
