const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
	}
	*/
]

app.get('/api/room', (req, res) => {
	res.send(room);
});

for(let i = 0; i < roomCount; ++i)
	app.get('/api/room/' + room[i].name, (req, res) => {
		res.send(room[i]);
});



app.post('/api/room', (req, res) =>{

	let roomName = req.body.roomName;
	let password = req.body.password;
	
	let params = {
		id : roomCount,
		name : roomName,
		password : password,
		user : []
	}


	room.push(params);
	roomCount = roomCount + 1;
});



app.listen(port,() => console.log("Listening on port " + port));
