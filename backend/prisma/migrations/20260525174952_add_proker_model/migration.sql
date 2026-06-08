-- CreateTable
CREATE TABLE "Proker" (
    "id" SERIAL NOT NULL,
    "dept" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Proker_pkey" PRIMARY KEY ("id")
);
