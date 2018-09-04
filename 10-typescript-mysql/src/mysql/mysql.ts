import mysql = require('mysql');

export default class MySQL {

    private static _instance: MySQL;

    connection : mysql.Connection;
    isConnected : boolean = false;

    constructor() {
        console.log('Clase inicializada');
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password : 'bahamut',
            database: 'nodedb'
        });

        this.conectarDb();
    }

    private conectarDb() {
        this.connection.connect((err: mysql.MysqlError) => {
            if (err) {
                console.log(err.message);
                return;
            }

            this.isConnected = true;
            console.log('Base de datos online');
        });
    }
}