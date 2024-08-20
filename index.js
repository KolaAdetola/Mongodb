import dotenv from "dotenv"
import { MongoClient } from "mongodb"
dotenv.config()

const uri = process.env.MONGO_URI
const client = new MongoClient(uri)
const contactList= client.db("contact").collection("contactlist")

const connectToMyDataBase = async() => {
    try {
        await client.connect();
        console.log("Connected to MongoDB")
    }
    catch (err) {
        console.error("Failed to connect to MongoDB", err)
    }
}    

const user ={
    Email:"Kolawole.adetola@icloud.com",
    age:17,
    Firstname:"Adetola",
    Lastname:"Kolawole"

}

const main = async() => {
    try {
        await connectToMyDataBase();
        let result = await contactList.insertOne(user);
        console.log(result);
        // const db = client.db(dbname);
        // const collection = db.collection("bible_quotes");
    } catch (error) {
        console.error("Error occurred during the execution", error);
    }finally {
        await client.close();
    }
}

main();