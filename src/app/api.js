// process.env.https_proxy = 'http://127.0.0.1:8888';
// process.env.http_proxy = 'http://127.0.0.1:8888';
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const BaseApi = require('./baseApi');
const chai = require('chai');
const Navigation = require('./endpoints/navigation');
const Index = require('./endpoints/index');
const Announcements = require('./endpoints/announcements');
const schema = require('./schemas/schema');
chai.use(require('chai-json-schema'));

class Api extends BaseApi {
    expect = chai.expect;

    navigation = new Navigation();
    index = new Index();
    announcements = new Announcements();

    schema = schema;
}

module.exports = new Api();