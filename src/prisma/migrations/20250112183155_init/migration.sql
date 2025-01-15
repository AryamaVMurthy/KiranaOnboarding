/*
  Warnings:

  - You are about to drop the column `appoval` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "order" DROP COLUMN "appoval",
ADD COLUMN     "approval" BOOLEAN NOT NULL DEFAULT false;
