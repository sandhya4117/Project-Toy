const express = require("express");
const logic = require("../business-logic-layer/toys-logic");
const router = express.Router();

// GET http://localhost:3001/api/toys 
router.get("/toys", async (request, response) => {
    try {
        const toys = await logic.getAllToysAsync();
        response.json(toys);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

//DELETE
router.post("/toysdelete", async (request, response) => {
    try {
        const id = request.body.id;
        const afterDelete = await logic.deleteToyAsync(id);
        response.json(afterDelete);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});
// GET http://localhost:3001/api/targetaudience 
router.get("/targetaudience", async (request, response) => {
    try {
        const targetAudience = await logic.getAllTargetAudienceAsync();
        response.json(targetAudience);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

// POST http://localhost:3001/api/toys
router.post("/toys", async (request, response) =>{
    try {
        const toy = request.body;
        // Need to call product.validatePost ...
        const addedToy = await logic.addToyAsync(toy);
        response.status(201).json(addedToy);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});


module.exports = router;

