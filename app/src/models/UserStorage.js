"use strict";
const db = require("../config/db");

class UserStorage {
    // #은 private와 같아 users를 못 부른다
    // static 설정해서 클래스 생성없이 쓸 수 있도록
    // static #getUserInfo(data,id) {
    //     const users = JSON.parse(data);
    //     const idx = users.id.indexOf(id);
    //     const userInfo = Object.keys(users).reduce((newUser,info)=>{
    //         newUser[info] = users[info][idx];
    //         return newUser;
    //     },{});

    //     return userInfo;
    // }

    // static #getUsers(data,isAll, fields){
    //     // reduce( callback(처음값 그리고 누적값, 두번째부터 쭉,인덱스 ),초기값)
    //     const users = JSON.parse(data);
    //     if(isAll) return users;
    //     const newUsers = fields.reduce((newUsers, field)=>{
    //         if (users.hasOwnProperty(field)){
    //             newUsers[field] = users[field];
    //         }
    //         // return 값은 다음 newUsers값에 들어감
    //         return newUsers;
    //     },{});
    //     return newUsers       
    // }

    // static getUsers(isAll, ...fields) {

    // }

    static getUserInfo(id){
        return new Promise((resolve, reject) =>{
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query,[id], (err,data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }


    static async save(userInfo) {
        return new Promise((resolve, reject) =>{
            const query = "INSERT INTO users(id, name, pwd) VALUE(?, ?, ?);";
            db.query(
                query,
                [userInfo.id, userInfo.name, userInfo.pwd],
                (err) => {
                    if (err) reject(`${err}`);
                    else resolve({success: true});
            });
        });
    }
}
module.exports = UserStorage;