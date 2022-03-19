"use strict";
const users = {
    id: ['jun','junki'],
    pwd:['123','1234']
}

const output ={
    home : (req,res) => {
        res.render("home/index");
    },
    login :(req,res) => {
        res.render("home/login");
    },
};
const process = {
    login : (req,res) => {
        const id = req.body.id;
        const pwd = req.body.pwd;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pwd[idx]===pwd){
                return res.json({
                    success:true,
                })
            }
        }
        return res.json({
            success:false,
            msg:"실패"
        });
    },
};

module.exports ={
    output,
    process,
};