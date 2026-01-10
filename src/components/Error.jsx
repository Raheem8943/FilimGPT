import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <h2 className="text-3xl font-semibold mb-6">Something went wrong!</h2>
        <h3 className="text-2xl mb-8 text-gray-300">
          {err?.status || "Error"}: {err?.statusText || "Page not found"}
        </h3>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or an error occurred.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-red-600 rounded text-white font-bold hover:bg-red-700 transition"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};
export default Error;
