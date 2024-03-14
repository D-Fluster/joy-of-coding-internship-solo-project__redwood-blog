/*
  Warnings:

  - You are about to drop the column `lastUpdatedAt` on the `BlogPost` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BlogPost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_BlogPost" ("createdAt", "description", "id", "title") SELECT "createdAt", "description", "id", "title" FROM "BlogPost";
DROP TABLE "BlogPost";
ALTER TABLE "new_BlogPost" RENAME TO "BlogPost";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
