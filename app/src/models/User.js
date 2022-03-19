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

        
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.pwd[idx]===pwd){
        //         response.success = true;
        //         return res.json(response)
        //     }
        // }
    }

}
module.exports = User;