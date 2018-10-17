const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const express = require('express');

const { PORT, HTTP_STATUS_CODES, MONGO_URL, TEST_MONGO_URL } = require('./config');

let server;
const app = express(); // Initialize express server
