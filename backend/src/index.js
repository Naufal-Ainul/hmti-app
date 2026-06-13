// import library
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

// load env variables from backend/.env specifically
dotenv.config({ path: path.join(__dirname, "..", ".env") });

// app config
const PORT = process.env.PORT || 5000;
const app = express();

// setup prisma client
const prisma = new PrismaClient();

// Test connection
prisma.$connect()
  .then(() => {
    console.log("✓ Connected to database");
  })
  .catch((err) => {
    console.error("✗ Database connection failed:", err.message);
    console.warn("⚠ Server will start but DB routes will fail until database is available.");
  });

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API is running!");
});

// =========================
// Aspirasi
// =========================
// get aspirasi
app.get("/aspirasi", async (req, res) => {
  try {
    const aspirasi = await prisma.aspirasi.findMany();

    res.json(aspirasi);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// post aspirasi
app.post("/aspirasi", async (req, res) => {
  try {
    const sendAspirasi = req.body;

    const aspirasi = await prisma.aspirasi.create({
      data: {
        name: sendAspirasi.name,
        nim: sendAspirasi.nim,
        email: sendAspirasi.email,
        aspirasi: sendAspirasi.aspirasi,
      },
    });

    res.json({
      data: aspirasi,
      message: "Aspirasi created successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// =========================
// MENTOR SC
// =========================
// get mentor
app.get("/mentor", async (req, res) => {
  try {
    const mentor = await prisma.mentor.findMany();

    res.json(mentor);
  } catch (error) {
    console.error("ERROR MENTOR:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// post mentor
app.post("/mentor", async (req, res) => {
  try {
    const sendMentor = req.body;

    const mentor = await prisma.mentor.create({
      data: {
        name: sendMentor.name,
        role: sendMentor.role,
        imageUrl: sendMentor.imageUrl,
        instagram: sendMentor.instagram,
        github: sendMentor.github,
        linkedin: sendMentor.linkedin,
      },
    });

    res.json({
      data: mentor,
      message: "Mentor created successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// =========================
// MEMBER HMTI
// =========================
// get member
app.get("/member", async (req, res) => {
  try {
    const { department } = req.query;

    const member = await prisma.member.findMany({
      where: department
        ? {
            department,
          }
        : {},
      orderBy: {
        id: "asc",
      },
    });

    res.json(member);
  } catch (error) {
    console.error("ERROR MEMBER:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// post member
app.post("/member", async (req, res) => {
  try {
    const sendMember = req.body;

    const member = await prisma.member.create({
      data: {
        name: sendMember.name,
        role: sendMember.role,
        department: sendMember.department,
        imageUrl: sendMember.imageUrl,
        instagram: sendMember.instagram,
      },
    });

    res.json({
      data: member,
      message: "Member created successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// =========================
// PROKER
// =========================
// get proker
app.get("/proker", async (req, res) => {
  try {
    const proker = await prisma.proker.findMany();

    res.json(proker);
  } catch (error) {
    console.error("ERROR PROKER:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// post proker
app.post("/proker", async (req, res) => {
  try {
    const sendProker = req.body;

    const proker = await prisma.proker.create({
      data: {
        dept: sendProker.dept,
        title: sendProker.title,
        desc: sendProker.desc,
        img: sendProker.img,
      },
    });

    res.json({
      data: proker,
      message: "Proker created successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// start server
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
