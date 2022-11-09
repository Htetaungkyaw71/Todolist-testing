import { add, tasks, remove } from '../script.js';

describe('Adding task to localStorage', () => {
  test('Test for add function', () => {
    const task = {
      id: 1,
      index: 1,
      description: 'good',
      complete: false,
    };
    add(task);
    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe('good');
  });

  test('Test for add function', () => {
    const task = {
      id: 2,
      index: 2,
      description: 'bad',
      complete: false,
    };
    add(task);
    expect(tasks.length).toBe(2);
    expect(tasks[1].description).toBe('bad');
  });

  test('Test for add function', () => {
    const task = {
      id: 3,
      index: 3,
      description: 'happy',
      complete: false,
    };
    add(task);
    expect(tasks.length).toBe(3);
    expect(tasks[2].description).toBe('happy');
  });
});

describe('Deleting task from localStorage', () => {
  test('Test for delete function', () => {
    const { id } = tasks[2];
    remove(id);
    expect(tasks.length).toBe(2);
  });
  test('Test for delete function', () => {
    const { id } = tasks[1];
    remove(id);
    expect(tasks.length).toBe(1);
  });
  test('Test for delete function', () => {
    const { id } = tasks[0];
    remove(id);
    expect(tasks.length).toBe(0);
  });
});