import { signInGoogle, signInKaKao } from "./actions";

const SignInPage = () => {
  return (
    <form>
      <button formAction={signInGoogle}>구글로 로그인</button>
      <button formAction={signInKaKao}>카카오로 로그인</button>
    </form>
  );
};

export default SignInPage;
