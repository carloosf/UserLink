const { request, response } = require("express")
const express = require("express")

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


const allUsers = [{ nome: "" }]
const linkRoutes = express.Router()


// C

linkRoutes.post("/", async (request, response) => {
    const { name } = request.body
    const todo = await prisma.todo.create({
        data: {
            name,
        },
    })
    return response.status(201).json(todo)
})

// R



// U


// D



module.exports = linkRoutes