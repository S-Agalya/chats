

import { readFileSync } from 'fs';

var chat = readFileSync("./sample.txt", "utf-8").split(/\r?\n/);
var json_arr = [];

for (var i = 0; i < chat.length; i++) {
    var splitted_chat = chat[i].split(/ - |: /);
    var ts = splitted_chat[0];
    if (splitted_chat.length >= 2) {
        var contact = splitted_chat[1];
        var contactmatch = contact.match(/^[\d\s()+-]+$/) || contact.match(/^\w+$/);
        
        if (contactmatch) {
            var messages = splitted_chat.slice(2).join(": ");
            json_arr.push({
                timestamp: ts,
                contact: contact,
                messages: messages
            });
        } else {
            var messages = splitted_chat.slice(1).join(": ");
            json_arr.push({
                timestamp: ts,
                contact: null,
                messages: messages
            });
        }
    }
}

console.log(json_arr);
