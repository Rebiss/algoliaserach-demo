exports.optionsSql = {
    host: process.env.HOST || "127.0.0.1",
    user: "root",
    database: process.env.DB_NAME || "algolia_mock"
}
exports.query = "SELECT * FROM mockdata;"
