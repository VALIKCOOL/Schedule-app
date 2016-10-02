'use strict'
var express = require('express'),
    fs = require("fs"),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    morgan = require('morgan'),
    runSequence = require('run-sequence');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.use(express.static('./app'));

app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "app/index.html"));
});

app.get('/data/getGroups', function (req, res) {
    var groupsFile = fs.readFileSync("./app/data/groups.json");
    var groupsData = JSON.parse(groupsFile);
    res.json(groupsData);
});

app.get('/data/getSchedule', function (req, res) {
    var scheduleFile = fs.readFileSync("./app/data/schedule.json");
    var scheduleData = JSON.parse(scheduleFile);
    res.json(scheduleData);
});

app.post('/data/addGroup', function (req, res) {
    var groupsFile = fs.readFileSync("./app/data/groups.json");
    var groupsData = JSON.parse(groupsFile);
    groupsData.groups.push(req.body);
    console.log(req.body);
    fs.writeFile("./app/data/groups.json", JSON.stringify(groupsData, null, 4), "utf8", function(err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
    res.sendStatus(200);
});

app.post('/data/removeGroup', function (req, res) {
    var groupsFile = fs.readFileSync("./app/data/groups.json");
    var groupsData = JSON.parse(groupsFile);
    console.log("req.body: " + req.body.groupId);

    var foundIndex = -1;
    for (var i = 0; i < groupsData.groups.length; i++) {
        if (groupsData.groups[i].name == req.body.groupId)
            foundIndex = i;
    }
    console.log("foundIndex: " + foundIndex);

    if (foundIndex != -1) {
        groupsData.groups.splice(foundIndex, 1);
    }
    fs.writeFile("./app/data/groups.json", JSON.stringify(groupsData, null, 4), "utf8", function(err){
        if (err) throw err;
        console.log('It\'s saved!');
    });
    res.sendStatus(200);
});

app.listen(8080, function () {
    console.log('Server running on port 8080!');
});