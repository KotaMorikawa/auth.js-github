import ButtonList from "@/components/ButtonList";
import LoginRequired from "@/components/LoginRequired";
import { NextPage } from "next";

const Home: NextPage = async () => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <ButtonList />
      <LoginRequired>
        <p className="mt-10">status: Logined</p>
      </LoginRequired>
    </div>
  );
};

export default Home;
