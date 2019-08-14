const express = require('express')
const router = express.Router()

//const Area = require('../models/model')



router.get('/', (req, res) => {
    res.render('index');
})
router.get('/updateStation', async (req, res) => {
    let areaList = await db.any('SELECT id, name, description, year, month, day, createdby FROM stationareas ORDER BY id;')
    res.render('updateStation', {areaList: areaList});
})

router.get('/links', (req, res) => {
    res.render('links');
})



router.post('/add-location', (req, res) => {
    let name = req.body.name
    let description = req.body.description
    let year = req.body.year
    let month = req.body.month
    let day = req.body.day
    let createdby = req.body.createdby

    db.none('INSERT INTO stationareas(name, description, year, month, day, createdby) VALUES($1, $2, $3, $4, $5, $6)', [name, description, year, month, day, createdby]).then(() => {
        res.redirect('/updateStation')
    })


})









module.exports = router;