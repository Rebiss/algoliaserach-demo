require('dotenv').config()
const API_ID = process.env.API_ID,
    API_KEY  = process.env.API_KEY,
    INDEX    = process.env.INDEX;

const {optionsSql, query} = require('./sql/sql.config.js')
const options = { autoGenerateObjectIDIfNotExist: true }

//Local mock data or MySql data
const data = require('./mockData.json'),
    mysql  = require('mysql');

const algolia = require('algoliasearch')
const client  = algolia(API_ID, API_KEY)
const index   = client.initIndex(INDEX)

const funcQuery = (err, res) => {
    // if(err) throw err;
    index.saveObjects(res, options)
}

const connection = mysql.createConnection(optionsSql)
connection.connect()
connection.query(query, funcQuery)
connection.end()

/**
 * Local file @mockData
 * 
index
    .saveObjects(data, options )
    .then((data) => console.log('ALGOLIA_LOG>>>>>', data))
    .catch(ex => console.log(">>>>EXCEPTION", ex));

*/