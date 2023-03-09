# HashEngine
## Getting Started

This project is intended to be used as a library to hash documents

### Launch tests

```sh
npm install
npm run tests
```

### Functionalities

Hash engine can hash several document hashes into a root hash using the Merkletree model or concat model.

### Example

```typescript

import HashEngine from './hashEngine/HashEngine.js';

const stringElements = ["test"]
const hashRoot = await HashEngine.execute(
      'merkleTree',
      'sha256',
      'hex',
      stringElements,
    );
```

#### Supported hash algorithms

```[ 'DSA',
  'DSA-SHA',
  'DSA-SHA1',
  'DSA-SHA1-old',
  'RSA-MD4',
  'RSA-MD5',
  'RSA-MDC2',
  'RSA-RIPEMD160',
  'RSA-SHA',
  'RSA-SHA1',
  'RSA-SHA1-2',
  'RSA-SHA224',
  'RSA-SHA256',
  'RSA-SHA384',
  'RSA-SHA512',
  'dsaEncryption',
  'dsaWithSHA',
  'dsaWithSHA1',
  'dss1',
  'ecdsa-with-SHA1',
  'md4',
  'md4WithRSAEncryption',
  'md5',
  'md5WithRSAEncryption',
  'mdc2',
  'mdc2WithRSA',
  'ripemd',
  'ripemd160',
  'ripemd160WithRSA',
  'rmd160',
  'sha',
  'sha1',
  'sha1WithRSAEncryption',
  'sha224',
  'sha224WithRSAEncryption',
  'sha256',
  'sha256WithRSAEncryption',
  'sha384',
  'sha384WithRSAEncryption',
  'sha512',
  'sha512WithRSAEncryption',
  'shaWithRSAEncryption',
  'ssl2-md5',
  'ssl3-md5',
  'ssl3-sha1',
  'whirlpool' ]
```

#### Supported encoding

```[ 'ascii', 'utf8', 'utf-8', 'utf16le', 'ucs2', 'ucs-2', 'base64', 'base64url', 'latin1', 'binary', 'hex' ]```
