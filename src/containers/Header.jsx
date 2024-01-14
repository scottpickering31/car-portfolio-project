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
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4 mobile:top-14 mobilelg:top-20 tablet:top-1/5 laptop:top-1/4 desktop:top-1/4">
            <div className="flex flex-col font-whisper items-center font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              <img
                src="src/assets/Diamond.png"
                className="h-1/6 w-1/6 filter drop-shadow-lg"
              />
              <h1 className="mobile:text-4xl laptop:text-9xl">Elite Drives</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
