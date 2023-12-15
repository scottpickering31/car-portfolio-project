import React, { useState } from "react";
import BasketIcon from "./ui/BasketIcon";
import { UilBars } from "@iconscout/react-unicons";

function NavBar({ basketCount, resetBasket }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = ["Home", "About", "Pricing", "Basket"];

  const handleHover = () => {
    setMenuOpen(true);
  };

  const handleLeave = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <BasketIcon basketCount={basketCount} resetBasket={resetBasket} />
      <div
        className="relative"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <UilBars
          className="mr-5 h-20 w-20 cursor-pointer"
          style={{ color: "rgb(255, 140, 40" }}
        />
        {menuOpen && (
          <div className="absolute w-40 h-52">
            {pages.map((page, index) => (
              <p
                key={index}
                className="py-1 mr-16 border-solid border-2 bg-white border-customOrange-lighter text-center hover:bg-customOrange-lighter hover:cursor-pointer"
              >
                {page}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
