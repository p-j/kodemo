/*
  Warnings:

  - You are about to drop the column `availableFrom` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the `Feature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PropertyFeature` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[propertyId,from,duration]` on the table `Listing` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[propertyId,src]` on the table `Picture` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bedroomCount` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PropertyFeature" DROP CONSTRAINT "PropertyFeature_featureId_fkey";

-- DropForeignKey
ALTER TABLE "PropertyFeature" DROP CONSTRAINT "PropertyFeature_propertyId_fkey";

-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "availableFrom",
ADD COLUMN     "duration" TEXT,
ADD COLUMN     "from" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "bedroomCount" INTEGER NOT NULL,
ADD COLUMN     "hasElevator" BOOLEAN,
ADD COLUMN     "totalSurface" DOUBLE PRECISION;

-- DropTable
DROP TABLE "Feature";

-- DropTable
DROP TABLE "PropertyFeature";

-- CreateIndex
CREATE UNIQUE INDEX "Listing_propertyId_from_duration_key" ON "Listing"("propertyId", "from", "duration");

-- CreateIndex
CREATE UNIQUE INDEX "Picture_propertyId_src_key" ON "Picture"("propertyId", "src");
