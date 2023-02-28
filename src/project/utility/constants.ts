// Contains reusable string and value.
export const URL_PART_APP_ID = ":appId";
export const URL_PART_STRING = ":string";

export enum XHR_STATE {
  ASLEEP,
  IN_PROGRESS,
  COMPLETE, // todo deprecrate COMPLETE. Use ASLEEP instead.
}

export enum statusEnum {
  active = "active",
  inactive = "inactive",
}

export type TDispatcherOptions = {
  success?: Function;
  error?: Function;
};

const Constants = {
  DEFAULT_ERROR_TEXT : "Something went wrong. Please try again. 😵",
  Api: {
    auth: {
      signupWithEmail: `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/signUpEmail`,
      verifyUsername: `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/verifyUsername/:username`,
      verifyEmail: `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/verifyEmail/:token`,
      loginWithEmail: `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/admin/loginAdmin`,
      signupWithWallet: `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/signUpWallet`,
      loginWithWallet: `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/loginWithWallet`,
      forgetPassword: `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/forgotPassword/:email`,
      resetPassword: `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/resetPassword/:token`,
      getUserDetails: `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/auth/userDetails/:id`,
    },
  },
  SNACKBAR_TIME: 2500,
  INPUT_FIELD_PLACEHOLDER_USERNAME: "john_doe",
  INPUT_FIELD_PLACEHOLDER_EMAIL: "john_doe@gmail.com",
};

export { Constants };
