import express, {Express} from "express"
import cors from "cors"

export class Server {

    app: Express;
    port: string | number | undefined

    constructor() {
        this.app = express();
        this.port = 8080;

        this.middlewares()
    }

    middlewares(): void {
        this.app.use(express.json()),
        this.app.use(cors())
    }

    routes(): void{

    }

    listen(): void{
        this.app.listen(this.port, () => {
            console.log(`Corriendo en puerto ${this.port}`);
            
        })
    }

}