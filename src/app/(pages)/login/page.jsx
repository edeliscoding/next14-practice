"use client";

import { login } from "@/lib/action";
import styles from "./login.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={formAction}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login</button>
          {state?.error}
          <Link href="/register">
            {"Don't have an account?"} <b>Register</b>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
