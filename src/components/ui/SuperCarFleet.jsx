function SuperCarFleet() {
  const handleDiscoverClick = () => {
    const carPickerFormSection = document.getElementById(
      "carPickerFormSection"
    );
    if (carPickerFormSection) {
      carPickerFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="z-10 flex justify-start items-center relative font-genos">
      <img src="src/assets/SupercarFleet.jpg" alt="Supercar Fleet" />
      <div className="text-lg text-center desktop:bg-customBrown/90 absolute text-white flex flex-col items-center gap-5 rounded-lg transform mobile:p-2 mobile:text-sm mobile:w-full mobile:h-full mobile:bg-customBrown/50 mobile:left-1/2 mobile:overflow-auto mobile:-translate-x-1/2 desktop:left-1/3 desktop:text-lg desktop:overflow-hidden desktop:h-full desktop:w-1/3 desktop:-translate-x-1/2 desktop:p-10 ">
        <p>
          As the leading supercar destination in Europe, we proudly stand as the
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
        <button
          className="border-2 border-bronze text-bronze p-3 rounded-full font-bold font-roboto tracking-wider hover:bg-customOrange-lighter hover:text-white"
          onClick={handleDiscoverClick}
        >
          DISCOVER
        </button>
      </div>
    </div>
  );
}

export default SuperCarFleet;
