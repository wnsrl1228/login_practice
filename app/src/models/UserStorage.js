"use strict";

class UserStorage {
    // #은 private와 같아 users를 못 부른다
    // static 설정해서 클래스 생성없이 쓸 수 있도록
    static #users = {
        id:['jun','junjun'],
        pwd:['123','1234'],
        name:['kim','jun'],
    };

    static getUsers(...fields) {
        const users = this.#users;

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
}
module.exports = UserStorage;