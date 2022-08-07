const { User } = require('../models');

const userData = [
    {
        username: "Jay_Dee",
        github: "JohnDoe",
        email: "Johndoe@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "Blee_bluh",
        github: "Bluh",
        email: "blah@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "Yoyo4games",
        github: "NickSchenck",
        email: "yoyo4games@yahoo.com",
        password: "31Aloe13"
    },
    {
        username: "Lee_Dempsky",
        github: "Lee",
        email: "LeeDemp@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "Enrique",
        github: "Sepata",
        email: "EnriqueS@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "pooja",
        github: "pooja",
        email: "pooja@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;