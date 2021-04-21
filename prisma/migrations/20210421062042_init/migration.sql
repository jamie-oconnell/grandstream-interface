-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "phone" INTEGER,
    FOREIGN KEY ("phone") REFERENCES "Phone" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Room" ("id", "number", "phone") SELECT "id", "number", "phone" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE UNIQUE INDEX "Room.number_unique" ON "Room"("number");
CREATE UNIQUE INDEX "Room.phone_unique" ON "Room"("phone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
