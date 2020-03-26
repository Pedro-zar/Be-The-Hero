const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota/Recurso
 */

 /**
  * Metodos HTTP
  * 
  * GET: Busca informação no back-end
  * POST: Cria informação no back-end
  * PUT: Altera informação no back-end
  * DELETE: Deleta informação no back-end
  */


  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados após a rota "?" (Filtros, paginação, etc)
   * Route Params: Parâmetros usado para identificar recursos
   * Request Body: Corpo da requisição, usado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Orace, Microsoft SQL Server
    * NoSQL: MongodDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */


