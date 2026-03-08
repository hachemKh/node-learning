const fs = require('fs').promises;

async function getAllUsers () {
  try {
    console.log ("\n...............................................Reading users from users.json file...\n");

    const data = await fs.readFile('./users.json' , 'utf-8');
    const users = JSON.parse(data);

    console.log ("========================================================================= All Users");

    users.forEach(user => {
      console.log (`ID: ${user.id} , Name : ${user.name} , Age : ${user.age}`);
    });
  }
  catch (err) {
    console.log("Error : " , err.message)
  }
}

getAllUsers();
