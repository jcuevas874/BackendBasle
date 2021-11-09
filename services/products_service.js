const { queryProduct } = require("../utils/index.js");


const getProductsHandler = async (req, res) => {
    const sort = req.query.sort && req.query.sort !== "undefined" ? req.query.sort : "ASC";
    const query = `select p.id,
      p.name,
      p.url_image,
      p.price, p.discount,
      c.name as category
      from product as p
      inner join category as c on p.category = c.id
      group by c.name, p.name
      order by name ${sort}
      `;
    const data = await queryProduct();
    console.log(data)
    res.status(200).json({ results: data });
}

module.exports = { getProductsHandler }
