"use strict";
const fs = require("fs").promises;

class UserStorage {
    // #은 private와 같아 users를 못 부른다
    // static 설정해서 클래스 생성없이 쓸 수 있도록
    static #getUserInfo(data,id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser,info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }

    static getUsers(...fields) {
        // const users = this.#users;

        // reduce( callback(처음값 그리고 누적값, 두번째부터 쭉,인덱스 ),초기값)
        const newUsers = fields.reduce((newUsers, field)=>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            // return 값은 다음 newUsers값에 들어감
            return newUsers;
        },{});
        return newUsers
    }

    static getUserInfo(id){
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data,id);
        })
        .catch(console.error);
    }


    static save(userInfo) {
        // const users = this.#users;
        // users.id.push(userInfo.id);
        // users.name.push(userInfo.name);
        // users.pwd.push(userInfo.pwd);
        // return {success:true};
    }
}
module.exports = UserStorage;