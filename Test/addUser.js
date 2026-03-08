const fs = require('fs').promises;

async function addUser (name , age) {
  try {

    const data = await fs.readFile('./users.json' , 'utf-8');
    const users = JSON.parse(data);

    const newUser = {
      id : users.length + 1,
      name : name,
      age : age
    }

    users.push (newUser);

    await fs.writeFile('./users.json', JSON.stringify(users, null, 2));

    console.log ("\n.............................................New user added to users.json file...\n");
  }
  catch (err) {
    console.log("Error : " , err.message)
  }
}

addUser("Jawher", 18);
