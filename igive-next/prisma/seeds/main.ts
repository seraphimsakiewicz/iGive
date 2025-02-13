import { PrismaClient } from "@prisma/client";
import { seedUsers } from "./0_users";
import { seedBloodStorage } from "./1_blood_types";

const prisma = new PrismaClient();

async function main() {
  const start = new Date();
  console.log("Seeding database...");

  const { hospital, donor } = await seedUsers(prisma);
  await seedBloodStorage(prisma, hospital.id);

  const end = new Date();
  console.log(`Seeding completed: ${end.getTime() - start.getTime()}ms`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }); 