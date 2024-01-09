import GoogleMapsApi from "./GoogleMapsApi";

function DistanceInfo() {
  const benefitsDetails = {
    worldwide: {
      item: "WorldWide Shipping",
      logo: "src/assets/FontAwesome/truck-fast-solid.svg",
    },
    insurance: {
      item: "Full Insurance Coverage",
      logo: "src/assets/FontAwesome/car-burst-solid.svg",
    },
    mileage: {
      item: "Amazing Mileage Cover",
      logo: "src/assets/FontAwesome/gas-pump-solid.svg",
    },
    pickup: {
      item: "Free Pickup/Delivery",
      logo: "src/assets/FontAwesome/road-circle-check-solid.svg",
    },
    concierge: {
      item: "Concierge Service",
      logo: "src/assets/FontAwesome/person-military-to-person-solid.svg",
    },
  };

  return (
    <div className="h-medium flex flex-row justify-center items-center gap-10 font-genos w-full p-5">
      <h1 className="w-1/4">Based in Stevenage</h1>
      <div className="w-4/6 h-full">
        <GoogleMapsApi />
      </div>
      <div className="w-4/6 h-full">
        <ol className="h-full flex flex-col justify-around w-full text-3xl bg-gray-50">
          {Object.keys(benefitsDetails).map((key) => {
            const { item, logo } = benefitsDetails[key];
            return (
              <div
                key={key}
                className="flex flex-row h-1/2 justify-center p-10 items-center cursor-pointer hover:bg-gray-500"
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("li").style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("li").style.color = "black";
                }}
              >
                <img src={logo} alt={item} className="h-8 w-8 mr-2" />
                <li className="font-semibold w-full text-center">{item}</li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default DistanceInfo;
