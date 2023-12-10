import NavBarDropDown from "../components/NavBar";

function Header() {
  return (
    <div>
      <div className="flex justify-end">
        <NavBarDropDown />
      </div>
      <div className="flex flex-grow text-center h-96 items-center justify-center">
        <h1 className="font-whisper text-9xl border-solid border-2 p-5">
          Elite Drives
        </h1>
      </div>
    </div>
  );
}

export default Header;
