import Link from "next/link";

const Home = () => {
  return (
    <div>
      안녕하세요
      <Link href={"./signup"}>회원가입으로 이동</Link>
    </div>
  );
};

export default Home;
