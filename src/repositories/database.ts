// importar o sqlite para conectar com uma base de dados
import  sqlite3  from "sqlite3";

// definir o sqlite como o banco
const DBSOURCE = 'db.sqlite'

// criar as tabelas

const SQL_ITENS_CREATE = `
    CREATE TABLE itens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        descricao TEXT
    )`

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    }
    else {
        console.log("A base de dados foi conectada com sucesso.")
        database.run(SQL_ITENS_CREATE, (err) => {
            if (err) {
                // a tabela pode já ter sido criada
                console.error(err.message)
                throw err
            }
            else {
                console.log('Tabela Itens criada com sucesso.')
            }
        })
    }
})

// exportar tudo para ser usado nas requisições
export default database