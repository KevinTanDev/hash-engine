import HashEngineV2 from "../src/HashEngineV2.js";
import { generateTestElements } from '../utils/utils.js';

describe('HashEngineTestV2 merkletree', () => {

  it('HashEngineTestV2 merkletree with 100 test elements hex encoding and sha256 hash algorithm', async () => {
    const expected =
      'd7bb19d4223199157b158e151ce56a90ca8e00c5a3f5320d9fe84e1c84e53472';
    const elements = generateTestElements(100);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngineV2.execute(
      'merkleTree',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

  it('HashEngineTestV2 merkletree with 1_000 test elements hex encoding and sha256 hash algorithm', async () => {
    const expected =
      '15dc2d1d459790512baaec58de23ad0d86bfac3c4d07e4584d60b9209c476270';
    const elements = generateTestElements(1_000);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngineV2.execute(
      'merkleTree',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

  it('HashEngineTestV2 merkletree with 10_000 test elements hex encoding and sha256 hash algorithm', async () => {
    const expected =
      '1bd4247c9b1e4eb441f1d5cebbcc9242afff976674a12e3048fa6d1c97357596';
    const elements = generateTestElements(10_000);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngineV2.execute(
      'merkleTree',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

  it('HashEngineTestV2 merkletree with 50_000 test elements hex encoding and sha256 hash algorithm', async () => {
    const expected =
      'cb179f5c5ddaa610c1fe44f61c0d1b59b711a4c0959a61f881ed142762603b05';
    const elements = generateTestElements(50_000);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngineV2.execute(
      'merkleTree',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

  it('HashEngineTestV2 merkletree with 100_000 test elements hex encoding and sha256 hash algorithm', async () => {
    const expected =
      '47c66088f0023803bdd98a1cdc4a2381bc301bda7173798b886fc14eb843dd87';
    const elements = generateTestElements(100_000);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngineV2.execute(
      'merkleTree',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

});


describe('HashEngineTestV2 concat', () => {
  // Assert if setTimeout was called properly

  it('HashEngineTestV2 concat with 100 test elements hex encoding and sha256 hash algorithm', async () => {
    const expected =
      '17cce93c7728c9ebb54ddaaba6c4b740339071e40d44245075468f9118fe718e';
    const elements = generateTestElements(100);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngineV2.execute(
      'concat',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

  it('HashEngineTestV2 concat with 1_000 test elements hex encoding and sha256 hash algorithm', async () => {
    const expected =
      '0b5feb99251128f2ecd96381fc9fda2a73c9977941efe7e8617a3d602b8361ec';
    const elements = generateTestElements(1_000);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngineV2.execute(
      'concat',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

  it('HashEngineTestV2 concat with 10_000 test elements hex encoding and sha256 hash algorithm', async () => {
    const expected =
      '0c06b154bb5284143628cb6b51080e9c933453ff227e9cedb187b0bbd279fbc3';
    const elements = generateTestElements(10_000);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngineV2.execute(
      'concat',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

  it('HashEngineTestV2 concat with 50_000 test elements hex encoding and sha256 hash algorithm', async () => {
    const expected =
      '5e1d19fd422a9da5d10c41b7cd5341c687067a4bf6f9e8baa715b8c80189495b';
    const elements = generateTestElements(50_000);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngineV2.execute(
      'concat',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

  it('HashEngineTestV2 concat with 100_000 test elements hex encoding and sha256 hash algorithm', async () => {
    const expected =
      'd6351af32e25bce1227fe17816d48b3930bb070a8fce5d3ee36c7e3ee68793ec';
    const elements = generateTestElements(100_000);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngineV2.execute(
      'concat',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

});