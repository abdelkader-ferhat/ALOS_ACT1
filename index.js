var unirest = require("unirest")
var req1 = unirest("GET","http://localhost:3000/patient?_limit=10");
var req2 = unirest("GET","http://localhost:3000/patient");
req1.headers({
"cache-control": "no-cache",
})
req2.headers({
  "cache-control": "no-cache",
})
req1.end(function (res) {
  if (res.error) throw new Error(res,error)
  console.log("Show only the first 10 records",res.body)
})
req2.end(function (response) {
  console.log("\n\n")
  console.log(" The patient names that started with the little M:\n",response.body.filter((patient) => patient.sex.startsWith("m")))
})