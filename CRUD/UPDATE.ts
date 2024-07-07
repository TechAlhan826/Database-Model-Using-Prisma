import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();
let mail = ""; //ASSIGN EMAIL OF THE USER TO BE UPDATED
let newName = ""; //ASSIGN NEW NAME OF THE USER TO BE UPDATED

let usersData: any = [{name: "MOHAMMED ALHAN N", email: "technicalalhan786@gmail.com"}];  // ADD YOUR ARRAY OF JSON OBJECTS SEPARATED BY COMMA HERE

async function Update() {
    try {
        //BEFORE HOW WAS THE USER'S DATA
        const findUser = await prisma.users.findFirstOrThrow({
            where: {
             email: mail
            }
         });
         console.log(`---BEFORE---\nNAME : ${findUser.name}\nEMAIL ID : ${findUser.email}`);

        //UPDATING A SPECIFIC USER'S DATA IN USERS TABLE
        const updateUser = await prisma.users.update({
            where: {
             email: mail
            },
            data:{
                name: newName
            }
         });
         console.log(`\n---AFTER---\nNAME : ${updateUser.name}\nEMAIL ID : ${updateUser.email}`);

        //UPDATING MULTIPLE USERS DATA IN USERS TABLE
        const updateUsers = await prisma.users.updateMany({
            where: {
             email: usersData.email
            },
            data:{
                name: usersData.name
            }
         });
         console.log(`\n---AFTER---\nNAME : ${updateUsers.name}\nEMAIL ID : ${updateUsers.email}`);
        
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}

Update();