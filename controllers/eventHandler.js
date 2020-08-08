const Event = require('../models/Event');

module.exports.getEvents = async function(req, res) {
  let events = await Event.find();
  return res.status(200).send(events);
}

module.exports.createEvent = async function(req, res) {
  let event = await Event.create(req.body);
  return res.status(201).send({
    error: false,
    event
  });
}

// module.exports.updateProduct = async function(req, res) {
//   const {id} = req.params;
//   let product = await Product.findByIdAndUpdate(id, req.body);

//   return res.status(202).send({
//     error: false,
//     product
//   });
// }

// module.exports.deleteProduct = async function(req, res) {
//   const {id} = req.params;
//   let product = await Product.findByIdAndDelete(id);
//   return res.status(202).send({
//     error: false,
//     product
//   });
// }
