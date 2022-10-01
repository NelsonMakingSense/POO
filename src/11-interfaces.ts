// Todo lo que vaya en una interfaz es publico, no hay forma de definir una variable o un metodo privado en una interfaz

export interface Driver {
    database: string;
    password: string;
    port:number;

    connect(): void
    disconnect(): void
    isConnected(name: string): boolean

}

// si queremos definir alguna variable privada la tenemos que definir en la clase que la necesite

// una interfaz declara las variables y el tipo de variables que debe recibir una funcion 

const driver: Driver = {
    database: "",
    password: "",
    port: 0,

    connect: function (): void {
        throw new Error("Function not implemented.");
    },
    disconnect: function (): void {
        throw new Error("Function not implemented.");
    },
    isConnected: function (name: string): boolean {
        throw new Error("Function not implemented.");
    }
}

// para que una clase siga una interface debemos agregar la palabra implements 

class PostgresDriver implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: number,
        private isconected:boolean
    ) {}
    disconnect(): void {
        throw new Error("Method not implemented.");
    }
    isConnected(name: string): boolean {
        throw new Error("Method not implemented.");
    }
    connect(): void {
        throw new Error("Method not implemented.");
    }
    

}

class OracleDriver implements Driver {
    constructor(
       public database: string,
       public password: string,
       public port: number
    ) {

    }
    disconnect(): void {
        throw new Error("Method not implemented.");
    }
    isConnected(name: string): boolean {
        throw new Error("Method not implemented.");
    }
    connect(): void {
        throw new Error("Method not implemented.");
    }
    
}