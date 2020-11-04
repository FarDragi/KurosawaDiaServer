# Migration `20201104220116-add-idol`

This migration has been generated by Gabriel Paulucci at 11/4/2020, 7:01:16 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `idols` DROP FOREIGN KEY `FK_c6f197629682d996febffedb66d`

ALTER TABLE `idols` DROP FOREIGN KEY `FK_ab176e0ed4a64d16aeab5de6efc`

CREATE TABLE `User` (
`id` int  NOT NULL  AUTO_INCREMENT,
`discordId` varchar(191)  NOT NULL ,
UNIQUE INDEX `User.discordId_unique`(`discordId`),
INDEX `User.discordId_index`(`discordId`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Guild` (
`id` int  NOT NULL  AUTO_INCREMENT,
`discordId` varchar(191)  NOT NULL ,
`configId` int  NOT NULL ,
UNIQUE INDEX `Guild.discordId_unique`(`discordId`),
UNIQUE INDEX `Guild.configId_unique`(`configId`),
INDEX `Guild.discordId_index`(`discordId`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `Idol` (
`id` int  NOT NULL  AUTO_INCREMENT,
`guildId` int  NOT NULL ,
`userId` int  NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

DROP TABLE `guilds`

DROP TABLE `idols`

DROP TABLE `users`

ALTER TABLE `Idol` ADD FOREIGN KEY (`guildId`) REFERENCES `Guild`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `Idol` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201104215933-add-guild..20201104220116-add-idol
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
@@ -12,15 +12,25 @@
 model User {
     id        Int    @id @default(autoincrement())
     discordId String @unique
+    idols     Idol[]
     @@index([discordId])
 }
 model Guild {
     id        Int         @id @default(autoincrement())
     discordId String      @unique
+    idols     Idol[]
     configId  Int         @unique
     @@index([discordId])
 }
+
+model Idol {
+    id      Int   @id @default(autoincrement())
+    guildId Int
+    userId  Int
+    guild   Guild @relation(fields: [guildId], references: [id])
+    user    User  @relation(fields: [userId], references: [id])
+}
```

