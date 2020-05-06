To test locally

Start mongodb
    go to the folder where mongo installed (C:\Program Files\MongoDB\Server\4.2\bin)
    In command prompt run the command - "mongo"
    Note: you will not have any previous data, if you want the data to be stored, should specify data folder

Edit db.config.js file for pointing to local mongo url

Make sure to point the local api url from local ui project
    Modify the file http-common.js