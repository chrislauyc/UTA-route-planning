
const config = {
    client:"sqlite3",
    useNullAsDefault:true,
    migrations:{
        directory:"./data/migrations"
    },
    seeds:{
        directory:"./data/seeds"
    },
    pool:{
        afterCreate: (conn, done) => {
            conn.run('PRAGMA foreign_keys = ON', done)
        },
    }
};
module.exports={
    development:{
        ...config,
        connection:{
            filename:"./data/development.db3"
        }
    },
    deployment:{
        ...config,
        connection:{
            filename:"./data/UTA-route-planner.db3"
        }

    }
}
