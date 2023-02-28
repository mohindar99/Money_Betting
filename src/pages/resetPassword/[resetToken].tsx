import { ResetPasswordPage } from "@/project/components/organisms/resetPassword/resetPassword.component";
import RootLayout from "@/project/layout/root.layout";
import { useRouter } from "next/router";

const ResetToken = () => {
  return (
    <RootLayout enableRoot={"deactive"}>
      <ResetPasswordPage />
    </RootLayout>
  );
};

export default ResetToken;
