import {Link, useNavigate} from "react-router-dom";

function Error() {
    const navigate = useNavigate();
  return <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold text-zinc-800">This is Error</h1>
    <p className="text-xl text-zinc-700">Internal server error</p>
    <Link className="text-blue-500" to="/">Home</Link>
    <Link className="text-blue-500" to="/submission">Submission</Link>
    <button className="text-blue-500" onClick={() => navigate("/", {state: {from: "/error"}})}>Go Back</button>
  </div>;
}

export default Error;