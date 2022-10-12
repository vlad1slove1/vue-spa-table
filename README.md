## Description
**project in development*

![screenshot](https://imageup.ru/img191/4043025/spa-table.png)

I've started to learn Vue.js framework. This is my first project with simple functional. The table has sorting (A -> Z / Z -> A) at all columns, except date column.

There are a few goals, i'm trying to reach:
1. add filtering by three cases at once: 

    a) input with keyword (with submit event);
    
    b) column selector;
    
    c) option selector (equal, includes, more than, less than)

2. refactor the vue components to prettify whole structure
---

## Setup

You need to make 2 terminals at yours IDE. At first terminal you running fake JSON-server, at second terminal you compiling project.

**After ending of work, don't forget to stop executing of both terminals by typing CTRL+C (twice)!**

### Start fake JSON-server
```
json-server --watch db.json
```

### Compile and hot-reload for development
```
npm run serve
```
Then enter *<http://localhost:8080/>*

### Build the project
```
npm run build
```
