import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const testData = [
  {
    title: "リーダブルコード",
    author: "Dustin Boswell",
    price: 2860,
    publisher: "オライリージャパン",
    published: "2012",
    image: "https://example.com/readable-code.jpg",
    memo: "コードの可読性について学ぶ良書",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 4400,
    publisher: "KADOKAWA",
    published: "2017",
    image: "https://example.com/clean-code.jpg",
    memo: "プログラミングの基本原則を学ぶ",
  },
  {
    title: "プログラミング言語Go",
    author: "Alan A.A. Donovan",
    price: 3520,
    publisher: "丸善出版",
    published: "2016",
    image: "https://example.com/go-book.jpg",
    memo: "Go言語の基礎から応用まで",
  },
];

const seed = async () => {
  try {
    await Promise.all(
      testData.map((data) =>
        prisma.reviews.create({
          data,
        })
      )
    );
    console.log("🌱 Seed data inserted successfully");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
