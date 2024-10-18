import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl font-bold tracking-tight text-white">
          MernHolidays.com
        </span>
        <span className="flex font-bold text-white tracking-tight gap-4">
          <p className="cursor-pointer">Privacy Policy </p>
          <p className="cursor-pointer">Terms of Services </p>
        </span>
      </div>
    </div>
  );
};
export default Footer;
