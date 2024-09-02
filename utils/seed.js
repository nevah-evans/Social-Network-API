const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { gatherThoughts, usersUnite } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts'}).toArray();
    if(thoughtCheck.length) {
        await  connection.dropCollection('thoughts');
    }

    let userCheck = await connection.db.listCollections({name: 'users'}).toArray();
    if(userCheck.length) {
        await connection.dropCollection('users');
    }


    const users = [];
    const thoughts = gatherThoughts(10);

    for (let i = 0; i < 10; i++) {

        const username = usersUnite();
        const uniqueId = Math.floor(Math.random() * 1000);
        const email = `${username.split(' ')[0].replace(/\s/g, '').toLowerCase()}${uniqueId}@email.com`;
        // const first = fullName.split(' ')[0];
        // const last = fullName.split(' ')[1];

        users.push({
            username,
            email,
        });
    }

    console.log(users);

    const createdUsers = await User.create(users);

    const thoughtData = thoughts.map((thought, i) =>({
        thoughtText: thought.thoughtText,
        username: createdUsers[i].username,
    }));

    const createdThoughts = await Thought.create(thoughtData);

    for(let i = 0; i < createdUsers.length; i++) {
        createdUsers[i].thoughts.push(createdThoughts[i]._id);
        await createdUsers[i].save();
    }
    

    // await User.create({
    //     username: 'create_minds',
    //     email: 'createMinds@gmail.com',
    //     thoughts: [...thoughtData.map(({_id})=> _id)],
    // });

    console.log(users);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete!');
    process.exit(0);
});