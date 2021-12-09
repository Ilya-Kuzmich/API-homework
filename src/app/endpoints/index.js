const BaseApi = require('../baseApi');

class Index extends BaseApi {
    async getSummary() {
        return this.get('generated/docs/index.json');
    }
}

module.exports = Index;