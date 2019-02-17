const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/data/indexdata', 'get', require("./data/indexdata"));
Mock.mock('/data/sortdata', 'get', require('./data/sortdata'));
Mock.mock('/data/videodata', 'get', require('./data/videodata'));
Mock.mock('/data/mydata', 'get', require('./data/mydata'));
Mock.mock('/data/shoppingdata', 'get', require('./data/shoppingdata'));
Mock.mock('/data/productdata', 'get', require('./data/productdata'));
