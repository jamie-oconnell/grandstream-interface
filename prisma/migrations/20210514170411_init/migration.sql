-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Phone" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mac_address" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Unknown',
    "ip" TEXT,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "phone" INTEGER,
    FOREIGN KEY ("phone") REFERENCES "Phone" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Phone.mac_address_unique" ON "Phone"("mac_address");

-- CreateIndex
CREATE UNIQUE INDEX "Room.number_unique" ON "Room"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Room.phone_unique" ON "Room"("phone");
