import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user'})

export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    hobby:string;

    @Column()
    place:string;

    



    


    


   

}

