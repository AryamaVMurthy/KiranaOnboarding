/*
  Warnings:

  - You are about to drop the column `vendorId` on the `order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_vendorId_fkey";

-- AlterTable
ALTER TABLE "order" DROP COLUMN "vendorId";

-- AlterTable
ALTER TABLE "vendor" ALTER COLUMN "mobile_number" SET DATA TYPE BIGINT;
