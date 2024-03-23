
//sample
// import { readFileSync } from 'fs';
// function whatsappchats(){


// var chat = readFileSync("./sample.txt", "utf-8").split(/\r?\n/);
// var json_arr = [];

// for (var i = 0; i < chat.length; i++) {
//     var splitted_chat = chat[i].split(/ - |: /);
//     var ts = splitted_chat[0];
//     if (splitted_chat.length >= 2) {
//         var contact = splitted_chat[1];
//         var contactmatch = contact.match(/^[\d\s()+-]+$/) || contact.match(/^\w+$/);
        
//         if (contactmatch) {
//             var messages = splitted_chat.slice(2).join(": ");
//             json_arr.push({
//                 timestamp: ts,
//                 contact: contact,
//                 messages: messages
//             });
      
//          }  
//         else {
//             var messages = splitted_chat.slice(1).join(": ");
//             json_arr.push({
//                 timestamp: ts,
//                 contact: null,
//                 messages: messages
//             });
//         }  

//     }
// }

// console.log(json_arr);

// }whatsappchats()


//sample 1
import {readFileSync,writeFileSync} from 'fs'
function readchatdata(){
  var chat=readFileSync('sample.txt','utf-8').split(/\r?\n/)
  return chat
}
function split_find_ts_contact_text(){
  var json_arr = [];
  for(var i=0;i<all_chats.length;i++){
    var splits=all_chats[i].split(/ - |: /)
     var ts=splits[0]
   
    if (splits.length >= 2) {
        var contact = splits[1];
        var contactmatch = contact.match(/^[\d\s()+-]+$/) || contact.match(/^\w+$/);
        
        if (contactmatch) {
            var messages = splits.slice(2).join(": ");
            json_arr.push({
                timestamp: ts,
                contact: contact,
                messages: messages
            });
         }  
        else {
            var messages = splits.slice(1).join(": ");
            json_arr.push({
                timestamp: ts,
                contact: null,
                messages: messages
            });
        }  

    }
}
// console.log(json_arr);
   return json_arr
  } 

  function creating_json(){
    var json=split_find_ts_contact_text()
    const json_file=JSON.stringify(json,null,2)
    return writeFileSync('jsonformat', json_file);
  }
    var all_chats=readchatdata()
    var ts_contact_text=split_find_ts_contact_text(all_chats)
    creating_json(ts_contact_text)
    console.log("json created")
    //return "json created"



//main prgm

// import { readFileSync,writeFileSync } from 'fs';
//function whatsappchats(){


// var chat = readFileSync("./whatsappchats.txt", "utf-8").split(/\r?\n/);
// var json_arr = [];

// for (var i = 0; i < chat.length; i++) {
//     var splitted_chat = chat[i].split(/ - |: /);
//     var ts = splitted_chat[0];
//     if (splitted_chat.length >= 2) {
//         var contact = splitted_chat[1];
//         var contactmatch = contact.match(/^[\d\s()+-]+$/) || contact.match(/^\w+$/);
        
//         if (contactmatch) {
//             var messages = splitted_chat.slice(2).join(": ");
//             json_arr.push({
//                 timestamp: ts,
//                 contact: contact,
//                 messages: messages
//             });
      
//          }  
//         else {
//             var messages = splitted_chat.slice(1).join(": ");
//             json_arr.push({
//                 timestamp: ts,
//                 contact: null,
//                 messages: messages
//             });
//         }  

//     }
// }

// const jsonFile = JSON.stringify(json_arr, null, 2);
//  writeFileSync('jsonfile', jsonFile);
//  console.log("success");

//}whatsappchats()


