// chat.test.js

import {readchatdata1, split_find_ts_contact_text1,} from './chat.js'; // Assuming main.js exports a default function

test("separating the string", () => {
    const result = "13/01/24, 02:11 - Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.";
    expect(readchatdata1(result)).toEqual(["13/01/24, 02:11 - Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more."]);
});

test("converting string to json",()=>{
  const result1=["13/01/24, 02:11 - Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more."]
  expect(split_find_ts_contact_text1(result1)).toEqual(
    [{
    timestamp: '13/01/24, 02:11',
    contact: null,
    messages: 'Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.'       
  }])
})


