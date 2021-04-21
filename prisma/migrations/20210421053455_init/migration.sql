/*
  Warnings:

  - You are about to drop the column `room_number` on the `Phone` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    FOREIGN KEY ("phone") REFERENCES "Phone" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Phone" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mac_address" TEXT NOT NULL
);
INSERT INTO "new_Phone" ("id", "mac_address") SELECT "id", "mac_address" FROM "Phone";
DROP TABLE "Phone";
ALTER TABLE "new_Phone" RENAME TO "Phone";
CREATE UNIQUE INDEX "Phone.mac_address_unique" ON "Phone"("mac_address");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Room.number_unique" ON "Room"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Room.phone_unique" ON "Room"("phone");
