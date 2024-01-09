import NavBar from "./NavBar";

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
            <h1 className="font-whisper text-9xl font-bold p-5 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Elite Drives
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
