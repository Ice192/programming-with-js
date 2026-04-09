function force(mass, acceleration) {
  return mass * acceleration;
}

//Kinetic Energy
function kineticEnergy (mass, velocity) {
  const result = 1/2 * mass * velocity * velocity
  return result
}

// same as default export in ES module
module.exports = {
  force,
  kineticEnergy,
}
