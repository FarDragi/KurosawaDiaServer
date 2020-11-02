import { Module } from '@nestjs/common'
import { DataModule } from '@resources/data/data.module'
import { ConfigGateway } from './config.gateway'

@Module({
    imports: [
        DataModule
    ],
    providers: [
        ConfigGateway
    ]
})
export class ConfigModule {

}
