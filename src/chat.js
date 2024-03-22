 export function readchatdata1(chat){
  var mychat=chat.split(/\r?\n/)
  return mychat
  // console.log(mychat)
}
// export function split_find_ts_contact_text1(){
//   var json_arr = [];
//   for(var i=0;i<all_chats.length;i++){
//     var splits=all_chats[i].split(/ - |: /)
//      var ts=splits[0]
   
//     if (splits.length >= 2) {
//         var contact = splits[1];
//         var contactmatch = contact.match(/^[\d\s()+-]+$/) || contact.match(/^\w+$/);
        
//         if (contactmatch) {
//             var messages = splits.slice(2).join(": ");
//             json_arr.push({
//                 timestamp: ts,
//                 contact: contact,
//                 messages: messages
//             });
      
//          }  
//         else {
//             var messages = splits.slice(1).join(": ");
//             json_arr.push({
//                 timestamp: ts,
//                 contact: null,
//                 messages: messages
//             });
//         }  

//     }
// }
// // console.log(json_arr);
//    return json_arr
//   } 

//   export function creating_json1(){
//     var json=split_find_ts_contact_text()
//     const json_file=JSON.stringify(json,null,2)
//     return writeFileSync('jsonformat', json_file);
//   }
//     var all_chats=readchatdata()
//     var ts_contact_text=split_find_ts_contact_text(all_chats)
//     creating_json(ts_contact_text)
//     //console.log("json created")
//     return "json created"