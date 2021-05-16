/*
  Warnings:

  - Added the required column `updatedAt` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "phoneid" INTEGER,
    "updatedAt" DATETIME NOT NULL,
    FOREIGN KEY ("phoneid") REFERENCES "Phone" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Room" ("id", "number", "phoneid") SELECT "id", "number", "phoneid" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE UNIQUE INDEX "Room.number_unique" ON "Room"("number");
CREATE UNIQUE INDEX "Room.phoneid_unique" ON "Room"("phoneid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
