import AuthScreen from "@/project/components/organisms/authScreen.component";
import RootLayout from "@/project/layout/root.layout";

const Login = () => {
  return (
    <RootLayout enableRoot={"deactive"}>
      <AuthScreen />
    </RootLayout>
  );
};

export default Login;
