import { writable } from "svelte/store";

export const users=writable(
    [{
        id:1,
        userImg : "https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg",
        userName : "John",
        userEmail: "John@bitfumes.com",
        active:true
    },
    {   
        id:2,
        userImg : "https://tse4.mm.bing.net/th?id=OIP.ydzk1TTHOUmBDq8sIhZ9JwHaHa&pid=Api&P=0",
        userName : "Niky",
        userEmail: "Niky@bitfumes.com",
        active: false,
    },
    {
        id:3,
        userImg : "https://tse4.mm.bing.net/th?id=OIP.DktG3bZwa6AYh76EbTrxsAHaHa&pid=Api&P=0",
        userName : "Tanya",
        userEmail: "Tanya@bitfumes.com",
        active: false
    }
   ]
);

export const remove=({detail})=>{
    users.update((_users)=>_users.filter((user)=>user.id!==detail));
 }

 export const add = ({detail})=>{
    // users.push({id:users.length+1,userImg:users[0].userImg,...detail});
    users.update((_users)=>[{id:_users.length+1,userImg:_users[0].userImg,...detail},..._users]);
  }