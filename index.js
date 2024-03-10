// import { readFileSync, writeFileSync } from 'fs';

// const chat = readFileSync('./sample.txt', 'UTF-8');
// var lines = chat.split('\n');
//  const datetime=lines.map(datetime=>{
//     var parts=datetime.split(',')
//     var date=parts[0].trim()
    
//     const time = parts[1].split(' - ')[0].trim();
//     const text=parts[1].split('-')[1].trim()
// const phoneNumberMatches = datetime.match(/\+\d{1,3}\s?\(?\d+\)?[\s-]?\d+[\s-]?\d+/g);
//        var ph=phoneNumberMatches ? phoneNumberMatches[0] : "not specified";
//       const clean_test=text.replace(/\+\d{2}\s\d{5}\s\d{5}/, '').trim()
//     var timestamp=date +' '+ time
//     return {timestamp,ph,clean_test}
//  })
// console.log(datetime)


//another way coz does not support for the datas in whatsappchats.txt




import { readFileSync, writeFileSync } from 'fs';

const chat = readFileSync('./sample.txt', 'UTF-8');
const lines = chat.split('\n');

const datetime = lines.map(line => {
    const parts = line.split(',');
    const dateandtime = parts[0] ? parts[0].trim().split(' - ') : ''; // Split date and time
    const date = dateandtime[0];
    const time = parts[1]? parts[1].split(' - ')[0].trim():'' 
    
    const phonenumbermatches = line.match(/\+\d{1,3}\s?\(?\d+\)?[\s-]?\d+[\s-]?\d+/g);
    const ph = phonenumbermatches ? phonenumbermatches[0] : "not specified";

    const text = parts.slice(1).join(',').replace(/\+\d{1,3}\s?\(?\d+\)?[\s-]?\d+[\s-]?\d+/g, '').trim();
    const time_pattern=text.replace(/(\d{2}:\d{2})/,'')
   

    const timestamp = date+" " + time; 

    return { timestamp, ph, clean_text: time_pattern };
});

console.log(datetime);
const jsonFile = JSON.stringify(datetime, null, 2);
writeFileSync('samplejson', jsonFile);
console.log("success");





