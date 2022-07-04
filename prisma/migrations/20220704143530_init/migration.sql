-- CreateTable
CREATE TABLE "Gym" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "yogaClasses" BOOLEAN NOT NULL,
    "owner" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Gym_name_key" ON "Gym"("name");
