# forgiven-mocha

[![Build Status](https://travis-ci.org/pghalliday/forgiven-mocha.svg?branch=master)](https://travis-ci.org/pghalliday/forgiven-mocha)
[![Build status](https://ci.appveyor.com/api/projects/status/egadusohuotqdo36/branch/master?svg=true)](https://ci.appveyor.com/project/pghalliday/forgiven-mocha/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/pghalliday/forgiven-mocha/badge.svg?branch=master)](https://coveralls.io/github/pghalliday/forgiven-mocha?branch=master)

[Mocha](https://mochajs.org/) UI factory for [Forgiven](https://www.npmjs.com/package/forgiven)

## Usage

```shell
npm install --save-dev mocha forgiven forgiven-mocha
```

```javascript
import {
  create,
} from 'forgiven';
import {
  mocha,
} from 'forgiven-mocha';

global.given = create(mocha);
```

## Contributing

Run unit tests and build before pushing/opening a pull request

- `npm test` - lint and test
- `npm start` - watch and build, etc with alarmist
- `npm run build` - run tests then build
- `npm run watch` - watch for changes and run build
- `npm run ci` - run build and submit coverage to coveralls
