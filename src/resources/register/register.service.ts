import { Injectable } from '@nestjs/common'
import { PrismaService } from '@resources/prisma/prisma.service'

@Injectable()
export class RegisterService {
    private prisma: PrismaService

    constructor (prisma: PrismaService) {
        this.prisma = prisma
    }

    async registerIdol (guildId: string, userId: string) {
        let idol = await this.prisma.idol.findFirst({
            where: {
                user: {
                    discordId: userId
                },
                guild: {
                    discordId: guildId
                }
            },
            include: {
                guild: {
                    include: {
                        config: true
                    }
                }
            }
        })

        if (!idol) {
            idol = await this.prisma.idol.create({
                data: {
                    guild: {
                        connectOrCreate: {
                            where: {
                                discordId: guildId
                            },
                            create: {
                                discordId: guildId,
                                config: {
                                    create: {}
                                }
                            }
                        }
                    },
                    user: {
                        connectOrCreate: {
                            where: {
                                discordId: userId
                            },
                            create: {
                                discordId: userId
                            }
                        }
                    }
                },
                include: {
                    guild: {
                        include: {
                            config: true
                        }
                    }
                }
            })
        }

        return idol
    }
}
