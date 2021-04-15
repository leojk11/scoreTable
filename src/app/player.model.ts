import { v4 as uuidv4 } from 'uuid';

export class Player {
    id: string
    name: string
    index: number
    score: number

    constructor(index: number, score: number) {
        this.id = uuidv4();

        this.name = 'Player ' + '#' + index;

        this.index = index;

        this.score = score;
    }
}