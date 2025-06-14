import Link from "next/link";

import { createClient } from "@/shared/lib/supabase/server";

const Home = () => {
  const supabase = createClient();

  return (
    <div>
      안녕하세요
      <div>
        <Link href={"/main"}>메인으로 이동</Link>
      </div>
      <div>
        <Link href={"/signUp/user"}>회원가입 이동</Link>
      </div>
    </div>
  );
};

export default Home;
