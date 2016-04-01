module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/taco-valet',
    pool: {
      min: 2,
      max: 10
    }
  }

};
