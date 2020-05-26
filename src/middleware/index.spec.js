
const td = require('testdouble')
describe('src/middleware', function () {
    let stubs;
    beforeEach(() => {
        stubs = {
            composes: td.replace('compose-middleware', {
                compose: td.function()
            }),
            morgan: td.replace('morgan', () => 'MORGAN'),
            cors: td.replace('cors', (options) => `CORS__${JSON.stringify(options)}`),
            bodyParser: td.replace('body-parser', {
                json: td.function()
            })
        }
        td.when(stubs.bodyParser.json()).thenReturn('BODY-PARSER')
        require('./index')
    })

    it('composes middleware', async () => {
        const option = JSON.stringify({
            methods: ['POST']
        })
        td.verify(stubs.composes.compose(['MORGAN', 'BODY-PARSER', `CORS__${option}`]))
    })
})