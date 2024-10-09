// import bcrypt from "bcrypt";
// import { db } from "@vercel/postgres";
// import { mounts, mountTypes, races, users } from "../lib/placeholder-data";

// const client = await db.connect();

// async function seedUsers() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return client.sql`
//         INSERT INTO users (name, email, password)
//         VALUES (${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT DO NOTHING;
//       `;
//     })
//   );

//   return insertedUsers;
// }

// async function seedMountTypes() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS mountTypes (
//       id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//       name VARCHAR(255) NOT NULL
//     );
//   `;

//   const insertedMountTypes = await Promise.all(
//     mountTypes.map(
//       (mountType) => client.sql`
//         INSERT INTO mountTypes (name)
//         VALUES (${mountType.name})
//         ON CONFLICT DO NOTHING;
//       `
//     )
//   );

//   return insertedMountTypes;
// }

// async function seedRaces() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS races (
//       id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//       name VARCHAR(100) NOT NULL,
//       mountTypeId INT,
//       code VARCHAR(10),
//       image VARCHAR(500),
//       gestTime INT
//     );
//   `;

//   const insertedRaces = await Promise.all(
//     races.map(
//       (race) => client.sql`
//         INSERT INTO races (name, mountTypeId, code, image, gestTime)
//         VALUES (${race.name}, ${race.mountTypeId}, ${race.code},${race.image},${race.gestTime})
//         ON CONFLICT DO NOTHING;
//       `
//     )
//   );

//   return insertedRaces;
// }

// async function seedMounts() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS mounts (
//       id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       reproMax INT NOT NULL,
//       reproDone INT NOT NULL DEFAULT 0,
//       isFertile BOOLEAN NOT NULL DEFAULT FALSE,
//       parents INT DEFAULT NULL
//     );
//   `;

//   const insertedMounts = await Promise.all(
//     mounts.map(
//       (mount) => client.sql`
//         INSERT INTO mounts (name, reproMax)
//         VALUES (${mount.name}, ${mount.reproMax})
//         ON CONFLICT DO NOTHING;
//       `
//     )
//   );

//   return insertedMounts;
// }

export async function GET() {
  // try {
  //   await client.sql`BEGIN`;
  //   await seedUsers();
  //   await seedMountTypes();
  //   await seedRaces();
  //   await seedMounts();
  //   await client.sql`COMMIT`;
  //   return Response.json({ message: "Database seeded successfully" });
  // } catch (error) {
  //   await client.sql`ROLLBACK`;
  //   return Response.json({ error }, { status: 500 });
  // }
}
