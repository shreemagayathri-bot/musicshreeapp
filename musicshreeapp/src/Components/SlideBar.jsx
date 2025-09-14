import MusicPlayer from "./MusicPlayer";
import logo from "../assets/logo.jpg";

function SideBar({
  artistId,
  firstOption,
  secondOption,
  handleFirstOption,
  handleSecondOption,
}) {
  return (
    <div className="sidebar-container w-[40%] h-screen flex flex-col">
      <div className="side-bar min-h-[30%] flex flex-col justify-around mx-2 mt-2 bg-gradient-to-r from-pink-300/40 to-pink-200/40 to-pink-100/40 rounded-md">
        <div className="logo-container bg-red-400 flex flex-row justify-around items-center gap-2 mx-4 p-2 rounded-2xl">
          <img className="w-[20%]" src={logo} />
          <img className="w-[20%]" src={logo} />
          <h1 className="logo-title text-4xl text-black">
            ORANGE
            <br />
            MUSIC
          </h1>
        </div>
        <div className="nav-option flex flex-row justify-end mr-11 text-lg uppercase">
          <a
            className="signup-option ml-5 text-black"
            onClick={handleFirstOption}
          >
            {firstOption}
          </a>
          <a
            className="login-option ml-3 text-orange-500"
            onClick={handleSecondOption}
          >
            {secondOption}
          </a>
        </div>
      </div>
      <MusicPlayer artistId={artistId} />
    </div>
  );
}

export default SideBar;