# Theory Part

### Hur används HTTP-protokollet när du surfar in på en websida?


- HTTP stands for Hypertext Transfer Protocol and is used for browsing webpages. It gives every user a way to interact with the web, doing so by sending HTML files by transmitting HTTP messages between clients and server.


---


### Beskriv HTTP-protokollets vanligaste metoder och vad de gör.


- HTTP uses different kinds of request methods such as: GET (requests a specific resource like a user), POST (Adds a specific resource like a user or a message), PUT (Updates or replace a specific resource like user information), DELETE (Removes a resource like a user..) and PATCH (Can update a part of the body or the whole body).


---


### "http://localhost:3000/users" är en URI, beskriv vilka delar den består av och vad de kallas.


- The URI consists by a scheme (http), authority (//), host(localhost), port(3000) and a path (/users)


---


### På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.


#### Code example - GET - Fetch a user by name


- curl -s http://localhost:5000/student?name="Nisse" | jq .


```
{
  "address": {
    "street": "Lagerbringsväg 8D",
    "suite": "18",
    "city": "Lund"
  },
  "_id": "5cf0e2ffa2cb6d735811b9de",
  "name": "Nisse",
  "email": "sebastian.persson.91@gmail.com",
  "__v": 0
}
```


#### Code example - DELETE - Delete a user by ID


- curl -X DELETE localhost:5000/student/5cefc029a2cb6d735811b9be
```
{"address":{"street":"Lagerbringsväg 8D","suite":"18","city":"Lund"},"_id":"5cefc029a2cb6d735811b9be","name":"Sebastian Persson","email":"sebastian.persson.91@gmail.com","__v":0}
```

#### Code example - POST - Add a user by adding a header, and a user profile (object). String can be a name etc..)


- curl -X POST "http://localhost:5000/student" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"name\":\"string\",\"username\":\"string\",\"email\":\"string\",\"address\":{\"street\":\"string\",\"suite\":\"string\",\"city\":\"string\",\"zipcode\":\"string\",\"geo\":{\"lat\":0,\"lng\":0}}}"


```
{
  "name": "string",
  "username": "string",
  "email": "string",
  "address": {
    "street": "string",
    "suite": "string",
    "city": "string",
    "zipcode": "string",
    "geo": {
      "lat": 0,
      "lng": 0
    }
  },
  "id": 0,
  "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

---


### Feedback


###### Kursens takt
- Jag hade velat att kursen hade gått lite långsammare då jag är en person som vill ha mer tid på mig att göra en sak i taget för att verkligen förstå allt.


###### Kursmaterial
- Materialet har varit bra, men jag hade velat ha fler små uppgifter som byggs ihop med frontend. Även en del varierande uppgifter, att man hade använt request metoderna i fler uppgifter i olika scenarion.


###### Utlärning
- Något jag hade velat se lite mer av är förklaringar på all kod. Kanske att man hade byggt upp något samtidigt som man berättar steg för steg vad varje kod/funktion etc... gör och vad det betyder. Man kunde även ha lagt till en övergripande förklaring (kommentar) vid varje kodsnutt då vi är håller på och lär oss. Googla är en del av att koda men det är lättare att förstå om någon förklarar muntligt.

