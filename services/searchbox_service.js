const { queryProduct } = require("../utils/index.js");

const getSearchBoxHandler = async (req, res) => {
    const searchWord = req.params.searchValue;
    const category = req.params.category && req.params.category !== "undefined" ? req.params.category : null;
    const sort = req.query.sort && req.query.sort !== "undefined" ? req.query.sort : "ASC";
    let query = '';
    if (category && category !== 0) { 
      query = `select
          p.id, 
          p.name,
          p.url_image,
          p.price,
          p.discount,
          c.name as category,
          p.category
          from product as p 
          inner join category as c on p.category = c.id
          where c.id = '${category}' and p.name like '%${searchWord}%'
          group by c.name, p.name
          order by name ${sort}`;
    } else {
      query = `select
          p.id, 
          p.name,
          p.url_image,
          p.price,
          p.discount,
          c.name as category,
          p.category
          from product as p 
          inner join category as c on p.category = c.id
          where p.name like '%${searchWord}%'
          group by c.name, p.name
          order by name ${sort}`;
    }
    queryProduct()
};

module.exports = { getSearchBoxHandler }
