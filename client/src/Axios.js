import { post } from 'axios';


export function roomJoin(roomName, password, userName){
    //console.log("post data!!");
    const url = "/api/room";
    const data = {
        roomName : roomName,
        password : password,
        userName : userName
    };
    //console.log(data);
    return post(url, data);
}


export function roomExit(roomName, userId){
    //console.log("post data!!");
    const url = "/api/room" + roomName;
    const data = {
        userId : userId
    };
    //console.log(data);
    return post(url, data);
}


export function setTodoIndex(roomName, userId, todoIndex){
    //console.log("post data!!");
    const url = "/api/room" + roomName;
    const data = {
        userId : userId,
        todoIndex : todoIndex
    };
    //console.log(data);
    return post(url, data);
}


export function addTodoList(roomName, userId, newTodoList){
    //console.log("post data!!");
    const url = "/api/room" + roomName;
    const data = {
        userId : userId,
        newTodoList : newTodoList
    };
    //console.log(data);
    return post(url, data);
}