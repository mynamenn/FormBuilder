const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Name', stats: 'Sidebar', type: 'String', inputField: 'TextField', listValues: [] },
    'task-2': { id: 'task-2', content: 'Age', stats: 'Sidebar', type: 'Integer', inputField: 'TextField', listValues: [] },
    'task-3': { id: 'task-3', content: 'Amount', stats: 'Sidebar', type: 'Float', inputField: 'TextField', listValues: [] },
    'task-4': { id: 'task-4', content: 'Bank List', stats: 'Sidebar', type: 'String', inputField: 'BankList', listValues: [] },
    'task-5': { id: 'task-5', content: 'I accept the terms and conditions.', stats: 'Sidebar', type: 'String', inputField: 'Checkbox', listValues: [] },
    'task-6': { id: 'task-6', content: 'List', stats: 'Sidebar', type: 'String', inputField: 'DropDownList', listValues: ['a', 'b'] },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'main',
      taskIds: [],
    },
    'column-2': {
      id: 'column-2',
      title: 'Sidebar',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2'],
  initialLength: 6,
};


export default initialData;