const BaseApi = require('../baseApi');

class Announcements extends BaseApi {
    async getSummary() {
        return this.get('/generated/announcements.json');
    }
}

module.exports = Announcements;