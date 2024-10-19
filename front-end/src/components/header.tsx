import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full p-4 flex items-center justify-center border-b">
      <Link to="/">
        <p className="text-3xl">StaySafe</p>
      </Link>
    </div>
  );
};

export default Header;
