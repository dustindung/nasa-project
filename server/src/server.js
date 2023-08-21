const http = require("http");

const app = require("./app");
const { mongoConnect } = require("./services/mongo");
const { getPlanetsData } = require("./models/planets.model");
const { addDefaultLaunch, loadLaunchData } = require("./models/launches.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await getPlanetsData();
  await loadLaunchData();
  await addDefaultLaunch();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
