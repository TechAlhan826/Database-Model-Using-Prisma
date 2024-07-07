import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

let name = "MOHAMMED ALHAN N"; // ASSIGN THE NAME OF THE USER TO BE CREATED
let mail = "technicalalhan786@gmail.com"; // ASSIGN THE EMAIL ID OF THE USER TO BE CREATED

let usersData: any = [{name: "MOHAMMED ALHAN N", email: "technicalalhan786@gmail.com"}];  // ADD YOUR ARRAY OF JSON OBJECTS SEPARATED BY COMMA HERE

async function Create() {
    try {
        //CREATING A SINGLE USER IN USERS TABLE
        const createUser = await prisma.users.create({
            data:{
                name: name,
                email: mail,
            }
        });
        console.log(createUser);

        //CREATING MULTIPLE USERS IN USERS TABLE
        const createUsers = await prisma.users.createMany({
            data: usersData, 
        });
        console.log(createUsers);
        
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}

Create();