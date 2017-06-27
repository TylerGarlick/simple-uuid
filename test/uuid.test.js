import Test from 'ava';
import UUID from '../src';

Test('generates', async t => {
  const uuid = await UUID();
  t.truthy(uuid);
  t.is(uuid.length, 36);
});

Test(`generates 100 random`, async t => {
  let values = [];
  for (let i = 0; i < 100; i++) {
    const uuid = await UUID();
    if (values.includes(uuid)) {
      throw new Error('Encountered a duplicate');
    }
    values = [...values, uuid];
  }

  t.is(values.length, 100);
});