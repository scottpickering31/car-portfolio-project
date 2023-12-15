import NavBar from "../components/NavBar";

function Header({ resetBasket, basketCount }) {
  return (
    <div>
      <div className="flex justify-end">
        <NavBar resetBasket={resetBasket} basketCount={basketCount} />
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
