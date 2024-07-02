-- AlterTable
ALTER TABLE `patient` MODIFY `birthdate` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `patientsession` MODIFY `sessionDate` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `prescriptionverification` MODIFY `hdTimeStart` VARCHAR(191) NOT NULL,
    MODIFY `hdTimeEnd` VARCHAR(191) NOT NULL;
