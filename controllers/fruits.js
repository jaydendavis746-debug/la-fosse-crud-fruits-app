const Fruit = require("../models/Fruit");

const index = async (req, res) => {
  try {
    const fruits = await Fruit.showAll();
    res.status(200).send(fruits);
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const show = async (req, res) => {
  try {
    console.log(req);
    const fruit = await Fruit.show(req.params.name.toLowerCase());
    res.status(200).send(fruit);
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const create = async (req, res) => {
  try {
    const newFruit = await Fruit.create(req.body);
    //newFruit.save()
    res.status(201).send(newFruit);
  } catch (err) {
    res.status(409).send({ error: err.msg });
  }
};

const update = async (req, res) => {
  const name = req.params.name.toLowerCase();

  try {
    const fruit = await Fruit.show(name);
    const result = await fruit.update(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({ error: err });
  }
};


const remove = async (req, res) => {
    const name = req.params.name.toLowerCase();

    try{
        const fruit = await Fruit.show(name);
        const result = await fruit.delete();
        res.status(204).send(result)
    } catch(err){
        res.status(404).send(err.msg);
    }

}

module.exports = { index, show, create, update, remove };
