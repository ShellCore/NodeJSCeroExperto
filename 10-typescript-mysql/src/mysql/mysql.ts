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

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    static ejecutarQuery(query: string, callback: Function) {
        this.instance.connection.query(query, (err, results:Object[], fields) => {
            if (err) {
                console.log('Error en query');
                console.log(err);
                return callback(err);
            }

            if (results.length === 0) {
                callback('El registro solicitado no existe');
            } else {
                callback(null, results);
            }
        });
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