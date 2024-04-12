import { db, Posts } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Posts).values([
    { id: 4123, author: "John doe", content: "Hope you like Astro DB!" },
    { id: 123, author: "Jane doe", content: "EnjoY!!" },
  ]);
}
