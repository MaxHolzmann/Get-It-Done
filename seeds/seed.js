/*************************************************
* 
* The purpose of this file is to seed your database 
* with starter data relevant to you spplication.
*
**************************************************/


const sequelize = require('../config/connection');
// This is an example, change this
const { User } = require('../models');

// This is an example, change this. This json file does not exist yet.
const userData = require('./userData.json');

// This is an example, change this
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
