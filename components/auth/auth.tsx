import LoginForm from "@/components/auth/login-form";
import CreateAccountForm from "@/components/auth/create-account-form";
import Tabs from "@/components/shared/tabs";
import { Session } from "next-auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProps {
  session: Session | null;
}

const Auth = ({ session }: IProps) => {
  return (
    <section className={"mx-auto mt-10 max-w-96 px-2"}>
      {session ? (
        <div className={"text-center"}>
          <span>Welcome,</span>
          <span className={"ml-2 font-medium text-sky-800"}>
            {session.user?.email}
          </span>
        </div>
      ) : (
        <Tabs
          tabs={[
            { title: "Login", element: <LoginForm /> },
            { title: "Create Account", element: <CreateAccountForm /> },
          ]}
        />
      )}

      <ToastContainer />
    </section>
  );
};
export default Auth;
