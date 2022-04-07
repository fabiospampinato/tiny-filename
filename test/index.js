
/* IMPORT */

import {describe} from 'fava';
import path from 'node:path';
import filename from '../dist/index.js';

/* MAIN */

describe ( 'Tiny Filename', it => {

  it ( 'works', t => {

    const actual = filename ( import.meta.url );
    const expected = path.join ( process.cwd (), 'test', 'index.js' );

    t.is ( actual, expected );

  });

});
