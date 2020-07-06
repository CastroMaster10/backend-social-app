module.exports = {
    api: {
        port: process.env.API_PORT || 4000
    },
    post: {
        port: process.env.POST_PORT || 3001
    },
    jwt: {
        secret: process.env.JWT_SECRET || "Rodrigofamilia02"
    },
    mysql: {
        host: process.env.MYSQL_HOST || "remotemysql.com",
        user: process.env.MYSQL_USER || "uRJwCHtOc2",
        password: process.env.MYSQL_PASS || "zddM2qVbiz",
        database: process.env.MYSQL_DB || "uRJwCHtOc2"
    },
    mySqlService: {
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_SER || 3000
    }
}