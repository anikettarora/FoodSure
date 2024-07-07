const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://anikettarora:mern123@cluster0.nmbsqng.mongodb.net/foodSureMern?retryWrites=true&w=majority&appName=Cluster0'

// const connectToMongo = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect(mongoURI) 
//         console.log('Mongo connected')
//         
//     }
//     catch(error) {
//         console.log(error)
//         process.exit()
//     }
//     }
//     module.exports = connectToMongo;

const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected successfully");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err)
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                        //console.log(global.food_items);
                    }
                })
                // if(err) console.log(err)
                // else {
                //     global.food_items = data;
                //     //console.log(global.food_items);
                // }
            })
        }
    });
}
//we don't have to call we have to export that's why no curly braces
module.exports = mongoDB;

