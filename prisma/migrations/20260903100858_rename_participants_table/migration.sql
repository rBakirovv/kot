/*
  Warnings:

  - You are about to drop the `_ConversationParticipants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ConversationParticipants" DROP CONSTRAINT "_ConversationParticipants_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConversationParticipants" DROP CONSTRAINT "_ConversationParticipants_B_fkey";

-- DropTable
DROP TABLE "_ConversationParticipants";

-- CreateTable
CREATE TABLE "_conversation_participants" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_conversation_participants_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_conversation_participants_B_index" ON "_conversation_participants"("B");

-- AddForeignKey
ALTER TABLE "_conversation_participants" ADD CONSTRAINT "_conversation_participants_A_fkey" FOREIGN KEY ("A") REFERENCES "conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_conversation_participants" ADD CONSTRAINT "_conversation_participants_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
