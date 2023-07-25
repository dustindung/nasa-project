const launches = new Map();

const launch = {
  flightNumber: 100,
  missionName: "Kepler Exploration X",
  rocketType: "Explorer IS1",
  launchDate: new Date("December 27, 2023"),
  destination: "Kepler-442 b",
  customers: ["NASA", "NOAA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
