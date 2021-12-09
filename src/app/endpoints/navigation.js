const BaseApi = require('../baseApi');

class Navigation extends BaseApi {
    async getSummary() {
        return this.get('/generated/navigation.json');
    }
}

module.exports = Navigation;