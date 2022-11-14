/*
  Warnings:

  - A unique constraint covering the columns `[reference]` on the table `Property` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floor` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floorCount` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reference` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rentType` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomCount` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surface` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('APPARTMENT', 'HOUSE');

-- CreateEnum
CREATE TYPE "RentType" AS ENUM ('SHARED', 'FULL');

-- CreateEnum
CREATE TYPE "State" AS ENUM ('AVAILABLE', 'UNAVAILABLE');

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "floor" INTEGER NOT NULL,
ADD COLUMN     "floorCount" INTEGER NOT NULL,
ADD COLUMN     "reference" TEXT NOT NULL,
ADD COLUMN     "rentType" "RentType" NOT NULL,
ADD COLUMN     "roomCount" INTEGER NOT NULL,
ADD COLUMN     "surface" INTEGER NOT NULL,
ADD COLUMN     "type" "PropertyType" NOT NULL;

-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "state" "State" NOT NULL DEFAULT 'AVAILABLE',
    "price" DOUBLE PRECISION NOT NULL,
    "utilities" DOUBLE PRECISION NOT NULL,
    "availableFrom" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Property_reference_key" ON "Property"("reference");

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
