import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();
let mail = ""; //ASSIGN EMAIL OF THE USER TO BE SEARCHED

const showUsers = (user: any)=>{
    console.log(`\n NAME : ${user.name}\nEMAIL ID : ${user.email}`);
}

async function Read() {
    try {
        //READING A SPECIFIC USER's DATA IN USERS TABLE
        const findUser = await prisma.users.findFirstOrThrow({
            where: {
             email: mail,
            }
         });
         console.log(`NAME : ${findUser.name}\nEMAIL ID : ${findUser.email}`);

        //READING MULTIPLE USERS DATA IN USERS TABLE
        const findUsers = await prisma.users.findMany();
        findUsers.map(showUsers);
        
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}

Read();