import HowItWorksSnippet from "../components/ui/HowItWorksSnippet";

function HowItWorks() {
  const sectionObject = {
    sectionOne: {
      title: "Choose your Supercar!",
      description:
        "Explore our curated collection of iconic supercars available for rent. From the pulse-raising Ferrari 488 GTB to the unmatched elegance of the Bugatti Chiron, select your desired supercar based on your preferences. Tailor your experience by choosing your preferred rental terms. Each supercar's rental price may vary based on the chosen duration and the specific model.",
      image: "src/assets/Ferrari/Ferrari-488-GTB.png",
    },
    sectionTwo: {
      title: "Pick your rental terms...",
      description:
        "Once you've made your selection, simply add the chosen supercar to your basket. Proceed to checkout and finalize your rental, including filling out insurance information and confirming your delivery details. Your selected supercar will be meticulously prepared and delivered to your doorstep a few days after your purchase is confirmed. Our team ensures a seamless delivery experience for your convenience.",
      image: "src/assets/Porsche/Porsche 911 GT2 RS.png",
    },
    sectionThree: {
      tite: "Get your drive on!",
      description:
        "With all formalities completed and insurance settled, you're ready to hit the road in the car of your dreams! Experience the thrill and luxury of your chosen supercar according to your selected rental period. Once your rental period ends, our team will coordinate the collection of the supercar from your specified location. Sit back and relax as we retrieve the car and return it to our secure warehouse of exclusive supercars. At Elite Drives, we're dedicated to offering a sophisticated and hassle-free experience, allowing you to indulge in the pleasure of driving top-tier supercars without any complications.",
      image: "src/assets/Ford/Ford-Mustang-Shelby-GT500.png",
    },
  };

  return (
    <div>
      <HowItWorksSnippet
        title={sectionObject.sectionOne.title}
        description={sectionObject.sectionOne.description}
        image={sectionObject.sectionOne.image}
      />
      <HowItWorksSnippet
        title={sectionObject.sectionTwo.title}
        description={sectionObject.sectionTwo.description}
        image={sectionObject.sectionTwo.image}
        flipImage
      />
      <HowItWorksSnippet
        title={sectionObject.sectionThree.tite}
        description={sectionObject.sectionThree.description}
        image={sectionObject.sectionThree.image}
      />
    </div>
  );
}

export default HowItWorks;
