/*
Title: Routes
Description: Application Routes
Author: Naushad Karim
*
*
*
*
*
*/

// dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandlers');
const {userHandler} = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;