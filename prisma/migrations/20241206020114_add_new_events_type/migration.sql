-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "EventType" ADD VALUE 'CAPTCHA1';
ALTER TYPE "EventType" ADD VALUE 'CAPTCHA2';
ALTER TYPE "EventType" ADD VALUE 'CAPTCHA3';
ALTER TYPE "EventType" ADD VALUE 'JEUETAPE1';
ALTER TYPE "EventType" ADD VALUE 'JEUETAPE2';
ALTER TYPE "EventType" ADD VALUE 'JEUETAPE3';
ALTER TYPE "EventType" ADD VALUE 'JEUETAPE4';
ALTER TYPE "EventType" ADD VALUE 'JEUETAPE5';
ALTER TYPE "EventType" ADD VALUE 'VISITESITE';
ALTER TYPE "EventType" ADD VALUE 'CLICKCORPS1';
ALTER TYPE "EventType" ADD VALUE 'CLICKCORPS2';
ALTER TYPE "EventType" ADD VALUE 'CLICKCORPS3';
ALTER TYPE "EventType" ADD VALUE 'CLICKCORPS4';
ALTER TYPE "EventType" ADD VALUE 'CLICKCORPS5';
ALTER TYPE "EventType" ADD VALUE 'CLICKCORPS6';
