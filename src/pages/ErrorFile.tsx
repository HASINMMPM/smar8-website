
import { useNavigate } from "react-router-dom";

const ErrorFile = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center pt-24">
      <h1 className="text-4xl font-bold text-green-900 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg mb-6">
        Oops! You are on Wrong way. The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="cursor-pointer bg-green-900  text-white font-bold py-2 px-4 rounded"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorFile;