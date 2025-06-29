module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Ganache default port
      network_id: "*", // This will match any network ID
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
