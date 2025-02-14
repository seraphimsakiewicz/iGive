import type { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

export const seedUsers = async (prisma: PrismaClient) => {
  const start = Date.now();
  console.log("Seeding users...");

  const hospital = await prisma.hospital.upsert({
    where: { email: "hospital@test.com" },
    update: {},
    create: {
      name: "Test Hospital",
      email: "hospital@test.com",
      password: await bcrypt.hash("password123", 10),
      address: "123 Test St",
      licenseNumber: "TEST123",
    },
  });

  const donor = await prisma.donor.upsert({
    where: { email: "donor@test.com" },
    update: {},
    create: {
      name: "Test Donor",
      email: "donor@test.com",
      password: await bcrypt.hash("password123", 10),
      bloodType: "O(I) Rh+",
    },
  });

  const end = Date.now();
  console.log(`Seeding users completed in ${end - start}ms`);

  return { hospital, donor };
}; 