// CONTROLLER DEPENDENCIES
const express = require('express')
const { People } = require('../models')
console.log(People)


// CONTROLLER ACTIONS


// INDEX
async function index(req, res, next){
    try{
        res.status(200).json(await People.find())
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

// CREATE
async function create(req, res, next){
    try{
        res.status(201).json(await People.create(req.body))
    }catch(err){
        res.status(400).json({error: err.message})
    }
}


// DETAIL
async function detail(req, res, next){
    try{
        res.status(201).json(await People.findById(req.params.id))
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

// DESTROY
async function destroy(req,res,next) {
    try {
      // delete people by ID
      res.json(await People.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };


// UPDATE
async function update(req,res,next) {
    try {
      // update people by ID, provide the form data, and return the updated document.
      res.json(
        await People.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };

module.exports = {
    create,
    index,
    getOne: detail,
    delete: destroy,
    update
}