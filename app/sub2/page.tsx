import LoginRequired from "@/components/LoginRequired";

const sub2 = () => {
  return (
    <LoginRequired>
      <div>sub2(Required Login)</div>
    </LoginRequired>
  );
};

export default sub2;
