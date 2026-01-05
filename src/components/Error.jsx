import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <h2 className="text-2xl mt-4">Something went wrong!!</h2>
      <h3 className="text-xl mt-4">
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};
export default Error;
