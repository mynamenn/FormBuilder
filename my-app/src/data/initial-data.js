const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Name', stats: 'Sidebar', type: 'String', inputField: 'TextField' },
    'task-2': { id: 'task-2', content: 'Age', stats: 'Sidebar', type: 'Integer', inputField: 'TextField' },
    'task-3': { id: 'task-3', content: 'Loan Amount', stats: 'Sidebar', type: 'Float', inputField: 'TextField' },
    'task-4': { id: 'task-4', content: 'Period', stats: 'Sidebar', type: 'Integer', inputField: 'TextField' },
    'task-5': { id: 'task-5', content: 'Email', stats: 'Sidebar', type: 'Email', inputField: 'TextField' },
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
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2']
};


export default initialData;