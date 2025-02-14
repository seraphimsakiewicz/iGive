import type { PrismaClient } from "@prisma/client";

export const seedBloodStorage = async (prisma: PrismaClient, hospitalId: number) => {
  const start = Date.now();
  console.log("Seeding blood types...");

  const bloodTypes = [
    'O(I) Rh+',
    'O(I) Rh-',
    'A(II) Rh+',
    'A(II) Rh-',
    'B(III) Rh+',
    'B(III) Rh-',
    'AB(IV) Rh+',
    'AB(IV) Rh-',
  ];

  const bloodStorages = await Promise.all(
    bloodTypes.map((bloodType) =>
      prisma.bloodStorage.create({
        data: {
          bloodType,
          quantity: 0,
          hospitalId,
        },
      })
    )
  );

  const end = Date.now();
  console.log(`Seeding blood types completed in ${end - start}ms`);

  return bloodStorages;
}; 