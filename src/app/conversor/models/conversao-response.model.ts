export class ConversaoResponse{
    constructor(
        public base: string,
        public date: string,
        public rates: any){}
}

// Conversao de dolar para real
// {"base":"USD","date":"2021-09-22","rates":{"BRL":5.25}}
// Devido a alterações da API, só será gratuito a consulta de Euro para outra moeda.