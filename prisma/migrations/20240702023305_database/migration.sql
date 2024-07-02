-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` VARCHAR(191) NULL,
    `access_token` VARCHAR(191) NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` VARCHAR(191) NULL,
    `session_state` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Patient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bloodTypeId` INTEGER NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `extensionNameId` INTEGER NULL,
    `middleName` VARCHAR(191) NOT NULL,
    `patientAge` INTEGER NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `birthdate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BloodType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bloodType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExtensionName` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `extensionName` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PatientSession` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientId` INTEGER NOT NULL,
    `sessionDate` DATETIME(3) NOT NULL,
    `patientDiagnosisId` INTEGER NOT NULL,
    `safetyCheckId` INTEGER NOT NULL,
    `anticoagulationId` INTEGER NOT NULL,
    `prescriptionVerificationId` INTEGER NOT NULL,
    `ultraFiltrationId` INTEGER NOT NULL,
    `hemodialysisAccessId` INTEGER NOT NULL,
    `conditionOfAccessId` INTEGER NOT NULL,
    `prePostHemoWtVitalId` INTEGER NOT NULL,
    `medicationAdministrationId` INTEGER NOT NULL,
    `additionalInfoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PatientDiagnosis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `treatmentPlan` VARCHAR(191) NOT NULL,
    `chronicDiseaseStage` VARCHAR(191) NOT NULL,
    `maintenanceHemodialysisPerWeek` VARCHAR(191) NOT NULL,
    `patientSessionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SafetyCheck` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientId` INTEGER NOT NULL,
    `conductivity` VARCHAR(191) NOT NULL,
    `selfTest` VARCHAR(191) NOT NULL,
    `airDetector` VARCHAR(191) NOT NULL,
    `bloodLeak` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Anticoagulation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientId` INTEGER NOT NULL,
    `heparin` VARCHAR(191) NOT NULL,
    `lmwh` VARCHAR(191) NOT NULL,
    `nss` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrescriptionVerification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientId` INTEGER NOT NULL,
    `dialyzerSize` VARCHAR(191) NOT NULL,
    `noOfUse` INTEGER NOT NULL,
    `machineNo` VARCHAR(191) NOT NULL,
    `residualTestDone` VARCHAR(191) NOT NULL,
    `hdTimeStart` DATETIME(3) NOT NULL,
    `hdTimeEnd` DATETIME(3) NOT NULL,
    `dhDuration` VARCHAR(191) NOT NULL,
    `hdModality` VARCHAR(191) NOT NULL,
    `dialysateFlow` VARCHAR(191) NOT NULL,
    `hco3MlMin` INTEGER NOT NULL,
    `kplusBathMeqs` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UltraFiltration` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientId` INTEGER NOT NULL,
    `preHdWtKg` INTEGER NOT NULL,
    `dryWtKg` INTEGER NOT NULL,
    `wtGainKg` INTEGER NOT NULL,
    `reinfusionMl` INTEGER NOT NULL,
    `othersMl` INTEGER NOT NULL,
    `totalUfGoalMl` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HemodialysisAccess` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PermanentArteriovenus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientId` INTEGER NOT NULL,
    `hemodialysisAccessId` INTEGER NOT NULL,
    `fistula` VARCHAR(191) NOT NULL,
    `graft` VARCHAR(191) NOT NULL,
    `position` VARCHAR(191) NOT NULL,
    `cannulatonAttemptAB` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TemporaryCatheter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientId` INTEGER NOT NULL,
    `hemodialysisAccessId` INTEGER NOT NULL,
    `ij` VARCHAR(191) NOT NULL,
    `subclavian` VARCHAR(191) NOT NULL,
    `femoral` VARCHAR(191) NOT NULL,
    `permcath` VARCHAR(191) NOT NULL,
    `position` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ConditionOfAccess` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientSessionId` INTEGER NOT NULL,
    `postHemoId` INTEGER NOT NULL,
    `insertionSiteId` INTEGER NOT NULL,
    `catheterPortId` INTEGER NOT NULL,
    `preHemoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PreHemo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bruit` VARCHAR(191) NOT NULL,
    `thrill` VARCHAR(191) NOT NULL,
    `bruise` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PostHemo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bruit` VARCHAR(191) NOT NULL,
    `thrill` VARCHAR(191) NOT NULL,
    `bruise` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InsertionSite` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `normal` VARCHAR(191) NOT NULL,
    `tender` VARCHAR(191) NOT NULL,
    `discharges` VARCHAR(191) NOT NULL,
    `redness` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CatheterPort` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `good_flow` VARCHAR(191) NOT NULL,
    `clotted` VARCHAR(191) NOT NULL,
    `resistance` VARCHAR(191) NOT NULL,
    `no_output` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrePostHemoWtVital` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `preHdId` INTEGER NOT NULL,
    `postHdId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PreHd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rrBpm` INTEGER NOT NULL,
    `hrBpm` INTEGER NOT NULL,
    `t_c` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PostHd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `wtKg` INTEGER NOT NULL,
    `bpMmhg` INTEGER NOT NULL,
    `rrBpm` INTEGER NOT NULL,
    `hrBpm` INTEGER NOT NULL,
    `t_c` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MedicationAdministration` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `medication` VARCHAR(191) NOT NULL,
    `dosage` VARCHAR(191) NOT NULL,
    `medicationRoute` VARCHAR(191) NOT NULL,
    `medicationTime` VARCHAR(191) NOT NULL,
    `medicationSignature` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AdditionalInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `progressNote` VARCHAR(191) NOT NULL,
    `doctorsOrder` VARCHAR(191) NOT NULL,
    `attendingPhysician` VARCHAR(191) NOT NULL,
    `primed` VARCHAR(191) NOT NULL,
    `safetyChecked` VARCHAR(191) NOT NULL,
    `initiated` VARCHAR(191) NOT NULL,
    `monitored` VARCHAR(191) NOT NULL,
    `terminated` VARCHAR(191) NOT NULL,
    `nurseOnDuty` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_bloodTypeId_fkey` FOREIGN KEY (`bloodTypeId`) REFERENCES `BloodType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_extensionNameId_fkey` FOREIGN KEY (`extensionNameId`) REFERENCES `ExtensionName`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatientSession` ADD CONSTRAINT `PatientSession_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatientSession` ADD CONSTRAINT `PatientSession_patientDiagnosisId_fkey` FOREIGN KEY (`patientDiagnosisId`) REFERENCES `PatientDiagnosis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatientSession` ADD CONSTRAINT `PatientSession_safetyCheckId_fkey` FOREIGN KEY (`safetyCheckId`) REFERENCES `SafetyCheck`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatientSession` ADD CONSTRAINT `PatientSession_anticoagulationId_fkey` FOREIGN KEY (`anticoagulationId`) REFERENCES `Anticoagulation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatientSession` ADD CONSTRAINT `PatientSession_prescriptionVerificationId_fkey` FOREIGN KEY (`prescriptionVerificationId`) REFERENCES `PrescriptionVerification`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatientSession` ADD CONSTRAINT `PatientSession_ultraFiltrationId_fkey` FOREIGN KEY (`ultraFiltrationId`) REFERENCES `UltraFiltration`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatientSession` ADD CONSTRAINT `PatientSession_hemodialysisAccessId_fkey` FOREIGN KEY (`hemodialysisAccessId`) REFERENCES `HemodialysisAccess`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatientSession` ADD CONSTRAINT `PatientSession_conditionOfAccessId_fkey` FOREIGN KEY (`conditionOfAccessId`) REFERENCES `ConditionOfAccess`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatientSession` ADD CONSTRAINT `PatientSession_prePostHemoWtVitalId_fkey` FOREIGN KEY (`prePostHemoWtVitalId`) REFERENCES `PrePostHemoWtVital`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatientSession` ADD CONSTRAINT `PatientSession_medicationAdministrationId_fkey` FOREIGN KEY (`medicationAdministrationId`) REFERENCES `MedicationAdministration`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatientSession` ADD CONSTRAINT `PatientSession_additionalInfoId_fkey` FOREIGN KEY (`additionalInfoId`) REFERENCES `AdditionalInfo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PermanentArteriovenus` ADD CONSTRAINT `PermanentArteriovenus_hemodialysisAccessId_fkey` FOREIGN KEY (`hemodialysisAccessId`) REFERENCES `HemodialysisAccess`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TemporaryCatheter` ADD CONSTRAINT `TemporaryCatheter_hemodialysisAccessId_fkey` FOREIGN KEY (`hemodialysisAccessId`) REFERENCES `HemodialysisAccess`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConditionOfAccess` ADD CONSTRAINT `ConditionOfAccess_preHemoId_fkey` FOREIGN KEY (`preHemoId`) REFERENCES `PreHemo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConditionOfAccess` ADD CONSTRAINT `ConditionOfAccess_postHemoId_fkey` FOREIGN KEY (`postHemoId`) REFERENCES `PostHemo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConditionOfAccess` ADD CONSTRAINT `ConditionOfAccess_insertionSiteId_fkey` FOREIGN KEY (`insertionSiteId`) REFERENCES `InsertionSite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConditionOfAccess` ADD CONSTRAINT `ConditionOfAccess_catheterPortId_fkey` FOREIGN KEY (`catheterPortId`) REFERENCES `CatheterPort`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PrePostHemoWtVital` ADD CONSTRAINT `PrePostHemoWtVital_preHdId_fkey` FOREIGN KEY (`preHdId`) REFERENCES `PreHd`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PrePostHemoWtVital` ADD CONSTRAINT `PrePostHemoWtVital_postHdId_fkey` FOREIGN KEY (`postHdId`) REFERENCES `PostHd`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
