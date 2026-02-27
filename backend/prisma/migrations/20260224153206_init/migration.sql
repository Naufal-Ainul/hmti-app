-- CreateTable
CREATE TABLE "Aspirasi" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "aspirasi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Aspirasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);
