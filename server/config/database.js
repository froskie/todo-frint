import loki from 'lokijs';

// initialize and export db
const db = new loki('tasks.json');
export default db;