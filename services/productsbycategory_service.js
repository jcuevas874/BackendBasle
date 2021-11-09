const { queryProduct } = require("../utils/index.js");

const getProductsByCategoryHandler = (req, res) => {
    const id = req.params.category;
    const sort = req.query.sort && req.query.sort !== "undefined" ? req.query.sort : "ASC";
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
          where c.id = '${id}'
          group by c.name, p.name
          order by name ${sort}`;
    queryProduct()
}

module.exports = { getProductsByCategoryHandler }
