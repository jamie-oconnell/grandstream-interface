-- CreateTable
CREATE TABLE "Phone" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mac_address" TEXT NOT NULL,
    "room_number" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Phone.mac_address_unique" ON "Phone"("mac_address");
