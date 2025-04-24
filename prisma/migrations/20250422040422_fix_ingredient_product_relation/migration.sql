/*
  Warnings:

  - You are about to drop the `_IngredientToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_IngredientToProduct" DROP CONSTRAINT "_IngredientToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_IngredientToProduct" DROP CONSTRAINT "_IngredientToProduct_B_fkey";

-- DropTable
DROP TABLE "_IngredientToProduct";

-- CreateTable
CREATE TABLE "_ProductIngredient" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductIngredient_AB_unique" ON "_ProductIngredient"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductIngredient_B_index" ON "_ProductIngredient"("B");

-- AddForeignKey
ALTER TABLE "_ProductIngredient" ADD CONSTRAINT "_ProductIngredient_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductIngredient" ADD CONSTRAINT "_ProductIngredient_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
