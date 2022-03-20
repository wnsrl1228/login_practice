"use strict";
const UserStorage = require("./UserStorage");
class User {
    constructor(body) {
        this.body = body;
    }
    login() {
        const body = this.body;
        const {id,pwd} = UserStorage.getUserInfo(body.id);
        
        if (id){
            if (id===body.id && pwd===body.pwd){
                return {success:true};
            }
            return {success:false,msg:"비번틀림"};
        }
        return {success:false,msg:"존재안함"};

    }

}
module.exports = User;