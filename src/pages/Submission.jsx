import utils from "@/lib/utils.js";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";

function Submission() {
    const location = useLocation();
    const userName =location.state.name || "Anonymous";

  return (
    <div className="bg-zinc-50 h-screen m-2">
        <Header />
        <div className="flex flex-col bg-lime-500 p-10 text-white rounded">
            <h2 className="text-4xl font-bold text-zinc-800">Submission</h2>
            <p className="text-xl text-zinc-700">{userName} has submitted your project</p>
            <a
            className="text-blue-500 underline"
            target="_blank"
            href={utils.entriesUrl}>
                Here
                </a>
            </div>
    </div>
  )
}

export default Submission;