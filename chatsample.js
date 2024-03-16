// import {readFileSync,writeFileSync} from 'fs'
// const chat=readFileSync('./sample.txt','UTF-8').split('\n')


// var pattern1=/\+?\d{2}\s\d{5}\s\d{5}/
// var pattern2=/\d{2}\/\d{2}\/\d{2}, \d{2}:\d{2}/;
// var pattern3= /:(.+)/;
            

// var json_arr=[]
// chat.forEach(line=>{
//     var ph=line.match(pattern1)
//     var timestamp=line.match(pattern2)
//     var textmessage=line.match(pattern3)
//     if(ph && timestamp && textmessage){
//         const[phone]=ph
//         const[ts]=timestamp
//         const[text]=textmessage
//        var json_obj={
//             phone:phone.trim(),
//             ts:ts.trim(),
//             text:text.trim().replace(/[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g, ''),
        
//         }

//         json_arr.push(json_obj)
//     }

    
// })
// var json_file=JSON.stringify(json_arr,null,2)
// writeFileSync('json',json_file)
// console.log("success")
//------------------------------------------------------------------------------------------------------------------
//read a file
//array of strings
//return date from the string 
//return time
//=> timestamp

//return phone number , text message

//with stringyfy create a json 

// JSON

// js obj notation
// data interchange format
// json.parse=> converts json string to js obj
// json.stringyfy=>converts js obj to json file

//----------------------------------------------------------------------------------------------------------------------

// import { readFileSync, writeFileSync } from 'fs';

// const chat = readFileSync('../chats/whatsappchats.txt', 'UTF-8');
// const lines = chat.split('\n');

// const datetime = lines.map(line => {
//     const parts = line.split(',');
//     const dateandtime = parts[0] ? parts[0].trim().split(' - ') : ''; // Split date and time
//     const date = dateandtime[0];
//     const time = parts[1]? parts[1].split(' - ')[0].trim():'' 
    
//     const phonenumbermatches = line.match(/\+\d{1,3}\s?\(?\d+\)?[\s-]?\d+[\s-]?\d+/g);
//     const ph = phonenumbermatches ? phonenumbermatches[0] : "not specified";

//     const text = parts.slice(1).join(',').replace(/\+\d{1,3}\s?\(?\d+\)?[\s-]?\d+[\s-]?\d+/g, '').trim();
//     const time_pattern=text.replace(/(\d{2}:\d{2})/,'')
   

//     const timestamp = date+" " + time; 

//     return { timestamp, ph, clean_text: time_pattern };
// });

// console.log(datetime);
// const jsonFile = JSON.stringify(datetime, null, 2);
// writeFileSync('json', jsonFile);
// console.log("success");


