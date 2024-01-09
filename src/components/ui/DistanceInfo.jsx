import GoogleMapsApi from "./GoogleMapsApi";

function DistanceInfo() {
  const benefitsDetails = {
    worldwide: {
      item: "Europe-wide Shipping",
      logo: "src/assets/FontAwesome/truck-fast-solid.svg",
    },
    mileage: {
      item: "Incredible Mileage Cover",
      logo: "src/assets/FontAwesome/gas-pump-solid.svg",
    },
    pickup: {
      item: "Free Pickup up to 400 miles",
      logo: "src/assets/FontAwesome/road-circle-check-solid.svg",
    },
    concierge: {
      item: "Personal Concierge Service",
      logo: "src/assets/FontAwesome/person-military-to-person-solid.svg",
    },
    insurance: {
      item: "Full Insurance Coverage",
      logo: "src/assets/FontAwesome/car-burst-solid.svg",
    },
    roadside: {
      item: "Complete Roadside Assistance",
      logo: "src/assets/FontAwesome/handshake-angle-solid.svg",
    },
    support: {
      item: "24/7 Customer Support",
      logo: "src/assets/FontAwesome/headset-solid.svg",
    },
  };

  return (
    <div className="h-medium flex flex-row justify-center items-center gap-10 font-genos w-full p-5">
      <div className="w-4/6 h-5/6 relative">
        <p className="w-5/6 absolute top-0 left-1/2 text-xl transform -translate-x-1/2 z-10 bg-white p-5 text-center rounded-b-lg">
          Free Supercar Pickup to locations within a 400 mile radius of Rental
          locations such as <strong>London, Paris, Berlin</strong> and{" "}
          <strong>Rome</strong>
        </p>
        <GoogleMapsApi />
      </div>
      <div className="w-4/6 h-5/6">
        <ol className="h-full flex flex-col justify-around w-full text-3xl bg-gray-50">
          {Object.keys(benefitsDetails).map((key) => {
            const { item, logo } = benefitsDetails[key];
            return (
              <div
                key={key}
                className="flex flex-row h-1/3 justify-center pl-20 items-center cursor-pointer hover:bg-gray-500"
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("li").style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("li").style.color = "black";
                }}
              >
                <img src={logo} alt={item} className="h-8 w-8 mr-2" />
                <li className="w-full text-center">{item}</li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default DistanceInfo;
