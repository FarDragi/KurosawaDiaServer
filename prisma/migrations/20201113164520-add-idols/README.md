# Migration `20201113164520-add-idols`

This migration has been generated by Gabriel Paulucci at 11/13/2020, 1:45:20 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `discordId` VARCHAR(191) NOT NULL,
UNIQUE INDEX `users.discordId_unique`(`discordId`),
INDEX `users.discordId_index`(`discordId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `guilds` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `discordId` VARCHAR(191) NOT NULL,
    `configId` INT NOT NULL,
UNIQUE INDEX `guilds.discordId_unique`(`discordId`),
UNIQUE INDEX `guilds.configId_unique`(`configId`),
INDEX `guilds.discordId_index`(`discordId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `guildConfigs` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `prefix` VARCHAR(191) NOT NULL DEFAULT '~',
    `lang` VARCHAR(191) NOT NULL DEFAULT 'en-us',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `idols` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `guildId` INT NOT NULL,
    `userId` INT NOT NULL,
UNIQUE INDEX `idols.guildId_userId_unique`(`guildId`,
`userId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

ALTER TABLE `guilds` ADD FOREIGN KEY (`configId`) REFERENCES `guildConfigs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `idols` ADD FOREIGN KEY (`guildId`) REFERENCES `guilds`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `idols` ADD FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201113164220-add-guild-configs..20201113164520-add-idols
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
     provider = "mysql"
-    url = "***"
+    url = "***"
 }
 generator client {
     provider = "prisma-client-js"
@@ -12,8 +12,9 @@
 model User {
     id        Int    @id @default(autoincrement())
     discordId String @unique
+    Idol      Idol[]
     @@index(discordId)
     @@map("users")
 }
@@ -22,8 +23,9 @@
     id        Int         @id @default(autoincrement())
     discordId String      @unique
     configId  Int         @unique
     config    GuildConfig @relation(fields: [configId], references: [id])
+    Idol      Idol[]
     @@index([discordId])
     @@map("guilds")
 }
@@ -35,4 +37,15 @@
     Guild  Guild[]
     @@map("guildConfigs")
 }
+
+model Idol {
+    id      Int   @id @default(autoincrement())
+    guildId Int
+    userId  Int
+    guild   Guild @relation(fields: [guildId], references: [id])
+    user    User  @relation(fields: [userId], references: [id])
+
+    @@unique([guildId, userId])
+    @@map("idols")
+}
```

