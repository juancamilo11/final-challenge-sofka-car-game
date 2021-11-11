const game = {
  //USar para mirar estilso y demas y luego quitar para no tener conflictos con el context
  playerList: [
    {
      username: "carlos-ochoa111",
      playerName: "Juan Carlos Ochoa",
      distance: 0,
      position: 0,
      lane: 1,
      pic: {
        id: 3,
        name: "Karina",
        url: "/assets/img-logos/logo3.png",
      },
      car: {
        id: "7824d1539a9942e84fec45f6aaa0bb2a",
        name: "Porsche carrera GT",
        availableAtLevel: 10,
        description: "This is the fastest car ever build in the whole world!",
        url: "/assets/img-car/car10.png",
      },
      id: "93cb351e4d17025efe3091357b625d9f",
    },
    {
      username: "andres.villada-12",
      playerName: "Andres Mauricio Villada",
      distance: 0,
      position: 0,
      pic: {
        id: 7,
        name: "Puppy",
        url: "/assets/img-logos/logo7.png",
      },
      car: {
        id: "64073f9a5da580425abc49f2223cb9d1",
        name: "McLaren F1 GTR",
        availableAtLevel: 7,
        description: "Performance and power, this car is all you need!",
        url: "/assets/img-car/car7.png",
      },
      lane: 2,
      id: "c0085eff8377c63c37fe43c364db272c",
    },
    {
      username: "lau.monsalve.127",
      playerName: "Laura Melissa monsalve",
      distance: 0,
      position: 0,
      pic: {
        id: 4,
        name: "Pop",
        url: "/assets/img-logos/logo4.png",
      },
      car: {
        id: "e25c679a84d2f3453ac1261c311756e8",
        name: "McLaren MP4/4",
        availableAtLevel: 8,
        description: "A beast on the road, you won't be able to handle it!",
        url: "/assets/img-car/car8.png",
      },
      lane: 3,
      id: "b011cd0a238465c54f47c1f7030397f0",
    },
    {
      username: "ana.maria-11124",
      playerName: "Ana Maria Carmona",
      distance: 0,
      position: 0,
      pic: {
        id: 10,
        name: "Christopher",
        url: "/assets/img-logos/logo10.png",
      },
      car: {
        id: "e25c679a84d2f3453ac1261c311756e8",
        name: "McLaren MP4/4",
        availableAtLevel: 8,
        description: "A beast on the road, you won't be able to handle it!",
        url: "/assets/img-car/car8.png",
      },
      lane: 4,
      id: "5cc7e1b8c6ed6676981eae1c72063cf6",
    },
    {
      username: "carolina.bedoya999",
      playerName: "Caro Bedoya Cardona",
      distance: 0,
      position: 0,
      pic: {
        id: 6,
        name: "Helena",
        url: "/assets/img-logos/logo6.png",
      },
      car: {
        id: "4b30b74a2711f3f330e0a81617080526d3",
        name: "Dodge Viper STR-10",
        availableAtLevel: 5,
        description: "Be careful when driving this car, it is pure dynamite!",
        url: "/assets/img-car/car5.png",
      },
      lane: 5,
      id: "4bd7beebf1d23523124681a086ec94612ee2",
    },
    {
      username: "carolina.bedoya999",
      playerName: "Caro Bedoya Cardona",
      distance: 0,
      position: 0,
      pic: {
        id: 6,
        name: "Helena",
        url: "/assets/img-logos/logo6.png",
      },
      car: {
        id: "4b30b74a2711f3f03453e0a81617080526d3",
        name: "Dodge Viper STR-10",
        availableAtLevel: 5,
        description: "Be careful when driving this car, it is pure dynamite!",
        url: "/assets/img-car/car5.png",
      },
      lane: 6,
      id: "4bd7beebf1d235263331a356745086ec94612ee2",
    },
    {
      username: "carolina.bedoya999",
      playerName: "Caro Bedoya Cardona",
      distance: 0,
      position: 0,
      pic: {
        id: 6,
        name: "Helena",
        url: "/assets/img-logos/logo6.png",
      },
      car: {
        id: "4b30b74a2711f3f02565e0a81617080526d3",
        name: "Dodge Viper STR-10",
        availableAtLevel: 5,
        description: "Be careful when driving this car, it is pure dynamite!",
        url: "/assets/img-car/car5.png",
      },
      lane: 7,
      id: "4bd7beebf1d23526822456247221a086ec94612ee2",
    },
    {
      username: "carolina.bedoya999",
      playerName: "Caro Bedoya Cardona",
      distance: 0,
      position: 0,
      pic: {
        id: 6,
        name: "Helena",
        url: "/assets/img-logos/logo6.png",
      },
      car: {
        id: "4b30b74a2711f3f0e26450a81617080526d3",
        name: "Dodge Viper STR-10",
        availableAtLevel: 5,
        description: "Be careful when driving this car, it is pure dynamite!",
        url: "/assets/img-car/car5.png",
      },
      lane: 8,
      id: "4bd7beebf1d2352681a0826246526ec94612ee2",
    },
    {
      username: "carolina.bedoya999",
      playerName: "Caro Bedoya Cardona",
      distance: 0,
      position: 0,
      pic: {
        id: 6,
        name: "Helena",
        url: "/assets/img-logos/logo6.png",
      },
      car: {
        id: "4b30b74a2711f3f0e02654a81617080526d3",
        name: "Dodge Viper STR-10",
        availableAtLevel: 5,
        description: "Be careful when driving this car, it is pure dynamite!",
        url: "/assets/img-car/car5.png",
      },
      lane: 9,
      id: "4bd7beebf1d2352681a08643377ec94612ee2",
    },
    {
      username: "carolina.bedoya999",
      playerName: "Caro Bedoya Cardona",
      distance: 0,
      position: 0,
      pic: {
        id: 6,
        name: "Helena",
        url: "/assets/img-logos/logo6.png",
      },
      car: {
        id: "4b30b74a2711f3f0e0a24564681617080526d3",
        name: "Dodge Viper STR-10",
        availableAtLevel: 5,
        description: "Be careful when driving this car, it is pure dynamite!",
        url: "/assets/img-car/car5.png",
      },
      lane: 10,
      id: "4bd7beebf1d2352681a02654686ec94612ee2",
    },
    {
      username: "carolina.bedoya999",
      playerName: "Caro Bedoya Cardona",
      distance: 0,
      position: 0,
      pic: {
        id: 6,
        name: "Helena",
        url: "/assets/img-logos/logo6.png",
      },
      car: {
        id: "4b30b74a2711f3f0e0a45645681617080526d3",
        name: "Dodge Viper STR-10",
        availableAtLevel: 5,
        description: "Be careful when driving this car, it is pure dynamite!",
        url: "/assets/img-car/car5.png",
      },
      lane: 11,
      id: "4bd7beebf1d2352681a0832566ec94612ee2",
    },
  ],
};

export default game;
