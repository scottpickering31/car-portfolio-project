import NavBar from "./NavBar";
import "../index.css";

function Header() {
  return (
    <div>
      <div className="flex justify-end bg-white">
        <NavBar />
      </div>
      <div className="w-full">
        <div>
          <video
            src="src/assets/BackgroundVideo/BgVideos.mp4"
            autoPlay
            loop
            muted
            className="w-full object-cover"
          />
          <div className="absolute top-1/4 left-1/3">
            <div className="flex flex-col font-whisper items-center text-9xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              <img src="src/assets/Diamond.png" className="h-1/6 w-1/6" />
              <h1>Elite Drives</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
