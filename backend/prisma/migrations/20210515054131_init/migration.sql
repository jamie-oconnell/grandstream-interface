/*
  Warnings:

  - You are about to drop the column `phone` on the `Room` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Room.phone_unique";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "phoneid" INTEGER,
    FOREIGN KEY ("phoneid") REFERENCES "Phone" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Room" ("id", "number") SELECT "id", "number" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE UNIQUE INDEX "Room.number_unique" ON "Room"("number");
CREATE UNIQUE INDEX "Room.phoneid_unique" ON "Room"("phoneid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
