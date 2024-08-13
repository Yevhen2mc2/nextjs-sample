"use client";
import LoginForm from "@/components/auth/login-form";
import CreateAccountForm from "@/components/auth/create-account-form";
import Tabs from "@/components/shared/tabs";

const Auth = () => {
  return (
    <section className={"mx-auto mt-10 max-w-96"}>
      <Tabs
        tabs={[
          { title: "Login", element: <LoginForm /> },
          { title: "Create Account", element: <CreateAccountForm /> },
        ]}
      />
    </section>
  );
};
export default Auth;
