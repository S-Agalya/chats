// import { readFileSync } from 'fs';

// function chatsplitting() {
// var all_chats=[] //stores all the splitted chats
// var chat = readFileSync("./sample.txt", "utf-8").split(/\r?\n/);
// for(var i=0;i<chat.length;i++){
//     var splitted_chat=chat[i].split(/ - |: /)
//     all_chats.push(splitted_chat)
//     // console.log(splitted_chat)
    
// }return all_chats
// }
// function getting_ts_ph_text(splitted_chat1){
//     var result=[]
//     for(var i=0;i<splitted_chat1.length;i++){
//         var inner_arr=splitted_chat1[i]  //contains the array inside the array(str1) .i.e [[str1][str2]]
//         var ts=inner_arr[0]  //for timestamp
//         var contact=inner_arr[1]  
//         // console.log({ts,contact})
//         result.push({ts,contact})
//     }return result 

 
// }

// var inputsplit=chatsplitting()
// var splitted_chat1=getting_ts_ph_text(inputsplit)
// console.log(splitted_chat1)



import { readFileSync } from 'fs';
function whatsappchat() {
var chat = readFileSync("./sample.txt", "utf-8").split(/\r?\n/);
for(var i=0;i<chat.length;i++){
    var splitted_chat=chat[i].split(/ - |: /)   //splitting based on - and :
    var ts=splitted_chat[0]
    var contact=splitted_chat[1]
    
    if(contact && contact.startsWith('-') && contact.endsWith(':') && contact.length==14 ){
        return contact
        
    }
   
     console.log({ts,contact})

    
}}whatsappchat()

