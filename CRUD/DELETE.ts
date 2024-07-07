import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();
let mail = "" // ASSIGN EMAIL OF THE USER TO BE DELETED

let usersData: any = [{name: "MOHAMMED ALHAN N", email: "technicalalhan786@gmail.com"}];  // ADD YOUR ARRAY OF JSON OBJECTS SEPARATED BY COMMA HERE

async function Delete() {
    try {
        //BEFORE WHAT WAS THE USER DATA
        const findUser = await prisma.users.findFirstOrThrow({
            where: {
             email: mail
            }
         });
         console.log(`\n---CURRENT---\nNAME : ${findUser.name}\nEMAIL ID : ${findUser.email}`);

        //DELETING A SPECIFIC USER FROM USERS TABLE
        const deleteUser = await prisma.users.delete({
            where: {
             email: mail
            },
         });
         console.log(`\n---DELETED---\nNAME : ${deleteUser.name}\nEMAIL ID : ${deleteUser.email}`);

         //DELETING MULTIPLE USERS FROM USERS TABLE
         const deleteUsers = await prisma.users.deleteMany();
         console.log(`\n---DELETED---\nNAME : ${deleteUsers.name}\nEMAIL ID : ${deleteUsers.email}`);
        
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}

Delete();