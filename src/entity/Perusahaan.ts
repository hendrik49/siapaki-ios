import {Table, Column, PrimaryGeneratedColumn} from "ionic-orm";

@Table()
export class Perusahaan {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    name: string;

    @Column("text")
    description: string;

    @Column("text")
    type: string;

    @Column()
    fileName: string;

    @Column()
    isPublished: boolean;
}