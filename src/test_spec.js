const fs = require('fs');
const path = require('path');

describe('stuff', function() {
    it('works, yo!', function() {
        // This would work in node.
        const x = require('./data.json');

        // This would work in node also.
        const y = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8');

        console.log(x);
        console.log(y);
    });
});
