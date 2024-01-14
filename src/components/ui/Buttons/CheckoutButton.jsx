function CheckoutButton() {
  return (
    <div>
      <button className="bg-green-400  text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 transform mobile:text-xl mobile:w-32 mobile:h-14 mobilelg:text-xl mobilelg:w-32 mobilelg:h-14 tablet:text-3xl tablet:w-60 tablet:h-20 laptop:text-3xl laptop:w-60 laptop:h-20 desktop:text-3xl desktop:w-60 desktop:h-20 hover:scale-105 hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50">
        Checkout
      </button>
    </div>
  );
}

export default CheckoutButton;
