import * as fs from 'fs';
import * as path from 'path';

describe('stuff', function() {
    it('does NOT work, yo!', function() {
        // This would work in node.
        const x = require('./data.json');

        // This would work in node also.
        const y = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8');

        console.log(x);
        console.log(y);
    });
});
