const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//-------------------------------------------------------------------------
/*
app.configure(function () {
	app.use(express.bodyParser());
});
   */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
});


let roomCount = 0;
let room = [
	/*
	{
		id : 0,
		name : "test",
		password : "123",
		user : [
			{
			id : 0,
			index : 0,
			name : "#ff6666",
			todo : 0,
			list : [
				"id : 0",
				"index : 0",
				"name : '#ff666'",
				"todo : 0",
				"list : []",
				"todo : 0",
				"todo : 0",
				"todo : 0",
				"todo : 0",
				"todo : 0",
				"todo : 0",
				"todo : 0"
			]
			},
			{
				id : 3,
				index : 1,
				name : "#321332",
				todo : 1,
				list : [
					"id : 3",
					"index : 1",
					"name : '#321332'",
					"todo : 1",
					"list : []"
				]
			},
			{
				id : 5,
				index : 2,
				name : "#c2c2c2",
				todo : 2,
				list : [
					"id : 5",
					"index : 2",
					"abcdefgfijklmnopqrstuvwxyz",
					"todo : 2",
					"list : []"
				]
			},
			{
				id : 3,
				index : 4,
				name : "#321332",
				todo : 1,
				list : [
					"id : 3",
					"index : 3",
					"name : '#321332'",
					"todo : 1",
					"list : []"
				]
			},
			{
				id : 3,
				index : 5,
				name : "#321332",
				todo : 1,
				list : [
					"id : 3",
					"index : 4",
					"name : '#321332'",
					"todo : 1",
					"list : []"
				]
			},
			{
				id : 3,
				index : 6,
				name : "#321332",
				todo : 1,
				list : [
					"id : 3",
					"index : 5",
					"name : '#321332'",
					"todo : 1",
					"list : []"
				]
			},
			{
				id : 3,
				index : 7,
				name : "#321332",
				todo : 1,
				list : [
					"id : 3",
					"index : 3",
					"name : '#3213321313121'",
					"todo : 1",
					"list : []"
				]
			}
		]
	}*/
]

app.listen(port,() => console.log("Listening on port " + port));
//-------------------------------------------------------------------------
app.get('/api/room', (req, res) => {
	res.send(room);
});

for(let i = 0; i < roomCount; ++i)
	app.get('/api/room/' + room[i].name, (req, res) => {
		res.send(room[i]);
});




//-------------------------------------------------------------------------
app.post('/api/room', (req, res) =>{
	console.log("입력받음!!");

	let type = req.body.type;
	let roomName = req.body.roomName;
	let password = req.body.password;
	let userName = req.body.userName;
	
	console.log("type = " + type);
	console.log("roomName = " + roomName);
	console.log("password = " + password);
	console.log("userName = " + userName);


	if(type === "None"){
		console.log("input none!");
	}
	else if(type === "Make"){

		let paramsRoom = {
			id : roomCount,
			name : roomName,
			password : password,
			userCount : 0,
			user : [{
				id : 0,
				index : 0,
				name : userName,
				todo : 0,
				list : []
			}]
		};


		room.push(paramsRoom);
		room[roomCount].userCount = room[roomCount].userCount + 1;
		roomCount = roomCount + 1;

	}
	else if(type === "Join"){

		let paramsUser = {
			id : room[roomName].userCount,
			index : room[roomName].user.length,
			name : userName,
			todo : 0,
			list : []
		}

		room[roomName].user.push(paramsUser);
		room[roomName].userCount = room[roomName].userCount + 1;
	}

	res.send(room);
});


//-------------------------------------------------------------------------

