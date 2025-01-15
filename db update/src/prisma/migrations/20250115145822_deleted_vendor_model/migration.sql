/*
  Warnings:

  - You are about to drop the `vendor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_vendorId_fkey";

-- DropTable
DROP TABLE "vendor";
