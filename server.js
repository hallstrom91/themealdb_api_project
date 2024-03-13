// this is a simple nodejs server to handle registration and login function in mealDB-project.

//import dep..
import express from "express";
import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// setup
const fakeDB = path.join(__dirname, "./src/data/users.json");
const users = JSON.parse(fs.readFileSync(fakeDB, "utf8"));

//bcrypt for register and hashing password
//hash password
const hashPassword = async (password) => {
  const salt = 10;
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

// validate password at login
const validateUser = async (username, password) => {
  const users = JSON.parse(fs.readFileSync(fakeDB, "utf8"));
  for (const user of users) {
    if (user.username === username) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        return true;
      }
    }
  }
  return false;
};

// Register function

//check if user exists in DB already
const getUserByUsername = (username) => {
  const users = JSON.parse(fs.readFileSync(fakeDB, "utf8"));
  return users.find((user) => user.username === username);
};

// register user to fakeDB
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(fakeDB, "utf8"));
  if (getUserByUsername(username)) {
    console.log("User already exists");
    res.status(400).json({ error: "Username already exists." });
    return;
  } else {
    console.log("User register successful.");
  }
  const addUser = {
    id: users.length + 1,
    username,
    password: await hashPassword(password),
  };
  users.push(addUser);
  fs.writeFileSync(fakeDB, JSON.stringify(users, null, 2), "utf8");
  res.json({ message: "User is now registered! Welcome!" });
});

//simple login function
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  /*   const users = JSON.parse(fs.readFileSync(fakeDB, "utf8")); */
  if (await validateUser(username, password)) {
    console.log("Login Successful.");
    res.json({ message: "Login Successful." });
    /*   const user = getUserByUsername(username, password); */
  } else {
    console.log("Login failed.");
    res.status(401).json({ error: "incorrect credentials" });
  }
});

// add favorite meals to user
/* app.post("/addFavorite", (req, res) => {
    const userId = req.body.userId;
    const mealId = req.body.mealId;

    // get user from fakeDB
    const user = users.find((user) => user.id === userId)

    if (!user) {
        res.status(404).json({ error: "User not found."})
        return;
    }
    // add favorite meal by ID
    user.addFavorites.push(mealId);
    fs.writeFileSync(fakeDB, JSON.stringify(user), "utf8"
},)
 */

//app listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
