const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Name', stats: 'main', type: 'String', inputField: 'TextField', listValues: [] },
    'task-2': { id: 'task-2', content: 'Maximum Frequency', stats: 'main', type: 'Maximum Frequency', inputField: 'TextField', listValues: [] },
    'task-3': { id: 'task-3', content: 'Amount', stats: 'main', type: 'Float', inputField: 'TextField', listValues: [] },
    'task-4': { id: 'task-4', content: 'Bank List', stats: 'main', type: 'String', inputField: 'BankList', listValues: [] },
    'task-5': { id: 'task-5', content: 'I accept the terms and conditions.', stats: 'Sidebar', type: 'String', inputField: 'Checkbox', listValues: [] },
    'task-6': { id: 'task-6', content: 'List', stats: 'Sidebar', type: 'String', inputField: 'DropDownList', listValues: ['a', 'b'] },
    'task-7': { id: 'task-7', content: 'Frequency', stats: 'main', type: 'String', inputField: 'Frequency', listValues: [] },
    'task-8': { id: 'task-8', content: 'Purpose Of Payment', stats: 'main', type: 'String', inputField: 'TextField', listValues: [] },
    'task-9': { id: 'task-9', content: 'Email', stats: 'main', type: 'Email', inputField: 'TextField', listValues: [] },
    'task-10': { id: 'task-10', content: 'Business Model', stats: 'main', type: 'String', inputField: 'BusinessModel', listValues: [] },
    'task-11': { id: 'task-11', content: 'ID Type', stats: 'main', type: 'String', inputField: 'idType', listValues: [] },
    'task-12': { id: 'task-12', content: 'Effective Date', stats: 'Sidebar', type: 'String', inputField: 'Date', listValues: [] },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'main',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-7', 'task-8', 'task-9', 'task-10', 'task-11'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Sidebar',
      taskIds: ['task-5', 'task-6', 'task-12'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2'],
  initialLength: 12,
  saveChanges: false
};


export default initialData;