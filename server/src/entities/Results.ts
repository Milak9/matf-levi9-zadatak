import { Column, ObjectID, ObjectIdColumn } from "typeorm";
import {Entity} from "typeorm";

@Entity()
export class Results {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    score: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}