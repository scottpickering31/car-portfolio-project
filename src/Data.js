const carMakes = {
  Ferrari: {
    logo: "images/Logos/Ferarri-Logo.png",
    description:
      "Ferrari, an iconic Italian sports car manufacturer, embodies a legacy of racing heritage, innovation, and passion. Famed for their striking design, high-performance engines, and unparalleled racing success, Ferrari cars capture the essence of speed, precision, and automotive excellence.",
    cars: {
      "Ferrari 488 GTB": {
        description:
          "The Ferrari 488 GTB is a stunning mid-engine supercar, boasting a 3.9-liter twin-turbocharged V8 engine that generates around 660 horsepower. Its sleek design, combined with advanced aerodynamics, results in impressive performance, capable of reaching 0 to 60 mph in under 3 seconds.",
        weight: "Around 3,300 lbs (1,497 kg)",
        torque: "560 lb-ft (760 Nm)",
        horsepower: "661 hp",
        engine: "Twin-turbocharged V8",
        speed: 3,
        image: "images/Ferrari/Ferrari-488-GTB.png",
        dayRate: 850,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },

      "Ferrari LaFerrari": {
        description:
          "LaFerrari is a hybrid hypercar masterpiece from Ferrari. It pairs a 6.3-liter V12 engine with an electric motor, producing over 950 horsepower. With cutting-edge technology and a striking design, it's a limited-production marvel known for its incredible speed and handling.",
        weight: "Around 3,500 lbs (1,587 kg)",
        torque: "Over 663 lb-ft (900 Nm)",
        horsepower:
          "949 hp combined (789 hp from V12 engine + 161 hp from electric motor)",
        engine: "Hybrid (V12 engine with electric motor)",
        speed: 2.9,
        image: "images/Ferrari/Ferrari-La-Ferrari.png",
        dayRate: 800,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },

      "Ferrari F40": {
        description:
          "The Ferrari F40 is an automotive legend, known for its raw performance and iconic design. Powered by a 2.9-liter twin-turbocharged V8 engine, it was one of the fastest cars of its time, capable of reaching a top speed of over 200 mph. Its lightweight construction and race-inspired heritage make it a coveted classic.",
        weight: "Around 2,400 lbs (1,089 kg)",
        torque: "424 lb-ft (576 Nm)",
        horsepower: "471 hp",
        engine: "Twin-turbocharged V8",
        speed: 4.1,
        image: "images/Ferrari/Ferrari-F40.png",
        dayRate: 700,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Lamborghini: {
    logo: "images/Logos/Lamborghini-Logo.png",
    description:
      "Lamborghini, an Italian supercar manufacturer, symbolizes flamboyance, power, and striking design. Renowned for their aggressive styling, roaring engines, and lightning-fast acceleration, Lamborghini cars offer an adrenaline-fueled driving experience combined with luxurious comfort.",
    cars: {
      "Lamborghini Aventador": {
        description:
          "The Aventador represents the epitome of Lamborghini's high-performance lineup. Its aggressive styling houses a 6.5-liter V12 engine, delivering around 700 to 730 horsepower. With a lightning-fast 0 to 60 mph time and a top speed exceeding 200 mph, it's a supercar icon that commands attention.",
        weight: "Around 3,500 lbs (1,587 kg)",
        torque: "509 lb-ft (690 Nm)",
        horsepower: "690 hp",
        engine: "Naturally aspirated V12",
        speed: 2.9,
        image: "images/Lambourghini/Lambourghini-Aventador.png",
        dayRate: 600,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Lamborghini Huracán": {
        description:
          "The Huracán is a dynamic mid-engine supercar powered by a 5.2-liter V10 engine, producing over 600 horsepower. It combines Italian craftsmanship with cutting-edge technology, offering remarkable acceleration, precise handling, and a design that embodies the essence of a Lamborghini.",
        weight: "Around 3,100 lbs (1,406 kg)",
        torque: "413 lb-ft (560 Nm)",
        horsepower: "602 hp",
        engine: "Naturally aspirated V10",
        speed: 2.5,
        image: "images/Lambourghini/Lamborghini-Huracán.png",
        dayRate: 450,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },

      "Lamborghini Diablo": {
        description:
          "The Diablo is a classic Lamborghini known for its bold design and powerful performance. Equipped with a V12 engine, it delivered around 500 to 600 horsepower during its production. With its iconic scissor doors and aggressive stance, it remains a symbol of the brand's relentless pursuit of speed.",
        weight:
          "Varies by model, around 3,400 to 3,600 lbs (1,542 to 1,633 kg)",
        torque: "Around 465 lb-ft (630 Nm)",
        horsepower: "Varies by model, around 485 to 575 hp",
        engine: "Naturally aspirated V12",
        speed: 4.0,
        image: "images/Lambourghini/Lambourghini-Diablo.png",
        dayRate: 400,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Bugatti: {
    logo: "images/Logos/Bugatti-Logo.png",
    description:
      "Bugatti Automobiles, a French manufacturer, creates some of the fastest, most exclusive, and luxurious hypercars in the world. Renowned for their unparalleled engineering, top-speed records, and exquisite craftsmanship, Bugatti cars represent the pinnacle of automotive engineering and opulence.",
    cars: {
      "Bugatti Veyron": {
        description:
          "The Bugatti Veyron redefined hypercars with its unmatched performance. Featuring an 8.0-liter quad-turbocharged W16 engine producing over 1,000 horsepower, it set speed records, capable of reaching speeds of over 250 mph. Its blend of luxury and sheer power made it a groundbreaking engineering marvel.",
        weight: "Around 4,400 lbs (1,996 kg)",
        torque: "922 lb-ft (1,250 Nm)",
        horsepower: "1,001 hp",
        engine: "Quad-turbocharged W16",
        speed: 2.5,
        image: "images/Bugatti/Bugatti-Veyron.png",
        dayRate: 1100,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Bugatti Chiron": {
        description:
          "The Chiron is the successor to the Veyron, boasting a monstrous 8.0-liter quad-turbocharged W16 engine that generates over 1,500 horsepower. It's designed to push boundaries, offering breathtaking acceleration, luxurious comfort, and a top speed electronically limited to 261 mph.",
        weight: "Around 4,400 lbs (1,996 kg)",
        torque: "1,180 lb-ft (1,600 Nm)",
        horsepower: "1,479 hp",
        engine: "Quad-turbocharged W16",
        speed: 2.4,
        image: "images/Bugatti/Bugatti Chiron.png",
        dayRate: 1200,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Bugatti Divo": {
        description:
          "The Bugatti Divo is a limited-edition hypercar derived from the Chiron, focusing on agility and handling. With the same powertrain as the Chiron but a more track-focused design, the Divo offers enhanced aerodynamics and performance, making it a highly exclusive and agile masterpiece.",
        weight: "Around 4,300 lbs (1,950 kg)",
        torque: "1,180 lb-ft (1,600 Nm)",
        horsepower: "1,479 hp",
        engine: "Quad-turbocharged W16",
        speed: 2.4,
        image: "images/Bugatti/Bugatti-Divo.png",
        dayRate: 1450,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  McLaren: {
    logo: "images/Logos/McLaren-Logo.png",
    description:
      "McLaren Automotive, a British manufacturer, is acclaimed for its range of high-performance sports cars and supercars. Known for their aerodynamic prowess, technological innovation, and track-focused performance, McLaren cars showcase a blend of lightweight design and impressive power, providing an unparalleled driving thrill.",
    cars: {
      "McLaren 720S": {
        description:
          "The McLaren 720S is a remarkable mid-engine supercar powered by a 4.0-liter twin-turbocharged V8 engine, producing around 710 horsepower. Known for its aerodynamic design and cutting-edge technology, it offers blistering acceleration and precise handling, making it a standout in the supercar realm.",
        weight: "Around 3,100 lbs (1,406 kg)",
        torque: "568 lb-ft (770 Nm)",
        horsepower: "710 hp",
        engine: "Twin-turbocharged V8",
        speed: 2.8,
        image: "images/McLaren/McLaren-720s.png",
        dayRate: 550,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "McLaren P1": {
        description:
          "The McLaren P1 is a hybrid hypercar masterpiece, combining a 3.8-liter twin-turbocharged V8 engine with an electric motor to produce over 900 horsepower. With its track-focused design and innovative hybrid technology, it offers electrifying performance and a futuristic driving experience.",
        weight: "Around 3,400 lbs (1,542 kg)",
        torque: "531 lb-ft (720 Nm)",
        horsepower:
          "903 hp combined (727 hp from V8 engine + 176 hp from electric motor)",
        engine: "Hybrid (Twin-turbocharged V8 with electric motor)",
        speed: 2.8,
        image: "images/McLaren/McLaren-P1.png",
        dayRate: 800,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "McLaren F1": {
        description:
          "The McLaren F1 is a legendary supercar renowned for its groundbreaking design and engineering. It held the title of the world's fastest production car for years. Powered by a naturally aspirated 6.1-liter V12 engine, it offered unmatched performance, innovative carbon fiber construction, and a center-driver's seat layout, becoming an automotive icon.",
        weight: "Around 2,500 lbs (1,134 kg)",
        torque: "479 lb-ft (649 Nm)",
        horsepower: "627 hp",
        engine: "Naturally aspirated V12",
        speed: 3.2,
        image: "images/McLaren/McLaren-F1.png",
        dayRate: 1200,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Porsche: {
    logo: "images/Logos/Porsche-Logo.png",
    description:
      "Porsche, a legendary German sports car manufacturer, is synonymous with precision engineering, iconic design, and exceptional performance. Famed for its lineup of high-performance sports cars, SUVs, and sedans, Porsche vehicles combine cutting-edge technology with a rich racing heritage, delivering an exhilarating driving experience.",
    cars: {
      "Porsche 911 GT2 RS": {
        description:
          "The Porsche 911 GT2 RS is a high-performance sports car known for its rear-engine layout and track-focused design. Powered by a twin-turbocharged 3.8-liter flat-six engine, it generates around 700 horsepower. With its lightweight construction and precise handling, it's one of Porsche's most extreme road-going 911s.",
        weight: "Around 3,240 lbs (1,470 kg)",
        torque: "553 lb-ft (750 Nm)",
        horsepower: "690 hp",
        engine: "Twin-turbocharged flat-six",
        speed: 2.7,
        image: "images/Porsche/Porsche 911 GT2 RS.png",
        dayRate: 450,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Porsche 918 Spyder": {
        description:
          "The Porsche 918 Spyder is a hybrid hypercar featuring a combination of a 4.6-liter V8 engine and electric motors, producing a combined power output of over 880 horsepower. Its advanced technology, lightweight construction, and exceptional handling capabilities make it a true masterpiece of automotive engineering.",
        weight: "Around 3,600 lbs (1,633 kg)",
        torque: "944 lb-ft (1,280 Nm)",
        horsepower:
          "887 hp combined (608 hp from V8 engine + 279 hp from electric motors)",
        engine: "Hybrid (Naturally aspirated V8 with electric motors)",
        speed: 2.2,
        image: "images/Porsche/Porsche 918 Spyder.png",
        dayRate: 500,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Porsche Carrera GT": {
        description:
          "The Porsche Carrera GT is a classic mid-engine supercar equipped with a naturally aspirated 5.7-liter V10 engine, delivering around 600 horsepower. Known for its manual transmission and exceptional driving dynamics, it remains a revered icon in Porsche's history, showcasing superb performance and engineering.",
        weight: "Around 3,000 lbs (1,361 kg)",
        torque: "435 lb-ft (590 Nm)",
        horsepower: "612 hp",
        engine: "Naturally aspirated V10",
        speed: 3.5,
        image: "images/Porsche/Porsche Carrera GT.png",
        dayRate: 480,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  "Aston Martin": {
    logo: "images/Logos/Aston-Martin-Logo.png",
    description:
      "Aston Martin, a British luxury marque, epitomizes the fusion of elegance and performance. Revered for their iconic sports cars and grand tourers, Aston Martin vehicles embody timeless design, sophisticated craftsmanship, and thrilling driving dynamics, representing the epitome of automotive elegance.",
    cars: {
      "Aston Martin DB11": {
        description:
          "The Aston Martin DB11 is a grand tourer featuring a 5.2-liter twin-turbocharged V12 engine, producing around 600 horsepower. With its elegant design, luxurious interior, and impressive performance, it embodies the perfect balance between comfort and performance, representing Aston Martin's legacy of grand touring excellence.",
        weight: "Around 3,800 lbs (1,724 kg)",
        torque: "516 lb-ft (700 Nm)",
        horsepower: "503 hp (V8 model) or 630 hp (V12 model)",
        engine: "Twin-turbocharged V8 or V12",
        speed: 3.7,
        image: "images/Aston Martin/HOR_XB1_AM_DB11.webp",
        dayRate: 400,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Aston Martin Vulcan": {
        description:
          "The Aston Martin Vulcan is a track-only hypercar designed for extreme performance. With a naturally aspirated 7.0-liter V12 engine producing over 800 horsepower, it offers a raw and thrilling driving experience. Limited in production, it's a rare and exclusive track weapon.",
        weight: "Around 3,000 lbs (1,361 kg)",
        torque: "Over 590 lb-ft (800 Nm)",
        horsepower: "820 hp",
        engine: "Naturally aspirated V12",
        speed: 3,
        image: "images/Aston Martin/HOR_XB1_AM_Vulcan.webp",
        dayRate: 600,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Aston Martin One-77": {
        description:
          "The Aston Martin One-77 is a limited-production hypercar with only 77 units produced. Powered by a naturally aspirated 7.3-liter V12 engine, it delivers around 750 horsepower. Its exquisite design, bespoke craftsmanship, and unparalleled exclusivity make it a collector's dream.",
        weight: "Around 3,300 lbs (1,497 kg)",
        torque: "553 lb-ft (750 Nm)",
        horsepower: "750 hp",
        engine: "Naturally aspirated V12",
        speed: 3.7,
        image: "images/Aston Martin/HOR_XB1_AM_One-77.webp",
        dayRate: 650,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Keonigsegg: {
    logo: "images/Logos/Koenigsegg-Logo.png",
    description:
      "Koenigsegg Automotive, a Swedish hypercar manufacturer, stands at the forefront of automotive innovation and performance. Celebrated for their record-breaking speeds, advanced engineering, and handcrafted precision, Koenigsegg hypercars redefine the boundaries of automotive excellence.",
    cars: {
      "Koenigsegg Agera RS": {
        description:
          "The Koenigsegg Agera RS is a hypercar recognized for its exceptional performance and engineering. With a twin-turbocharged 5.0-liter V8 engine producing over 1,100 horsepower, it set several speed records. Its lightweight construction and innovative technology make it a standout in the hypercar realm.",
        weight: "Around 3,100 lbs (1,406 kg)",
        torque: "1,011 lb-ft (1,370 Nm)",
        horsepower: "1,160 hp",
        engine: "Twin-turbocharged V8",
        speed: 2.8,
        image: "images/Keonigsegg/Koenigsegg-Agera-r.png",
        dayRate: 730,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Koenigsegg Jesko": {
        description:
          "The Koenigsegg Jesko is a high-performance hypercar equipped with a twin-turbocharged 5.0-liter V8 engine capable of producing over 1,600 horsepower on E85 biofuel. With advanced aerodynamics and engineering, it's designed to push the boundaries of speed and performance.",
        weight: "Around 3,100 lbs (1,406 kg)",
        torque: "Over 1,000 lb-ft (1,500 Nm)",
        horsepower: "Up to 1,600 hp",
        engine: "Twin-turbocharged V8",
        speed: 2.5,
        image: "images/Keonigsegg/Koenigsegg-Jesko 14.44.14.png",
        dayRate: 950,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Koenigsegg Regera": {
        description:
          "The Koenigsegg Regera is a hybrid hypercar featuring a unique powertrain that combines a twin-turbocharged 5.0-liter V8 engine with electric motors, delivering a combined output of over 1,500 horsepower. Known for its direct-drive transmission and luxury-focused design, it offers unparalleled acceleration and refinement.",
        weight: "Around 3,500 lbs (1,587 kg)",
        torque: "Over 1,475 lb-ft (2,000 Nm)",
        horsepower:
          "1,479 hp combined (Internal Combustion Engine + Electric Motors)",
        engine: "Hybrid (Internal Combustion Engine + Electric Motors)",
        speed: 2.8,
        image: "images/Keonigsegg/Koenigsegg-Regera.png",
        dayRate: 700,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Pagani: {
    logo: "images/Logos/Pagani-Logo.png",
    description:
      "Pagani Automobili, an Italian manufacturer, crafts some of the world's most exclusive and meticulously designed hypercars. Renowned for their breathtaking aesthetics, exceptional performance, and limited production, Pagani cars showcase an exquisite blend of artistry, engineering, and performance.",
    cars: {
      "Pagani Huayra": {
        description:
          "The Pagani Huayra is an exquisite hypercar featuring a twin-turbocharged 6.0-liter V12 engine, delivering around 730 to 800 horsepower. Its attention to detail, artisanal craftsmanship, and innovative aerodynamics make it a masterpiece of automotive artistry and performance.",
        weight: "Around 3,000 lbs (1,361 kg)",
        torque: "738 lb-ft (1,000 Nm)",
        horsepower: "730 hp",
        engine: "Twin-turbocharged V12",
        speed: 3.0,
        image: "images/Pagani/Pagani Huayra.png",
        dayRate: 700,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Pagani Zonda": {
        description:
          "The Pagani Zonda is a legendary hypercar known for its distinctive design and high-performance capabilities. With various iterations and engine options, including naturally aspirated and twin-turbocharged V12s, it has maintained its status as an icon in the automotive world.",
        weight: "N/A",
        torque: "N/A",
        horsepower: "N/A",
        engine: "N/A",
        speed: 2.7,
        image: "images/Pagani/Pagani Zonda.png",
        dayRate: 600,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Pagani Huayra BC": {
        description:
          "The Pagani Huayra BC is a track-focused variant of the Huayra, delivering enhanced performance and aerodynamics. With a more powerful engine producing over 750 horsepower, it's lighter and more agile, designed to excel on both the road and the track.",
        weight: "Around 2,800 lbs (1,270 kg)",
        torque: "738 lb-ft (1,000 Nm)",
        horsepower: "745 hp",
        engine: "Twin-turbocharged V12",
        speed: 3.3,
        image: "images/Pagani/Pagani Huayra BC.png",
        dayRate: 720,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Maserati: {
    logo: "images/Logos/Maserati-Logo.png",
    description:
      "Maserati, an emblem of Italian luxury and performance, specializes in producing elegant and powerful sports cars, sedans, and SUVs. Known for their distinctive style, thrilling performance, and luxurious interiors, Maserati vehicles offer a harmonious balance of refined craftsmanship and dynamic driving experiences.",
    cars: {
      "Maserati MC12": {
        description:
          "The Maserati MC12 is a limited-production supercar based on the Ferrari Enzo platform. Powered by a 6.0-liter V12 engine, it produced over 600 horsepower. With its racing-inspired design and exclusivity, it remains a coveted collector's item.",
        weight: "Around 3,100 lbs (1,406 kg)",
        torque: "481 lb-ft (652 Nm)",
        horsepower: "620 hp",
        engine: "Naturally aspirated V12",
        speed: 3.8,
        image: "images/Maserati/Maserati-MC12.png",
        dayRate: 500,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Maserati GranTurismo": {
        description:
          "The Maserati GranTurismo is a grand tourer featuring a V8 engine delivering around 450 to 460 horsepower. Known for its elegant design and luxurious interior, it offers a perfect blend of performance and comfort for long-distance driving.",
        weight:
          "Varies by model, typically around 4,100 to 4,400 lbs (1,860 to 2,000 kg)",
        torque: "Around 384 lb-ft (520 Nm)",
        horsepower: "Varies by model, around 454 to 580 hp",
        engine: "Naturally aspirated V8 or V12",
        speed: 3.4,
        image: "images/Maserati/Maserati-GranTurismo.png",
        dayRate: 480,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Maserati MC20": {
        description:
          "The Maserati MC20 is a mid-engine supercar powered by a twin-turbocharged 3.0-liter V6 engine, producing over 600 horsepower. With its lightweight construction, advanced technology, and sleek design, it marks Maserati's return to high-performance sports cars.",
        weight: "Around 3,300 lbs (1,497 kg)",
        torque: "Over 538 lb-ft (730 Nm)",
        horsepower: "621 hp",
        engine: "Twin-turbocharged V6",
        speed: 2.9,
        image: "images/Maserati/Maserati-MC20.png",
        dayRate: 550,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Audi: {
    logo: "images/Logos/Audi-Logo.png",
    description:
      "Audi, a renowned German automobile manufacturer, is synonymous with cutting-edge technology, elegant design, and remarkable performance. Known for its range of luxurious sedans, SUVs, and high-performance sports cars, Audi combines engineering precision with innovative features, making each model a symbol of sophistication and driving pleasure.",
    cars: {
      "Audi R8": {
        description:
          "The Audi R8 is a high-performance mid-engine sports car available with V10 engine options. With its Quattro all-wheel drive system and sleek design, it offers impressive handling, acceleration, and everyday usability, showcasing Audi's engineering prowess.",
        weight:
          "Specifications may vary by model and year, typically around 3,500 lbs (1,587 kg)",
        torque: "Around 398 to 430 lb-ft (540 to 583 Nm)",
        horsepower: "Varies by model, around 532 to 602 hp",
        engine: "Naturally aspirated V10 or V8",
        speed: 3.2,
        image: "images/Audi/Audi-R8.png",
        dayRate: 450,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Audi RS e-tron GT": {
        description:
          "The Audi RS e-tron GT is an all-electric high-performance sports sedan, delivering exceptional acceleration and handling. With dual electric motors and Audi's Quattro technology, it offers impressive performance and a luxurious interior.",
        weight: "Around 5,100 lbs (2,313 kg)",
        torque: "Over 469 lb-ft (637 Nm)",
        horsepower: "590 hp",
        engine: "Electric motors (all-wheel drive)",
        speed: 2.9,
        image: "images/Audi/Audi RS e-tron GT.png",
        dayRate: 480,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Audi RS6 Avant": {
        description:
          "The Audi RS6 Avant is a high-performance estate car known for its powerful twin-turbocharged V8 engine producing over 600 horsepower. Combining sportiness with practicality, it offers exceptional performance in a versatile package.",
        weight: "Around 4,500 lbs (2,041 kg)",
        torque: "590 lb-ft (800 Nm)",
        horsepower: "591 hp",
        engine: "Twin-turbocharged V8",
        speed: 2.6,
        image: "images/Audi/Audi-RS6-Avant.png",
        dayRate: 470,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Mercedes: {
    logo: "images/Logos/Mercedes-Benz-Logo.png",
    description:
      "Mercedes-Benz, an iconic luxury automobile brand, stands as a beacon of automotive excellence and innovation. From elegant sedans to powerful sports cars and SUVs, Mercedes-Benz epitomizes refined luxury, advanced technology, and exceptional performance. With a history steeped in craftsmanship, Mercedes continues to set benchmarks in the automotive industry.",
    cars: {
      "Mercedes-AMG One": {
        description:
          "The Mercedes-AMG One is a hypercar featuring Formula 1 hybrid technology, with a turbocharged 1.6-liter V6 engine and electric motors producing over 1,000 horsepower. With its race-inspired design and cutting-edge engineering, it's a road-legal F1 car.",
        weight: "Around 3,200 lbs (1,451 kg)",
        torque: "Over 738 lb-ft (1,000 Nm)",
        horsepower:
          "Over 1,000 hp combined (Formula 1-derived hybrid powertrain)",
        engine: "Hybrid (1.6-liter turbocharged V6 with electric motors)",
        speed: 2.4,
        image: "images/Mercedes/Mercedes-AMG One.png",
        dayRate: 490,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Mercedes-AMG GT": {
        description:
          "The Mercedes-AMG GT is a sports car available in various models, powered by a twin-turbocharged V8 engine, delivering exceptional performance and dynamic driving characteristics. Its sleek design and potent powertrain make it a standout in the sports car segment.",
        weight: "Around 3,500 lbs (1,587 kg)",
        torque: "Around 465 to 516 lb-ft (630 to 700 Nm)",
        horsepower: "Varies by model, around 469 to 720 hp",
        engine: "Twin-turbocharged V8",
        speed: 2.8,
        image: "images/Mercedes/Mercedes-AMG GT.png",
        dayRate: 460,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Mercedes-AMG SLS": {
        description:
          "The Mercedes-AMG SLS is a modern classic with its iconic gullwing doors and a naturally aspirated V8 engine producing around 570 horsepower. Its striking design and impressive performance pay homage to the legendary Mercedes-Benz 300SL Gullwing.",
        weight: "Around 3,700 lbs (1,678 kg)",
        torque: "Around 479 lb-ft (650 Nm)",
        horsepower: "Around 563 to 622 hp",
        engine: "Naturally aspirated V8",
        speed: 2.8,
        image: "images/Mercedes/Mercedes-AMG SLS.png",
        dayRate: 470,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Lexus: {
    logo: "images/Logos/Lexus-Logo.png",
    description:
      "Lexus, the luxury division of Toyota, embodies a fusion of comfort, performance, and reliability. Recognized for its meticulously crafted vehicles, Lexus offers a range of sedans, SUVs, and coupes that blend high-end features with a focus on comfort and refinement, catering to those seeking a premium driving experience.",
    cars: {
      "Lexus LFA": {
        description:
          "The Lexus LFA is a rare and iconic supercar featuring a naturally aspirated 4.8-liter V10 engine producing over 550 horsepower. Renowned for its precision engineering and exceptional performance, it offers a thrilling driving experience and a unique exhaust note.",
        weight: "Around 3,300 lbs (1,497 kg)",
        torque: "354 lb-ft (480 Nm)",
        horsepower: "552 hp",
        engine: "Naturally aspirated V10",
        speed: 3.6,
        image: "images/Lexus/Lexus-LFA.png",
        dayRate: 460,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Lexus LC 500": {
        description:
          "The Lexus LC 500 is a grand tourer equipped with a naturally aspirated 5.0-liter V8 engine, delivering around 470 horsepower. With its stunning design, luxurious interior, and refined performance, it represents Lexus' commitment to blending style with performance.",
        weight: "Around 4,200 lbs (1,905 kg)",
        torque: "398 lb-ft (540 Nm)",
        horsepower: "471 hp",
        engine: "Naturally aspirated V8",
        speed: 3.4,
        image: "images/Lexus/Lexus-LC-500.png",
        dayRate: 450,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Lexus RC F": {
        description:
          "The Lexus RC F is a high-performance coupe powered by a 5.0-liter V8 engine, producing around 472 horsepower. It combines luxury and sportiness, offering impressive performance and engaging driving dynamics.",
        weight: "Around 3,800 lbs (1,724 kg)",
        torque: "389 lb-ft (527 Nm)",
        horsepower: "472 hp",
        engine: "Naturally aspirated V8",
        speed: 3.2,
        image: "images/Lexus/Lexus-RC-F.png",
        dayRate: 440,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Ford: {
    logo: "images/Logos/Ford-Logo.png",
    description:
      "Ford, a pioneering American automaker, boasts a legacy of producing iconic vehicles that blend performance with heritage. Renowned for its Mustangs, GTs, and high-performance variants, Ford combines raw power with modern technology, offering a range of vehicles that cater to enthusiasts and everyday drivers alike.",
    cars: {
      "Ford GT": {
        description:
          "The Ford GT is a modern supercar with a twin-turbocharged 3.5-liter V6 engine producing over 600 horsepower. With its aerodynamic design and racing heritage, it's a pinnacle of Ford's engineering and performance prowess.",
        weight: "Around 3,300 lbs (1,497 kg)",
        torque: "550 lb-ft (746 Nm)",
        horsepower: "660 hp",
        engine: "Twin-turbocharged V6",
        speed: 2.8,
        image: "images/Ford/Ford-GT.png",
        dayRate: 480,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Ford GT40": {
        description:
          "The Ford GT40 is a legendary race car that dominated Le Mans in the 1960s. Renowned for its success in motorsport, it secured Ford's victory at the 24 Hours of Le Mans for four consecutive years from 1966 to 1969.",
        weight: "Around 2,000 lbs (907 kg)",
        torque: "Around 369 lb-ft (500 Nm)",
        horsepower: "Varies by model, around 335 to 485 hp",
        engine: "Naturally aspirated V8",
        speed: 3,
        image: "images/Ford/Ford-GT40.png",
        dayRate: 450,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Ford Mustang Shelby GT500": {
        description:
          "The Ford Mustang Shelby GT500 is a high-performance variant of the iconic Mustang, featuring a supercharged 5.2-liter V8 engine producing over 700 horsepower. It combines classic American muscle with modern performance.",
        weight: "Around 4,200 lbs (1,905 kg)",
        torque: "625 lb-ft (847 Nm)",
        horsepower: "760 hp",
        engine: "Supercharged V8",
        speed: 3.2,
        image: "images/Ford/Ford-Mustang-Shelby-GT500.png",
        dayRate: 470,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Lotus: {
    logo: "images/Logos/Lotus-Logo.png",
    description:
      "Lotus Cars, synonymous with lightweight engineering and agile performance, creates sports cars renowned for their precision handling and track prowess. Embracing a philosophy of 'simplify, then add lightness,' Lotus vehicles offer a unique driving experience, emphasizing nimbleness and driver engagement.",
    cars: {
      "Lotus Evija": {
        description:
          "The Lotus Evija is an all-electric hypercar with four electric motors delivering a combined output of over 1,900 horsepower. With its lightweight carbon fiber construction and cutting-edge technology, it's designed to set new standards in performance and innovation.",
        weight: "Around 3,700 lbs (1,678 kg)",
        torque: "Over 1,254 lb-ft (1,700 Nm)",
        horsepower: "Over 1,970 hp",
        engine: "Electric motors",
        speed: 3.0,
        image: "images/Lotus/Lotus-Evija.png",
        dayRate: 490,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Lotus Exige": {
        description:
          "The Lotus Exige is a lightweight and agile sports car known for its exceptional handling and performance. Powered by various supercharged engines, it offers impressive track capabilities and driving dynamics.",
        weight: "Around 2,400 to 2,600 lbs (1,089 to 1,179 kg)",
        torque: "Around 174 to 258 lb-ft (236 to 350 Nm)",
        horsepower: "Varies by model, around 345 to 430 hp",
        engine: "Supercharged inline-four or V6",
        speed: 2.9,
        image: "images/Lotus/Lotus-Exige.png",
        dayRate: 450,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Lotus Elise": {
        description:
          "The Lotus Elise is a lightweight and nimble sports car available with various engine options. Known for its simplicity, precision handling, and driver-focused experience, it embodies Lotus' philosophy of performance through lightness.",
        weight: "Around 1,900 to 2,000 lbs (862 to 907 kg)",
        torque: "Around 118 to 184 lb-ft (160 to 250 Nm)",
        horsepower: "Varies by model, around 134 to 217 hp",
        engine: "Naturally aspirated inline-four",
        speed: 2.8,
        image: "images/Lotus/Lotus-Elise.png",
        dayRate: 440,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Bentley: {
    logo: "images/Logos/Bentley-Logo.png",
    description:
      "Bentley Motors, a pinnacle of British luxury, epitomizes opulence, craftsmanship, and refined performance. Known for its grand tourers, sedans, and SUVs, Bentley marries handcrafted interiors with powerful engines, delivering an unmatched combination of luxury and exhilarating performance.",
    cars: {
      "Bentley Continental GT": {
        description:
          "The Bentley Continental GT is a luxurious grand tourer featuring a powerful twin-turbocharged W12 engine or a V8 engine. With its opulent interior, refined performance, and elegant design, it offers a blend of comfort and performance.",
        weight: "Around 4,800 to 5,000 lbs (2,177 to 2,268 kg)",
        torque: "Around 487 to 664 lb-ft (660 to 900 Nm)",
        horsepower: "Varies by model, around 500 to 700 hp",
        engine: "Twin-turbocharged V8 or W12",
        speed: 3.6,
        image: "images/Bentley/Bentley-Continental-GT.png",
        dayRate: 470,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Bentley Bentayga Speed": {
        description:
          "The Bentley Bentayga Speed is a high-performance luxury SUV powered by a twin-turbocharged W12 engine, delivering impressive power and a luxurious driving experience in an SUV package.",
        weight: "Around 5,300 to 5,800 lbs (2,404 to 2,631 kg)",
        torque: "664 lb-ft (900 Nm)",
        horsepower: "626 hp",
        engine: "Twin-turbocharged W12",
        speed: 3.2,
        image: "images/Bentley/Bentley-Bentayga-Speed.png",
        dayRate: 480,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Bentley Mulsanne": {
        description:
          "The Bentley Mulsanne is a flagship luxury sedan known for its opulent interior, handcrafted details, and a powerful V8 engine. It represents the pinnacle of Bentley's craftsmanship and luxury.",
        weight: "Around 5,800 to 6,000 lbs (2,631 to 2,722 kg)",
        torque: "Around 811 to 1,023 lb-ft (1,100 to 1,387 Nm)",
        horsepower: "Around 505 to 530 hp",
        engine: "Twin-turbocharged V8",
        speed: 3.4,
        image: "images/Bentley/Bentley-Mulsanne.png",
        dayRate: 470,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  "Rolls Royce": {
    logo: "images/Logos/Rolls-Royce-Logo.png",
    description:
      "Rolls-Royce Motor Cars sets the standard for ultimate luxury and exclusivity in the automotive world. Renowned for its handcrafted elegance, bespoke features, and V12-powered vehicles, Rolls-Royce embodies a pinnacle of automotive opulence and refined craftsmanship.",
    cars: {
      "Rolls-Royce Wraith": {
        description:
          "The Rolls-Royce Wraith is a luxurious grand tourer featuring a powerful V12 engine, combining exquisite craftsmanship with dynamic performance. It's known for its elegant design, opulent interior, and effortless power.",
        weight: "Around 5,300 to 5,500 lbs (2,404 to 2,495 kg)",
        torque: "642 lb-ft (870 Nm)",
        horsepower: "624 hp",
        engine: "Twin-turbocharged V12",
        speed: 4.4,
        image: "images/Rolls Royce/Rolls-Royce Wraith.png",
        dayRate: 490,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Rolls-Royce Dawn": {
        description:
          "The Rolls-Royce Dawn is an elegant convertible luxury car powered by a V12 engine, offering a seamless blend of open-top driving, luxurious comfort, and unparalleled craftsmanship.",
        weight: "Around 5,600 to 5,800 lbs (2,540 to 2,631 kg)",
        torque: "605 lb-ft (820 Nm)",
        horsepower: "563 hp",
        engine: "Twin-turbocharged V12",
        speed: 4,
        image: "images/Rolls Royce/Rolls-Royce Dawn.png",
        dayRate: 480,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Rolls-Royce Phantom": {
        description:
          "The Rolls-Royce Phantom is the pinnacle of luxury, representing the ultimate in automotive opulence. With its V12 engine, bespoke craftsmanship, and unparalleled comfort, it's the epitome of automotive extravagance.",
        weight: "Around 5,500 to 5,900 lbs (2,495 to 2,676 kg)",
        torque: "664 lb-ft (900 Nm)",
        horsepower: "563 hp",
        engine: "Twin-turbocharged V12",
        speed: 4.2,
        image: "images/Rolls Royce/Rolls-Royce Phantom.png",
        dayRate: 470,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Tesla: {
    logo: "images/Logos/Tesla-Logo.png",
    description:
      "Tesla, an innovative electric vehicle manufacturer, leads the way in sustainable, high-performance cars. With a focus on electric powertrains, cutting-edge technology, and impressive acceleration, Tesla cars redefine the concept of eco-friendly, yet powerful, automotive innovation.",
    cars: {
      "Tesla Roadster": {
        description:
          "The Tesla Roadster is an all-electric sports car known for its incredible acceleration and range. With its futuristic design and exceptional performance, it's set to redefine electric supercars.",
        weight: "Estimated around 4,000 lbs (1,814 kg)",
        torque: "Estimated over 7,000 lb-ft (9,500 Nm)",
        horsepower: "Estimated 1,000+ hp",
        engine: "Electric motors",
        speed: 2.0,
        image: "images/Tesla/Tesla Roadster.png",
        dayRate: 460,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Tesla Model S Plaid": {
        description:
          "The Tesla Model S Plaid is an all-electric sedan with exceptional acceleration and range. With its advanced technology and performance, it's among the fastest production cars, offering impressive speed and innovation.",
        weight: "Around 4,800 lbs (2,177 kg)",
        torque: "1,050 lb-ft (1,423 Nm)",
        horsepower: "1,020 hp",
        engine: "Electric motors",
        speed: 1.9,
        image: "images/Tesla/Tesla Model S Plaid.png",
        dayRate: 470,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Tesla Model X Plaid": {
        description:
          "The Tesla Model X Plaid is an all-electric SUV offering exceptional performance and technology. With its unique falcon-wing doors and impressive acceleration, it combines luxury and innovation in an electric SUV package.",
        weight: "Around 5,600 lbs (2,540 kg)",
        torque: "1,050 lb-ft (1,423 Nm)",
        horsepower: "1,020 hp",
        engine: "Electric motors",
        speed: 1.9,
        image: "images/Tesla/Tesla Model X Plaid.png",
        dayRate: 480,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },

  Rimac: {
    logo: "images/Logos/RImac-Logo.svg",
    description:
      "Rimac Automobili, a Croatian manufacturer of high-performance electric hypercars, pushes the boundaries of electric vehicle technology. Recognized for its lightning-fast acceleration, innovative engineering, and futuristic designs, Rimac represents the forefront of electric car performance and innovation.",
    cars: {
      "Rimac C_Two": {
        description:
          "The Rimac C_Two is an all-electric hypercar featuring four electric motors producing over 1,900 horsepower combined. Known for its cutting-edge technology, incredible acceleration, and advanced battery system, it's designed to redefine performance in the electric car realm.",
        weight: "Around 4,300 lbs (1,950 kg)",
        torque: "Over 1,696 lb-ft (2,300 Nm)",
        horsepower: "Over 1,900 hp",
        engine: "Electric motors",
        speed: 1.9,
        image: "images/Rimac/Rimac C_Two.png",
        dayRate: 490,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Rimac Concept_One": {
        description:
          "The Rimac Concept_One was a pioneering all-electric hypercar with four electric motors generating around 1,200 horsepower. Recognized for its acceleration and innovative technology, it set benchmarks in the world of electric hypercars.",
        weight: "Around 4,300 lbs (1,950 kg)",
        torque: "Over 1,180 lb-ft (1,600 Nm)",
        horsepower: "Over 1,224 hp",
        engine: "Electric motors",
        speed: 1.8,
        image: "images/Rimac/Rimac-ConceptOne.png",
        dayRate: 470,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
      "Rimac Nevera": {
        description:
          "The Rimac Nevera is an all-electric hypercar succeeding the Concept_One, featuring four electric motors producing over 1,900 horsepower. With its advanced aerodynamics and lightning-fast acceleration, it's designed to push the boundaries of electric vehicle performance.",
        weight: "Around 4,700 lbs (2,132 kg)",
        torque: "Over 1,741 lb-ft (2,360 Nm)",
        horsepower: "Over 1,900 hp",
        engine: "Electric motors",
        speed: 1.9,
        image: "images/Rimac/Rimac Nevera.png",
        dayRate: 480,
        weekRate: function () {
          const weekRates = this.dayRate * 6.5;
          return weekRates;
        },
        weekRateBreakDown: function () {
          const weekRateBreakDown = (this.dayRate * 6.5) / 7;
          return weekRateBreakDown.toFixed(2);
        },
        monthRate: function () {
          const monthRate = this.dayRate * 27;
          return monthRate;
        },
        monthRateBreakDown: function () {
          const monthRateBreakDown = (this.dayRate * 27) / 31;
          return monthRateBreakDown.toFixed(2);
        },
      },
    },
  },
};

export default carMakes;
