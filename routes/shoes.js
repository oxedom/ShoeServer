const express = require('express');
const shoeMode = require('../models/shoeModel');
const router = express.Router();
const logic = require('../models/shoe_BL')

router.get('/', async (req, res) => {
    let data = await logic.getAllShoes()
    return res.json(data)
  });

  router.get('/:id', async (req, res) => {
    let data = await logic.getOneShoe(req.params.id)
    return res.json(data)
  });  

  router.post('/', async (req, res) => {
    let status = await logic.addAShoe(req.body)
    return res.json(status)
  });

router.put('/:id',async (req, res) => {

  let status = await logic.updateAShoe(req.params.id,req.body)
  return res.json(status)
})

router.delete('/:id',async (req, res) => {

  let status = await logic.deleteShoe(req.params.id)
  return res.json(status)
})

module.exports = router 