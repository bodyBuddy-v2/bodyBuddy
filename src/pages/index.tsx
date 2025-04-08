import Link from "next/link";

const Home = () => {
  return (
    <div>
      안녕하세요
      <Link href={"/main"}>메인으로 이동</Link>
    </div>
  );
};

export default Home;
