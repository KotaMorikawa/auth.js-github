import Link from "next/link";

const ButtonList = () => {
  return (
    <div className="flex justify-between w-1/5">
      <Link className="border p-3" href="/sub1">
        sub1
      </Link>
      <Link className="border p-3" href="/sub2">
        sub2
      </Link>
    </div>
  );
};

export default ButtonList;
