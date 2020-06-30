const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Name', stats: 'main' },
      'task-2': { id: 'task-2', content: 'Age', stats: 'main'  },
      'task-3': { id: 'task-3', content: 'Loan Amount', stats: 'Sidebar'  },
      'task-4': { id: 'task-4', content: 'Period', stats: 'Sidebar'  },
      'task-5': { id: 'task-5', content: 'Email', stats: 'main'  },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Form',
        taskIds: ['task-1', 'task-2', 'task-5'],
      },
      'column-2': {
        id: 'column-2',
        title: 'Sidebar',
        taskIds: ['task-3', 'task-4'],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: [ 'column-1', 'column-2']
  };
  
const data = [{
  id: 1,                                                 // Shown in card
  status: "Sidebar",
  title: "Name",
  content: "Name"       // Shown in card
}, {
  id: 2,
  status: "Sidebar",
  title: "Email",
  content: "Email"
}, {
  id: 3,
  status: "Sidebar",
  title: "Interest Rate",
  content: "Interest Rate"
},];

  export default initialData;