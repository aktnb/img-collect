/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Dataset` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Dataset" ALTER COLUMN "description" SET DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Dataset_name_key" ON "Dataset"("name");
