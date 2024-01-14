function CheckoutButton() {
  return (
    <div>
      <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 transform mobile:text-xl mobile:w-32 mobile:h-14 mobilelg:text-xl mobilelg:w-32 mobilelg:h-14 tablet:text-2xl tablet:w-32 tablet:h-14 laptop:text-2xl laptop:w-32 laptop:h-14 desktop:text-2xl desktop:w-32 desktop:h-14 hover:scale-105 hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50">
        Checkout
      </button>
    </div>
  );
}

export default CheckoutButton;
