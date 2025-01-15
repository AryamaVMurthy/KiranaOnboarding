/*
  Warnings:

  - Added the required column `image` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kyc_details` to the `vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "vendor" ADD COLUMN     "kyc_details" JSONB NOT NULL;
