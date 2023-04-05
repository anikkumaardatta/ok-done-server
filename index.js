const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());

const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0.elpkqgt.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    client.connect(err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
      });
    //---------All collection here---------
    const usersCollection = client.db("OkDone").collection("users");
    //---------All collection End here---------

    app.get("/", (req, res) => {
      res.send("OkDone Todo app server is running successfully");
    });

    // ================***** Anik Datta code goes here *****================
   
    // ================xxxxx Anik Datta code ends here xxxxx================
  } finally {
  }
}
run().catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`OkDone server running on port ${port}`);
});
