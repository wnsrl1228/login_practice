"use strict";

const id = document.querySelector("#id");
const pwd = document.querySelector("#pwd");
const loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click",login);

function login(){
    if (!id.value) return alert("아이디 입력해주세요");
    if (!pwd.value){
        return alert("비밀번호 입력해주세요");
    }

    const req = {
        id : id.value,
        pwd : pwd.value,
    };
    fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(req),
    })
    .then((res)=> res.json())
    .then((res) => {
        if (res.success){
            location.href = "/";
        } else{
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    });

}

