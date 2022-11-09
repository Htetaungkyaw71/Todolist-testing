import { add, tasks } from '../script.js';

describe('Adding task to localstorage', () => {
  test('Test for add function', () => {
    const task = {
      id: 1,
      index: 1,
      descrption: 'good',
      complete: false,
    };
    add(task);
    expect(tasks.length).toBe(1);
    expect(tasks[0].descrption).toBe('good');
  });

  test('Test for add function', () => {
    const task = {
      id: 2,
      index: 2,
      descrption: 'bad',
      complete: false,
    };
    add(task);
    expect(tasks.length).toBe(2);
    expect(tasks[1].descrption).toBe('bad');
  });

  test('Test for add function', () => {
    const task = {
      id: 3,
      index: 3,
      descrption: 'happy',
      complete: false,
    };
    add(task);
    expect(tasks.length).toBe(3);
    expect(tasks[2].descrption).toBe('happy');
  });
});
