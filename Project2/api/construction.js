const construction = require("../data/construction");

const getAll = ({ id, product, material, role } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(construction);

    if (id) {
      result = result.filter((item) => {return item.id === Number(id)});
    }

    if (product) {
      result = result.filter(item => item.product.toLowerCase().includes(product.toLowerCase()));
    }

    if (material) {
      result = result.filter(item => item.material.toLowerCase().includes(material.toLowerCase()));
    }

    if (role) {
      result = result.filter(item => item.role === Number(role));
    }

    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const constructions = construction.find(constructions => constructions.id === id);

    if (constructions) {
      resolve({ code: 200, data: constructions });
    } else {
      resolve({
        code: 404,
        data: { message: `No constructions found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};