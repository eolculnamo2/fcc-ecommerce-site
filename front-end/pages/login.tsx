import { NextPage } from "next";
import * as React from "react";
import { useForm } from "react-hook-form";
import PrimaryLayout from "../layouts/PrimaryLayout/PrimaryLayout";
import styles from "../styles/login.module.css";



interface LoginFormData {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };
  return (
    <PrimaryLayout title="Admin Login" description="Admin login page">
      <div className={styles.loginFormContainer}>
        <div className={styles.loginForm}>
          <p className={styles.loginFormTitle}>ADMIN</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email..."
              {...register("email", { required: true })}
            />
            {errors.email && <p>Email is invalid</p>}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password..."
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && <p>Password is invalid</p>}
            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Login;
