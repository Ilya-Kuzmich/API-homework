const api = require('../app/api');

describe('API', function () {
    it('navigation', async function () {
        const resp = await api.navigation.getSummary();
        api.expect(resp.status).to.equal(200);
        api.expect(resp.headers['content-type']).to.equal('application/json');
        api.expect(resp.data.__versionInfo.options.loose).to.equal(false);
        api.expect(resp.data.Footer[2].children[3].title).to.equal('GitHub');
        api.expect(resp.data.__versionInfo.codeName).to.equal('snapshot');
        api.expect(resp.data).to.be.jsonSchema(api.schema.shemnavigation)
    });

   
    it('index', async function () {
        const resp = await api.index.getSummary();
        api.expect(resp.status).to.equal(200);
        api.expect(resp.data.id).to.equal('index');
        api.expect(resp.data.title).to.equal('');
        api.expect(resp.headers['content-type']).to.equal('application/json');
        api.expect(resp.data).to.be.jsonSchema(api.schema.shemindex)
    });

    it('announcements', async function () {
        const resp = await api.announcements.getSummary()
        api.expect(resp.status).to.equal(200);
        api.expect(resp.headers['content-type']).to.equal('application/json');
        api.expect(resp.headers['x-cache']).to.include('HIT');
        api.expect(resp.data['0'].linkUrl).to.equal('https://ng-conf.org/?utm_source=angular.io&utm_medium=referral');
        api.expect(resp.data).to.be.jsonSchema(api.schema.announcements)
    });
});