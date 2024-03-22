// chat.test.js
import { readchatdata1, split_find_ts_contact_text1, creating_json1 } from "./chat";

test("separating the string", () => {
    const result = ["13/01/24, 02:11 - Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more."];
    expect(readchatdata1("13/01/24, 02:11 - Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.")).toEqual(result);
});


