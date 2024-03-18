import { readchatdata } from "./index";
import { split_find_ts_contact_text } from "./index";
import { creating_json } from "./index";

test("read chat data",()=>{
    expect (readchatdata()).toBe([
        '13/01/24, 02:11 - Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.'])

})


