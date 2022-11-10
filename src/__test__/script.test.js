/* eslint-disable no-restricted-syntax */
import {
  add, remove, edit, completeAll, tasks,
} from '../script.js';
import { checking } from '../complete.js';

describe('Adding task to localStorage', () => {
  test('Test for add function', () => {
    const task = {
      id: 1,
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
      description: 'happy',
      complete: false,
    };
    add(task);
    expect(tasks.length).toBe(3);
    expect(tasks[2].description).toBe('happy');
  });
});

describe('Editing task from localStorage', () => {
  test('Test for edit function', () => {
    const { id } = tasks[0];
    const task = {
      id: 1,
      index: 1,
      description: 'edit_good',
      complete: false,
    };
    edit(id, task);
    expect(task).not.toBeNull();
    expect(tasks.length).toBe(3);
    expect(tasks[0].description).toBe('edit_good');
  });
});

describe('Check item complete status', () => {
  test('Test for checking function', () => {
    const { id } = tasks[0];
    const value = !tasks[0].complete;
    checking(value, id);
    expect(tasks.length).toBe(3);
    expect(tasks[0].complete).toBe(value);
  });
});

describe('Delete completed tasks', () => {
  test('Test for checking function', () => {
    completeAll();
    for (const task of tasks) {
      expect(task.complete).toBe(false);
    }
  });
});

describe('Deleting task from localStorage', () => {
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