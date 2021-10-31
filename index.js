require("dotenv").config()
const express = require('express')
const cors = require('cors')
const app = express()
const paginate = require('node-mysql-paginate');

const port = process.env.PORT
const { connection } = require("./connection.js")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const limit = (req, res, query) => {
    let limit = query.length;
    if(req.query.limit){
        limit = req.query.limit;
    }
    let page = 1;
    if(req.query.page){
        page = req.query.page;
    }
    paginate.paginate(connection, query, 
        {
            page : page,
            limit: limit,
        },
        (err, rows) => {
            if(err){
            console.log("An unexpected error happens.");
            return;
            }
            res.status(200).json(rows);;
        }
    );
}

app.get('/products', (req, res) => {
    const sort = req.query.sort !== 'null' ? req.query.sort : 'ASC'
    const query = `select p.id,
    p.name,
    p.url_image,
    p.price, p.discount,
    c.name as category
    from product as p
    inner join category as c on p.category = c.id
    group by c.name, p.name
    order by name ${sort}
    ` 
    limit(req, res, query)
});

app.get('/categories', (req, res) => {
        const query = 'select * from category order by name';
        connection.query(query, (err, result) => {
            if(err) throw err;
            res.status(200).json(result)
        })
})

app.get('/categories/:name', (req, res) => {
        const name = req.params.name
        const sort = req.query.sort !== 'null' ? req.query.sort : 'ASC'
        const query = `select
        p.id, 
        p.name,
        p.url_image,
        p.price,
        p.discount,
        c.name as category,
        p.category
        from product as p 
        inner join category as c on p.category = c.id
        where c.name = '${name}'
        group by c.name, p.name
        order by name ${sort}`;
        limit(req, res, query)
})

      
app.listen(port, () => console.log(`Server running on port ${port}`));