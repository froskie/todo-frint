import loki from 'lokijs';

// initialize and export db
const db = new loki('./tasks.db', { autosave: true });
export default db;