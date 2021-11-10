const getAllPodiums = () => [
  {
    id: 1,
    ocurredOn: new Date().toDateString(),
    firstPlace: {
      id: 1,
      name: "first place name",
    },
    secondPlace: {
      id: 3,
      name: "second place name",
    },
    thirdPlace: {
      id: 5,
      name: "third place name",
    },
  },
  {
    id: 2,
    ocurredOn: new Date().toDateString(),
    firstPlace: {
      id: 5,
      name: "first place name",
    },
    secondPlace: {
      id: 7,
      name: "second place name",
    },
    thirdPlace: {
      id: 2,
      name: "third place name",
    },
  },
  {
    id: 3,
    ocurredOn: new Date().toDateString(),
    firstPlace: {
      id: 3,
      name: "first place name",
    },
    secondPlace: {
      id: 2,
      name: "second place name",
    },
    thirdPlace: {
      id: 6,
      name: "third place name",
    },
  },
  {
    id: 4,
    ocurredOn: new Date().toDateString(),
    firstPlace: {
      id: 2,
      name: "first place name",
    },
    secondPlace: {
      id: 9,
      name: "second place name",
    },
    thirdPlace: {
      id: 7,
      name: "third place name",
    },
  },
  {
    id: 5,
    ocurredOn: new Date().toDateString(),
    firstPlace: {
      id: 7,
      name: "first place name",
    },
    secondPlace: {
      id: 2,
      name: "second place name",
    },
    thirdPlace: {
      id: 5,
      name: "third place name",
    },
  },
];

export default getAllPodiums;
