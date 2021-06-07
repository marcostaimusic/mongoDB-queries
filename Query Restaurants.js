db.restaurants.find({});
db.restaurants.find().forEach(function(x){print(`${x.restaurant_id} ${x.name} ${x.borough} ${x.cuisine} `)});
db.restaurants.aggregate([{$project: {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0}}]);
db.restaurants.aggregate([{$project: {restaurant_id:1, name:1, borough:1, "address.zipcode":1, _id:0}}]);
db.restaurants.find({borough : "Bronx"});
db.restaurants.find({borough : "Bronx"}).limit(5).pretty();
db.restaurants.find({borough : "Bronx"}).limit(5).skip(5).pretty();
db.restaurants.find({grades: { $elemMatch:{score :{ $gt:90}}}});
db.restaurants.find({grades: {$elemMatch:{score: {$gt:80, $lt:100}}}});
db.restaurants.find({"address.coord.0" : {$lt : -95.754168}});
db.restaurants.find({$and:[{cuisine:{$not:/American\s/}}, {grades:{$elemMatch:{score:{$gt:70}}}}, {"address.coord.0" : {$lt : -65.754168}}]});
db.restaurants.find({$nor:[{cuisine:/American\s/}, {grades:{$not:{$elemMatch:{score:{$gt:70}}}}}, {"address.coord.0" : {$gt : -65.754168}} ]})   
db.restaurants.find({$and:[{cuisine:{$not:/American\s/}}, {grades:{$elemMatch:{grade:"A"}}}, {borough:{$ne:"Brooklyn"}}]}).sort({cuisine:1})
db.restaurants.find({name:{$regex: /^Wil/}}).forEach(function(x){print(`${x.name}; ${x.borough}; ${x.cuisine}`)});
db.restaurants.find({name:{$regex: /ces$/}}).forEach(function(x){print(`${x.name}; ${x.borough}; ${x.cuisine}`)});
db.restaurants.find({name:{$regex: /reg/i}}).forEach(function(x){print(`${x.name}; ${x.borough}; ${x.cuisine}`)});
db.restaurants.find({$and:[{borough:"Bronx"}, {cuisine: {$in:[/American\s/, /Chinese\s/ ]}}]});  //db.restaurants.find({$and:[{borough:"Bronx"}, {$or:[{cuisine:/American\s/}, {cuisine:/Chinese\s/} ]}]});
db.restaurants.find({borough:{$in:["Staten Island", "Queens", "bronx", "brooklyn"]}}).forEach(function(x){print(`${x.restaurant_id}; ${x.name}; ${x.borough}; ${x.cuisine}`)});
db.restaurants.find({borough:{$not:{$in:["Staten Island", "Queens", "Bronx", "Brooklyn"]}}}).forEach(function(x){print(`${x.restaurant_id} ${x.name} ${x.borough} ${x.cuisine} `)});
db.restaurants.find({grades:{$elemMatch:{score:{$lte:10}}}}).forEach(function(x){print(`${x.restaurant_id} ${x.name} ${x.borough} ${x.cuisine} `)});
db.restaurants.find({$and:[{cuisine:"Seafood"}, {$nor:[{cuisine:{$in:[/American\s/, /Chinese\s/]}}, {name:{$regex:/^Wil/}}]}]})
db.restaurants.find({$and:[{grades:{$elemMatch:{grade:"A", score:11, date:{$eq:new Date("2014-08-11T00:00:00Z")}}}}]}).forEach(function(x){print(`${x.restaurant_id}; ${x.name}; ${x.grades.map(x=>{return x.grade})}`)})
db.restaurants.find({$and:[{"grades.1.grade": "A"}, {"grades.1.score" : 9}, {"grades.1.date":{$eq:new Date("2014-08-11T00:00:00Z")}}]}).forEach(function(x){print(`${x.restaurant_id}; ${x.name}; ${x.grades.map(x=>{return x.grade})}`)})
db.restaurants.find({$and:[{"address.coord.1":{$gt:42}}, {"address.coord.1":{$lt:52}}]})
db.restaurants.find().sort({name: 1});
db.restaurants.find().sort({name: -1});
db.restaurants.find().sort({cuisine: 1, borough: -1});
db.restaurants.find({"address.street":{$exists: false}});
db.restaurants.find({"address.coord":{$type: "double"}});
db.restaurants.find({grades:{$elemMatch:{score:{$mod:[7,0]}}}}).forEach(function(x){print(`${x.restaurant_id}; ${x.name}; ${x.grades.map(x=>{return x.grade})}`)});
db.restaurants.find({name:{$regex:/mon/i}}).forEach(function(x){print(`${x.name}; ${x.borough}; ${x.address.coord}; ${x.cuisine}`)});
db.restaurants.find({name:{$regex:/^Mad/}}).forEach(function(x){print(`${x.name}; ${x.borough}; ${x.address.coord}; ${x.cuisine}`)});














