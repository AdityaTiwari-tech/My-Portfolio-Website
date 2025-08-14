import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();
async function main() {
  // Seed the database with initial data
  const contact=await prisma.contact.upsert({
    where:{
        id: 1 // Assuming you want to upsert based on a unique identifier
    },
    update:{},
    create:{
        name: "Aditya Tiwari",
        email: "abc@gmail.com",
        subject: "Welcome to my portfolio",
        message: "This is a sample message for the contact form.",
        createdAt: new Date(),


    }
  })
  console.log({contact})
}
main()
.then(() => prisma.$disconnect())
.catch(async(e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
})
export default main;