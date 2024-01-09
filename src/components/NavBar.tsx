import question from "../assets/question.png";
import search from "../assets/search.png";
import chat from "../assets/chat.png";
import down from "../assets/down.png";

const NavBar = () => {
  return (
    <div className="flex justify-between p-1 bg-white">
      <div className="flex items-center">
        <div className="m-2 font-medium text-gray-700 text-sm">Payments</div>
        <div className="m-2 text-black flex items-center">
          <img src={question} className="h-4 m-2" alt="" />
          <button
            onClick={() => alert("Even I dont know")}
            className="text-xs text-gray-500"
          >
            How it works
          </button>
        </div>
      </div>
      <label className="relative flex items-center w-2/6">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <img className="h-5 w-5" src={search} alt="" />
        </span>
        <input
          className=" placeholder:text-slate-700 block bg-[#F2F2F2] w-full border rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm"
          placeholder="Search features, tutorials, etc."
          type="text"
          name="search"
        />
      </label>
      <div className="flex items-center m-1">
        <div onClick={() => alert('Contacting YOu')} className="bg-[#E6E6E6] rounded-full p-2 m-1">
          <img src={chat} className="h-5" alt="" />
        </div>
        <div
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth"
            })
          }
          className="bg-[#E6E6E6] rounded-full p-2 m-1"
        >
          <img src={down} className="h-5" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
