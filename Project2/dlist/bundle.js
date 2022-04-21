(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    const construction = require("../data/construction");
    
    const getAll = ({ id, product, material, role } = {}) =>
      new Promise((resolve) => {
        let result = Array.from(construction);
    
        if (id) {
          result = result.filter(item => item.id === Number(id));
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
    
    },{"../data/construction":2}],2:[function(require,module,exports){
    module.exports= [{"id":1,"product":"Bulldozer","material":"Stone","role":"Surveyor"},
    {"id":2,"product":"Excavator","material":"Stone","role":"Surveyor"},
    {"id":3,"product":"Bulldozer","material":"Stone","role":"Supervisor"},
    {"id":4,"product":"Backhoe","material":"Plexiglass","role":"Construction Manager"},
    {"id":5,"product":"Crawler","material":"Wood","role":"Construction Worker"},
    {"id":6,"product":"Grader","material":"Stone","role":"Supervisor"},
    {"id":7,"product":"Backhoe","material":"Aluminum","role":"Architect"},
    {"id":8,"product":"Crawler","material":"Glass","role":"Construction Expeditor"},
    {"id":9,"product":"Scraper","material":"Plastic","role":"Electrician"},
    {"id":10,"product":"Bulldozer","material":"Stone","role":"Construction Worker"},
    {"id":11,"product":"Trencher","material":"Rubber","role":"Subcontractor"},
    {"id":12,"product":"Scraper","material":"Granite","role":"Construction Manager"},
    {"id":13,"product":"Bulldozer","material":"Plastic","role":"Project Manager"},
    {"id":14,"product":"Dragline","material":"Plexiglass","role":"Surveyor"},
    {"id":15,"product":"Bulldozer","material":"Rubber","role":"Estimator"},
    {"id":16,"product":"Dump Truck","material":"Plexiglass","role":"Surveyor"},
    {"id":17,"product":"Scraper","material":"Wood","role":"Surveyor"},
    {"id":18,"product":"Compactor","material":"Rubber","role":"Project Manager"},
    {"id":19,"product":"Crawler","material":"Aluminum","role":"Estimator"},
    {"id":20,"product":"Grader","material":"Plastic","role":"Subcontractor"},
    {"id":21,"product":"Excavator","material":"Stone","role":"Subcontractor"},
    {"id":22,"product":"Bulldozer","material":"Wood","role":"Construction Manager"},
    {"id":23,"product":"Bulldozer","material":"Steel","role":"Construction Worker"},
    {"id":24,"product":"Dump Truck","material":"Wood","role":"Architect"},
    {"id":25,"product":"Scraper","material":"Vinyl","role":"Construction Manager"},
    {"id":26,"product":"Compactor","material":"Wood","role":"Construction Expeditor"},
    {"id":27,"product":"Backhoe","material":"Glass","role":"Architect"},
    {"id":28,"product":"Trencher","material":"Glass","role":"Estimator"},
    {"id":29,"product":"Dragline","material":"Plastic","role":"Construction Foreman"},
    {"id":30,"product":"Compactor","material":"Plexiglass","role":"Estimator"},
    {"id":31,"product":"Grader","material":"Glass","role":"Project Manager"},
    {"id":32,"product":"Dump Truck","material":"Rubber","role":"Subcontractor"},
    {"id":33,"product":"Dump Truck","material":"Plastic","role":"Construction Expeditor"},
    {"id":34,"product":"Dump Truck","material":"Plastic","role":"Electrician"},
    {"id":35,"product":"Dragline","material":"Plastic","role":"Surveyor"},
    {"id":36,"product":"Excavator","material":"Aluminum","role":"Subcontractor"},
    {"id":37,"product":"Excavator","material":"Rubber","role":"Supervisor"},
    {"id":38,"product":"Excavator","material":"Granite","role":"Estimator"},
    {"id":39,"product":"Scraper","material":"Plastic","role":"Construction Manager"},
    {"id":40,"product":"Scraper","material":"Vinyl","role":"Surveyor"},
    {"id":41,"product":"Grader","material":"Plastic","role":"Surveyor"},
    {"id":42,"product":"Bulldozer","material":"Plastic","role":"Estimator"},
    {"id":43,"product":"Bulldozer","material":"Plexiglass","role":"Construction Expeditor"},
    {"id":44,"product":"Dump Truck","material":"Rubber","role":"Engineer"},
    {"id":45,"product":"Dump Truck","material":"Granite","role":"Surveyor"},
    {"id":46,"product":"Dump Truck","material":"Vinyl","role":"Construction Worker"},
    {"id":47,"product":"Dragline","material":"Glass","role":"Engineer"},
    {"id":48,"product":"Dump Truck","material":"Brass","role":"Construction Manager"},
    {"id":49,"product":"Grader","material":"Stone","role":"Construction Expeditor"},
    {"id":50,"product":"Dragline","material":"Glass","role":"Architect"},
    {"id":51,"product":"Crawler","material":"Rubber","role":"Subcontractor"},
    {"id":52,"product":"Skid-Steer","material":"Plexiglass","role":"Construction Expeditor"},
    {"id":53,"product":"Backhoe","material":"Plexiglass","role":"Supervisor"},
    {"id":54,"product":"Backhoe","material":"Aluminum","role":"Construction Expeditor"},
    {"id":55,"product":"Backhoe","material":"Wood","role":"Architect"},
    {"id":56,"product":"Scraper","material":"Wood","role":"Supervisor"},
    {"id":57,"product":"Grader","material":"Steel","role":"Subcontractor"},
    {"id":58,"product":"Dump Truck","material":"Steel","role":"Engineer"},
    {"id":59,"product":"Scraper","material":"Vinyl","role":"Project Manager"},
    {"id":60,"product":"Excavator","material":"Brass","role":"Supervisor"},
    {"id":61,"product":"Excavator","material":"Brass","role":"Subcontractor"},
    {"id":62,"product":"Trencher","material":"Wood","role":"Electrician"},
    {"id":63,"product":"Dump Truck","material":"Stone","role":"Construction Worker"},
    {"id":64,"product":"Bulldozer","material":"Rubber","role":"Project Manager"},
    {"id":65,"product":"Dump Truck","material":"Steel","role":"Construction Worker"},
    {"id":66,"product":"Dump Truck","material":"Glass","role":"Engineer"},
    {"id":67,"product":"Crawler","material":"Granite","role":"Construction Manager"},
    {"id":68,"product":"Scraper","material":"Glass","role":"Subcontractor"},
    {"id":69,"product":"Grader","material":"Aluminum","role":"Construction Worker"},
    {"id":70,"product":"Scraper","material":"Stone","role":"Estimator"},
    {"id":71,"product":"Grader","material":"Brass","role":"Engineer"},
    {"id":72,"product":"Grader","material":"Aluminum","role":"Estimator"},
    {"id":73,"product":"Dump Truck","material":"Stone","role":"Estimator"},
    {"id":74,"product":"Grader","material":"Plastic","role":"Construction Foreman"},
    {"id":75,"product":"Dump Truck","material":"Steel","role":"Architect"},
    {"id":76,"product":"Compactor","material":"Aluminum","role":"Project Manager"},
    {"id":77,"product":"Dump Truck","material":"Plexiglass","role":"Construction Foreman"},
    {"id":78,"product":"Backhoe","material":"Plastic","role":"Surveyor"},
    {"id":79,"product":"Grader","material":"Steel","role":"Construction Expeditor"},
    {"id":80,"product":"Backhoe","material":"Wood","role":"Electrician"},
    {"id":81,"product":"Bulldozer","material":"Plastic","role":"Surveyor"},
    {"id":82,"product":"Compactor","material":"Wood","role":"Construction Expeditor"},
    {"id":83,"product":"Backhoe","material":"Plastic","role":"Construction Expeditor"},
    {"id":84,"product":"Bulldozer","material":"Steel","role":"Surveyor"},
    {"id":85,"product":"Excavator","material":"Rubber","role":"Construction Manager"},
    {"id":86,"product":"Grader","material":"Plexiglass","role":"Construction Manager"},
    {"id":87,"product":"Excavator","material":"Plexiglass","role":"Project Manager"},
    {"id":88,"product":"Scraper","material":"Wood","role":"Construction Manager"},
    {"id":89,"product":"Dragline","material":"Rubber","role":"Subcontractor"},
    {"id":90,"product":"Excavator","material":"Glass","role":"Construction Manager"},
    {"id":91,"product":"Grader","material":"Wood","role":"Engineer"},
    {"id":92,"product":"Trencher","material":"Brass","role":"Estimator"},
    {"id":93,"product":"Grader","material":"Wood","role":"Construction Foreman"},
    {"id":94,"product":"Skid-Steer","material":"Stone","role":"Construction Manager"},
    {"id":95,"product":"Dump Truck","material":"Aluminum","role":"Estimator"},
    {"id":96,"product":"Compactor","material":"Plexiglass","role":"Subcontractor"},
    {"id":97,"product":"Grader","material":"Brass","role":"Construction Manager"},
    {"id":98,"product":"Bulldozer","material":"Plexiglass","role":"Architect"},
    {"id":99,"product":"Skid-Steer","material":"Stone","role":"Construction Foreman"},
    {"id":100,"product":"Trencher","material":"Granite","role":"Construction Foreman"},
    {"id":101,"product":"Crawler","material":"Brass","role":"Construction Expeditor"},
    {"id":102,"product":"Grader","material":"Brass","role":"Supervisor"},
    {"id":103,"product":"Grader","material":"Granite","role":"Engineer"},
    {"id":104,"product":"Skid-Steer","material":"Aluminum","role":"Estimator"},
    {"id":105,"product":"Dragline","material":"Vinyl","role":"Subcontractor"},
    {"id":106,"product":"Backhoe","material":"Granite","role":"Engineer"},
    {"id":107,"product":"Scraper","material":"Plastic","role":"Surveyor"},
    {"id":108,"product":"Backhoe","material":"Vinyl","role":"Architect"},
    {"id":109,"product":"Compactor","material":"Steel","role":"Construction Worker"},
    {"id":110,"product":"Trencher","material":"Rubber","role":"Construction Worker"},
    {"id":111,"product":"Scraper","material":"Brass","role":"Architect"},
    {"id":112,"product":"Skid-Steer","material":"Wood","role":"Estimator"},
    {"id":113,"product":"Dragline","material":"Steel","role":"Electrician"},
    {"id":114,"product":"Scraper","material":"Vinyl","role":"Project Manager"},
    {"id":115,"product":"Crawler","material":"Stone","role":"Construction Manager"},
    {"id":116,"product":"Trencher","material":"Plastic","role":"Supervisor"},
    {"id":117,"product":"Dump Truck","material":"Steel","role":"Architect"},
    {"id":118,"product":"Scraper","material":"Brass","role":"Construction Expeditor"},
    {"id":119,"product":"Excavator","material":"Plexiglass","role":"Estimator"},
    {"id":120,"product":"Compactor","material":"Granite","role":"Engineer"},
    {"id":121,"product":"Backhoe","material":"Steel","role":"Construction Worker"},
    {"id":122,"product":"Skid-Steer","material":"Steel","role":"Engineer"},
    {"id":123,"product":"Scraper","material":"Glass","role":"Electrician"},
    {"id":124,"product":"Compactor","material":"Vinyl","role":"Surveyor"},
    {"id":125,"product":"Bulldozer","material":"Stone","role":"Architect"},
    {"id":126,"product":"Backhoe","material":"Vinyl","role":"Electrician"},
    {"id":127,"product":"Compactor","material":"Steel","role":"Construction Manager"},
    {"id":128,"product":"Trencher","material":"Glass","role":"Subcontractor"},
    {"id":129,"product":"Skid-Steer","material":"Vinyl","role":"Project Manager"},
    {"id":130,"product":"Excavator","material":"Stone","role":"Project Manager"},
    {"id":131,"product":"Scraper","material":"Rubber","role":"Surveyor"},
    {"id":132,"product":"Scraper","material":"Plexiglass","role":"Construction Worker"},
    {"id":133,"product":"Skid-Steer","material":"Vinyl","role":"Engineer"},
    {"id":134,"product":"Dump Truck","material":"Aluminum","role":"Construction Foreman"},
    {"id":135,"product":"Grader","material":"Wood","role":"Estimator"},
    {"id":136,"product":"Skid-Steer","material":"Brass","role":"Project Manager"},
    {"id":137,"product":"Scraper","material":"Steel","role":"Subcontractor"},
    {"id":138,"product":"Bulldozer","material":"Aluminum","role":"Surveyor"},
    {"id":139,"product":"Backhoe","material":"Rubber","role":"Surveyor"},
    {"id":140,"product":"Backhoe","material":"Steel","role":"Construction Expeditor"},
    {"id":141,"product":"Trencher","material":"Rubber","role":"Construction Foreman"},
    {"id":142,"product":"Skid-Steer","material":"Steel","role":"Estimator"},
    {"id":143,"product":"Dragline","material":"Vinyl","role":"Estimator"},
    {"id":144,"product":"Scraper","material":"Vinyl","role":"Construction Manager"},
    {"id":145,"product":"Skid-Steer","material":"Aluminum","role":"Surveyor"},
    {"id":146,"product":"Excavator","material":"Vinyl","role":"Construction Worker"},
    {"id":147,"product":"Bulldozer","material":"Rubber","role":"Estimator"},
    {"id":148,"product":"Trencher","material":"Plexiglass","role":"Electrician"},
    {"id":149,"product":"Skid-Steer","material":"Plastic","role":"Construction Foreman"},
    {"id":150,"product":"Bulldozer","material":"Granite","role":"Engineer"},
    {"id":151,"product":"Skid-Steer","material":"Wood","role":"Supervisor"},
    {"id":152,"product":"Bulldozer","material":"Brass","role":"Engineer"},
    {"id":153,"product":"Compactor","material":"Stone","role":"Construction Worker"},
    {"id":154,"product":"Excavator","material":"Plexiglass","role":"Estimator"},
    {"id":155,"product":"Dragline","material":"Granite","role":"Surveyor"},
    {"id":156,"product":"Backhoe","material":"Plexiglass","role":"Surveyor"},
    {"id":157,"product":"Backhoe","material":"Steel","role":"Construction Manager"},
    {"id":158,"product":"Compactor","material":"Stone","role":"Construction Manager"},
    {"id":159,"product":"Crawler","material":"Wood","role":"Project Manager"},
    {"id":160,"product":"Dump Truck","material":"Steel","role":"Subcontractor"},
    {"id":161,"product":"Dump Truck","material":"Stone","role":"Architect"},
    {"id":162,"product":"Bulldozer","material":"Brass","role":"Electrician"},
    {"id":163,"product":"Dragline","material":"Brass","role":"Electrician"},
    {"id":164,"product":"Compactor","material":"Steel","role":"Electrician"},
    {"id":165,"product":"Compactor","material":"Glass","role":"Engineer"},
    {"id":166,"product":"Excavator","material":"Glass","role":"Construction Expeditor"},
    {"id":167,"product":"Crawler","material":"Vinyl","role":"Subcontractor"},
    {"id":168,"product":"Dragline","material":"Brass","role":"Construction Manager"},
    {"id":169,"product":"Bulldozer","material":"Vinyl","role":"Supervisor"},
    {"id":170,"product":"Skid-Steer","material":"Stone","role":"Construction Worker"},
    {"id":171,"product":"Trencher","material":"Rubber","role":"Construction Foreman"},
    {"id":172,"product":"Crawler","material":"Rubber","role":"Electrician"},
    {"id":173,"product":"Excavator","material":"Plastic","role":"Estimator"},
    {"id":174,"product":"Crawler","material":"Aluminum","role":"Subcontractor"},
    {"id":175,"product":"Skid-Steer","material":"Aluminum","role":"Electrician"},
    {"id":176,"product":"Dump Truck","material":"Brass","role":"Supervisor"},
    {"id":177,"product":"Bulldozer","material":"Rubber","role":"Construction Worker"},
    {"id":178,"product":"Bulldozer","material":"Stone","role":"Construction Foreman"},
    {"id":179,"product":"Skid-Steer","material":"Glass","role":"Project Manager"},
    {"id":180,"product":"Dump Truck","material":"Steel","role":"Electrician"},
    {"id":181,"product":"Compactor","material":"Granite","role":"Supervisor"},
    {"id":182,"product":"Skid-Steer","material":"Aluminum","role":"Project Manager"},
    {"id":183,"product":"Grader","material":"Stone","role":"Subcontractor"},
    {"id":184,"product":"Bulldozer","material":"Stone","role":"Construction Foreman"},
    {"id":185,"product":"Bulldozer","material":"Stone","role":"Engineer"},
    {"id":186,"product":"Excavator","material":"Vinyl","role":"Construction Worker"},
    {"id":187,"product":"Grader","material":"Plexiglass","role":"Estimator"},
    {"id":188,"product":"Excavator","material":"Plexiglass","role":"Electrician"},
    {"id":189,"product":"Dragline","material":"Plexiglass","role":"Engineer"},
    {"id":190,"product":"Compactor","material":"Aluminum","role":"Supervisor"},
    {"id":191,"product":"Compactor","material":"Rubber","role":"Architect"},
    {"id":192,"product":"Grader","material":"Aluminum","role":"Construction Manager"},
    {"id":193,"product":"Grader","material":"Brass","role":"Construction Expeditor"},
    {"id":194,"product":"Excavator","material":"Plexiglass","role":"Estimator"},
    {"id":195,"product":"Trencher","material":"Vinyl","role":"Construction Expeditor"},
    {"id":196,"product":"Skid-Steer","material":"Aluminum","role":"Surveyor"},
    {"id":197,"product":"Grader","material":"Aluminum","role":"Engineer"},
    {"id":198,"product":"Dragline","material":"Glass","role":"Construction Foreman"},
    {"id":199,"product":"Bulldozer","material":"Aluminum","role":"Construction Worker"},
    {"id":200,"product":"Excavator","material":"Granite","role":"Construction Manager"}]
    },{}],3:[function(require,module,exports){
    const { getAll } = require("./api/construction.js");
    
    const form = document.querySelector('form');
    
    const renderTable = data => {
      const tableBody = document.getElementById("table-body");
    
      if (!tableBody) {
        throw new Error("No table element found");
      }
    
      let source = data;
    
      const rows = source.reduce(
        (acc, { id, product, material, role }) =>
          acc +
          `<tr id="table-row-${id}"><td>${id}</td><td>${product}</td><td>${material}</td><td>${role}</td></tr>`,
        ``
      );
    
      tableBody.innerHTML = rows;
    };
    
    getAll().then(({ data }) => renderTable(data));
    
    const onSubmit = event => {
      event.preventDefault();
    
      const id = event.target.id.value;
      const product = event.target.product.value;
      const material = event.target.material.value;
      const role = event.target.role.value;
    
      console.log(id, product, material, role);
    
      getAll({id: id, product: product, material: material, role: role}).then(({ data }) => renderTable(data));
    };
    
    const onReset = () => {
      getAll().then(({ data }) => renderTable(data));
    };
    
    form.onsubmit = onSubmit;
    form.onreset = onReset;
    },{"./api/construction.js":1}]},{},[3]);