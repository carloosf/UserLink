const { request, response } = require("express")
const express = require("express")

const allUsers = [
    {
        username: "carlos",
        linkUser: [
            { nameLink: "Instagram", link: "instagram.com/carloosf.__", status : false},
            { nameLink: "GitHub", link: "github.com/carloosf", status : true},
            { nameLink: "Linkedin", link: "linkedin.com/in/carloosf", status : true}
        ]
    }
]

const linkRoutes = express.Router()

// C

linkRoutes.post("/post", (request, response) => {
    
    const { username } = request.body

    const newUser = {
        username,
    }

    allUsers.push(newUser)
    return response.status(201).json(allUsers)
})

// R

linkRoutes.get("/get", (request, response) => {
    return response.status(200).json(allUsers)
})


// U


// D



module.exports = linkRoutes