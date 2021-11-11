import uniqueString from "unique-string";

const car_data = [
  {
    id: uniqueString(),
    name: "Volvo 800 T4",
    availableAtLevel: 1,
    description: "A small car, but unmatched power!",
    url: process.env.PUBLIC_URL + "/assets/img-car/car1.png",
  },
  {
    id: uniqueString(),
    name: "Maserati 250F",
    availableAtLevel: 2,
    description: "A good car to reach your limits, absolute power!",
    url: process.env.PUBLIC_URL + "/assets/img-car/car2.png",
  },
  {
    id: uniqueString(),
    name: "Mazda RX-7",
    availableAtLevel: 3,
    description: "An awesome car to earn respect on the road!",
    url: process.env.PUBLIC_URL + "/assets/img-car/car3.png",
  },
  {
    id: uniqueString(),
    name: "Aston Martin DB9",
    availableAtLevel: 4,
    description: "Unmatched performance, this is the boss on the road!",
    url: process.env.PUBLIC_URL + "/assets/img-car/car4.png",
  },
  {
    id: uniqueString(),
    name: "Dodge Viper STR-10",
    availableAtLevel: 5,
    description: "Be careful when driving this car, it is pure dynamite!",
    url: process.env.PUBLIC_URL + "/assets/img-car/car5.png",
  },
  {
    id: uniqueString(),
    name: "Corvette CS6",
    availableAtLevel: 6,
    description: "A toy full of power, this is absolutelly a big gun!",
    url: process.env.PUBLIC_URL + "/assets/img-car/car6.png",
  },
  {
    id: uniqueString(),
    name: "McLaren F1 GTR",
    availableAtLevel: 7,
    description: "Performance and power, this car is all you need!",
    url: process.env.PUBLIC_URL + "/assets/img-car/car7.png",
  },
  {
    id: uniqueString(),
    name: "McLaren MP4/4",
    availableAtLevel: 8,
    description: "A beast on the road, you won't be able to handle it!",
    url: process.env.PUBLIC_URL + "/assets/img-car/car8.png",
  },
  {
    id: uniqueString(),
    name: "Porsche 911",
    availableAtLevel: 9,
    description: "A great car that will amaze you every time you drive it!",
    url: process.env.PUBLIC_URL + "/assets/img-car/car9.png",
  },
  {
    id: uniqueString(),
    name: "Porsche carrera GT",
    availableAtLevel: 10,
    description: "This is the fastest car ever build in the whole world!",
    url: process.env.PUBLIC_URL + "/assets/img-car/car10.png",
  },
];

export default car_data;
