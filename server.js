const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const url = "http://192.168.0.16";


//app.use(bodyParser.urlencoded({ extended: true }));
//-------------------------------------------------------------------------
/*
app.configure(function () {
	app.use(express.bodyParser());
});
   */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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







//-------------------------------------------------------------------------
app.post('/api/room', (req, res) =>{
	console.log("/api/room");
	const ip = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;
	console.log(ip.slice(7) + "}post----");

	let roomName = req.body.roomName;
	let password = req.body.password;
	let userName = req.body.userName;
	
	console.log(roomName, password, userName);

	if(roomName === "" || password === ""){
		console.log("   input none!");
	}
	else{
		let type = "Make";
		let roomIndex = -1;
		room.forEach((r,i) => {
			if(r.name === roomName){
				roomIndex = i;
				type = "Join";
			}
		})

		if(type === "Make"){
			console.log("   room Make!");
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
			room[room.length - 1].userCount++;
			roomCount = roomCount + 1;

		}
		else if(type === "Join"){
			console.log("   room join!");
			let paramsUser = {
				id : room[roomIndex].userCount,
				index : room[roomIndex].user.length,
				name : userName,
				todo : 0,
				list : []
			}

			room[roomIndex].user.push(paramsUser);
			room[roomIndex].userCount = room[roomIndex].userCount + 1;
		}
	}
	res.send(room);

	//각 방 정보 출력
	/*
	for(let i = 0; i < roomCount; ++i)
		app.get('/api/room' + room[i].name, (req, res) => {
			res.send(room[i]);
		});
	*/
	//각 방 post 얻기
	for(let i = 0; i < roomCount; ++i)
		app.post('/api/room' + room[i].name, (req, res) => {
		console.log("/api/room" + room[i].name);
		console.log("----post----");
		
		let userId = req.body.userId;
		
		console.log(room[i].name + "exit : id(" + userId+")");
	
		let userIndex = -1;
		room[i].user.forEach((u,i) => {
			if(userId === u.id)
				userIndex = i;
		})

		room[i].user.splice(userIndex,1);
		
		if(room[i].user.length === 0)
			room.splice(i,1);

		res.send(room);
		});

});




//-------------------------------------------------------------------------
