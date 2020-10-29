import nestServer from './server'

init().catch(error => {
    console.log(error)
})

async function init () {
    await nestServer.config()
    await nestServer.start()
}
