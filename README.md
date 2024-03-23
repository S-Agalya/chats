# Chat Data Processing Program README

This program is designed to process chat data from a text file and convert it into JSON format. The program consists of several functions to achieve this task.

## Functions

### `readchatdata()`

- Reads chat data from the file named `small_data.txt`.
- Splits the data into individual chat messages based on newline characters.
- Returns an array containing each chat message as a separate element.

### `split_find_ts_contact_text()`

- Takes an array of chat messages as input.
- Parses each chat message to extract timestamp, contact information, and messages.
- Constructs JSON objects for each chat message containing timestamp, contact, and messages.
- Returns an array of JSON objects representing each chat message.

### `creating_json()`

- Calls `split_find_ts_contact_text()` to obtain an array of JSON objects.
- Converts the array of JSON objects into a formatted JSON string.
- Writes the formatted JSON string to a file named `jsonformat`.


 Run the program by giving
    ```
    node index.js
    ```


TESTING 
For testing the code use jest 

INSTALLATION 
npm install jest 

npm init 

npm install

#update the package.json with the es module script

"type": "module"
