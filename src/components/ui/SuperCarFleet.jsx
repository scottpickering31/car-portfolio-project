function SuperCarFleet() {
  return (
    <div className="z-10 flex justify-center items-center relative">
      <img src="src/assets/SupercarFleet.jpg" />
      <div className="absolute text-white flex flex-col items-center gap-5 bg-black/50 p-10 rounded-lg ">
        <p>Check out our Super Car Fleet</p>
        <button className="border border-bronze text-bronze  p-2 h-40 rounded-lg">
          Click for seeing
        </button>
      </div>
    </div>
  );
}

export default SuperCarFleet;
