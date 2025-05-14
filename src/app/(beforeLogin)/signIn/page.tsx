import { signInGoogle } from "./actions";

const SignInPage = () => {
  return (
    <form>
      <button formAction={signInGoogle}>구글로 로그인</button>
    </form>
  );
};

export default SignInPage;
