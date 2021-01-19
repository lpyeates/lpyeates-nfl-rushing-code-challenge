const express = require('express');
const router = express.Router();

const data = require('../rushing.json');
//const rusher = require('../schemas/rusher');
const Rusher = require('../schemas/rusher');

async function getData(req, res, next) {
  try {
    result = await Rusher.find();
    res.status(200).send(JSON.stringify(result));
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getRushersByTDs(req, res, next) {
  try {
    result = await Rusher.find().sort({td: -1});
    res.status(200).send(JSON.stringify(result));
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getRushersByYards(req, res, next) {
  try {
    result = await Rusher.find().sort({yds: -1});
    res.status(200).send(JSON.stringify(result));
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getRushersByLong(req, res, next) {
  try {
    result = await Rusher.find().sort({long: -1});
    res.status(200).send(JSON.stringify(result));
  } catch (err) {
    res.status(500).send(err);
  }
}

router.get('/yards/', getRushersByYards);

router.get('/tds/', getRushersByTDs);

router.get('/long/', getRushersByLong);

router.get('/csv', getData);


async function setupDB(req, res) {
  let checkGood = true;
  for (runner in data) {
    yardsString = data[runner].Yds
    if (isNaN(yardsString)) {
      noCommas = yardsString.replace(/,/g, '');
      yardsString = noCommas;
    }
    longString = data[runner].Lng
    if (isNaN(longString)) {
      noT = longString.substring(0, longString.length - 1)
      longString = noT
    }
    const longInt = parseInt(longString);
    const yards = parseInt(yardsString);
    
    runnerToSave = new Rusher({ 
      player: data[runner].Player,
      team: data[runner].Team,
      pos: data[runner].Pos,
      att: data[runner].Att,
      attperg: data[runner][5],
      yds: yards,
      avg: data[runner].Avg,
      ydsperg: data[runner][8],
      td: data[runner].TD,
      long: longInt,
      first: data[runner][11],
      firstpercentage: data[runner][12],
      twentyplus: data[runner][13],
      fortyplus: data[runner][14],
      fumbles: data[runner].FUM,  
    });
    try {
      runnerToSave.save();
    }catch (err){
      checkGood = false;
    }
  }
  if (!checkGood) {
    res.status(500).send('its no good');
  }
  res.status(200).send('its good');
}
router.put('/setup/', setupDB);

router.get('/long/', function(req, res, next) {

});

module.exports = router;
