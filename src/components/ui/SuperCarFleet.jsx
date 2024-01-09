function SuperCarFleet() {
  return (
    <div className="z-10 flex justify-start items-center relative font-genos">
      <img src="src/assets/SupercarFleet.jpg" alt="Supercar Fleet" />
      <div className="text-lg h-11/12 w-1/3 text-center opacity-90 absolute text-white flex flex-col items-center gap-5 bg-customBrown p-10 rounded-lg left-1/3 transform -translate-x-1/2">
        <p>
          As the leading supercar destination in the UK, we proudly stand as the
          only company in the region, if not the world, offering a 24/7 on-road
          concierge service with every rental. Setting ourselves apart with
          unparalleled dedication to your journey, we ensure a seamless driving
          experience unlike any other.
        </p>
        <p>
          From immediate roadside assistance to personalized route guidance, our
          commitment to exceptional service knows no bounds. Experience the
          pinnacle of luxury and reliability with us, making your supercar
          rental an unforgettable, worry-free adventure.
        </p>
        <button className="border-2 border-bronze text-bronze p-3 rounded-full font-bold font-roboto tracking-wider hover:bg-customOrange-lighter hover:text-white ">
          DISCOVER
        </button>
      </div>
    </div>
  );
}

export default SuperCarFleet;
