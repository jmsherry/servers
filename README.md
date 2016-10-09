#Basic Server Example

Servers:

1. `basic_server.js`: Basic with response (and a server log)
2. `file_server.js`: Static file server
3. `routed_server.js`: Server w/ route handlers
4. `api_server.js`: Server returning JSON*
5. `database_server.js`: A server that returns data from a database.

To run the examples, do `npm i` to install the modules, then `nodemon <filename>` to run that server.

(* JSON is a way we transport data across the wire. It stands for 'JavaScript Object Notation'.)

6. `proxy_server.js` is a way to intercept calls between servers and redirect/reformat them. It's here for info only...
