import { DatabaseConnection } from './DatabaseConnection';

var db = null;

export default class DatabaseInit {

  constructor() {
    db = DatabaseConnection.getConnection();
    this.initDatabase();
  }

  private initDatabase() {
    var sql = [
      `DROP TABLE IF EXISTS executions;`,
      `CREATE TABLE IF NOT EXISTS executions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      exercise TEXT,
      weight INTEGER
      );`,

      `INSERT INTO executions(exercise, weight) VALUES('Supino Reto', 40);`,
      `INSERT INTO executions(exercise, weight) VALUES('Agachamento', 120);`
    ];

    db.transaction(
      tx => {
        for (var i = 0; i < sql.length; i++) { 
          console.log('execute sql: ' + sql[i]);
          tx.executeSql(sql[i]);
        }
      }, (error) => {
        console.log("error call back: " + JSON.stringify(error));
        console.log(error);
      }, () => {
        console.log('transaction complete call back');
      }
    )
  }

}