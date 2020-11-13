import { Injectable } from '@nestjs/common'
import { PrismaService } from '@resources/prisma/prisma.service'

@Injectable()
export class ConfigService {
    private prisma: PrismaService

    constructor (prisma: PrismaService) {
        this.prisma = prisma
    }

    async setPrefix (guildDiscordId: string, newPrefix: string) {
        return await this.prisma.guild.update({
            where: {
                discordId: guildDiscordId
            },
            data: {
                config: {
                    update: {
                        prefix: newPrefix
                    }
                }
            },
            select: {
                config: true
            }
        })
    }

    async setLang (guildDiscordId: string, newLang: string) {
        return await this.prisma.guild.update({
            where: {
                discordId: guildDiscordId
            },
            data: {
                config: {
                    update: {
                        lang: newLang
                    }
                }
            },
            select: {
                config: true
            }
        })
    }
}
