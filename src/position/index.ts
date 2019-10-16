import {startServer} from './server'
import { syncDB } from './orm';
import { connectToBus } from './bus';
import {positionProjector} from './position'

async function startApp() {
    await syncDB();
    await connectToBus();
    positionProjector();
    startServer();
}

startApp();