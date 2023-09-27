import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <img className="mx-auto w-[700px]" src="/assets/404-error.jpg" alt="" />
      <Link className="underline text-purple-700 w-[700px] ml-16 text-2xl text-center" to="/">back to homepage</Link>
    </div>
  );
};

export default ErrorPage;