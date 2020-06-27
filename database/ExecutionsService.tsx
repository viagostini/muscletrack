import { Execution } from './ExecutionModel';
import { DatabaseConnection } from './DatabaseConnection';

const table = 'executions';
const db = DatabaseConnection.getConnection();

export default class ExecutionService {

  static addData(param: Execution) {
    return new Promise((resolve, reject) =>db.transaction(
      tx => {
        tx.executeSql(
          `insert into ${table} 
          values (?, ?)`, 
          [param.exercise, param.weight], 
          (_, { insertId, rows }) => {
            console.log("id insert: " + insertId);
            resolve(insertId)
        }), (sqlError) => {
            console.log(sqlError);
        }}, (txError) => {
        console.log(txError);
      }));
  }

  static findAll() {
    return new Promise((resolve, reject) => db.transaction(tx => {
      tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
          resolve(rows)
      }), (sqlError) => {
          console.log(sqlError);
      }}, (txError) => {
      console.log(txError);
    }))
  }


}