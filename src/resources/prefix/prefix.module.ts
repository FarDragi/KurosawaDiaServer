import { Module } from '@nestjs/common'
import { DataModule } from '@resources/data/data.module'
import { PrefixGateway } from './prefix.gateway'

@Module({
    imports: [
        DataModule
    ],
    providers: [
        PrefixGateway
    ]
})
export class PrefixModule {

}
