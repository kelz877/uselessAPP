const express = require('express')
const router = express.Router()

//const Area = require('../models/model')



router.get('/', (req, res) => {
    res.render('index');
})
router.get('/updateStation', async (req, res) => {
    let areaList = await db.any('SELECT id, name, description, year, month, day, createdby FROM stationareas ORDER BY id DESC;')
    res.render('updateStation', {areaList: areaList});
})

router.get('/links', (req, res) => {
    res.render('links');
})

router.get('/map', (req, res) => {
    res.render('map')
})

router.get('/search', async(req, res) => {
    let areaList = await db.any('SELECT id, name, description, year, month, day, createdby FROM stationareas ORDER BY RANDOM() ;')
    res.render('search', {areaList: areaList})
})

router.get('/futureFeatures', (req, res) => {
    res.render('futureFeatures')
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

router.post('/search-station', async(req, res) =>  {
    let id = req.body.id

    db.none('UPDATE stationareas SET clickcount = clickcount + 1 WHERE id =$1', [id]).then(() => {

        res.render('search', {message: 'there are no swimming pools in this area!'})
    })
    //let clickcount = await db.any('SELECT clickcount FROM stationareas where id = $1)',[id])
          //  console.log(clickcount)
       // if(clickcount < 5){
           // res.render('search', {message: 'Duh There are no swimming pools in this area!'})
        //} else{

        //res.render('search', {message: 'There are no swimming pools in this area!'})}
    })



module.exports = router;