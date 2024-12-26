const config = {
  user: "gael311", // sql user
  password: "297468", //sql user password
  server: "fe80::a41a:5a0f:69f4:d3ee%18", // if it does not work try- localhost
  database: "KittyCollector",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "SQLEXPRESS", // SQL Server instance name
  },
  port: 1433,
};

module.exports = config;
