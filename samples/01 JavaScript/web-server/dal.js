const sqlite3 = require('sqlite3').verbose();
const {Database} = sqlite3;
const {promisify} = require("util");

Database.prototype.allAsync = promisify(Database.prototype.all);

async function getAllUsers() {
    const db = new Database('test.db');
    try {
        return await db.allAsync("SELECT * FROM users");
    }
    finally {
        db.close();
    }

    // return new Promise((resolve,reject)=> {
    //     const db = new Database('test.db');
    //
    //     db.all("SELECT * FROM users", function (err, rows) {
    //         if(err) {
    //             reject(err);
    //             return;
    //         }
    //
    //         resolve(rows);
    //     });
    // });
}

async function insertUser(user) {
    return new Promise((resolve,reject)=> {
        const db = new Database('test.db');

        db.run("INSERT INTO users(name) VALUES(?)", user.name, function (err, rows) {
            if(err) {
                reject(err);
                return;
            }

            resolve();
        });
    });
}

async function test() {
    await insertUser({name: "Roni"});

    const res = await getAllUsers();
    console.log(res);
}

module.exports = {
    getAllUsers,
    insertUser,
}

// test();


