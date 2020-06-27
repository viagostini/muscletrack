import * as SQLite from 'expo-sqlite';

export const DatabaseConnection = {
  getConnection: () => SQLite.openDatabase('executions.db')
};