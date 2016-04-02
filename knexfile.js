module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/taco-valet' || process.env.DATABASE_URL
  }

};
