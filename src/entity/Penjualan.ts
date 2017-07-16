import {Table, Column, PrimaryGeneratedColumn} from "ionic-orm";

@Table()
export class Penjualan {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    namabarang: string;

    @Column("text")
    metodepembayaran: string;
          
    @Column("int")
    hargabarang: number;

    @Column("int")
    jumlahbarang: number;

    @Column("int")
    totalharga: number;

    @Column("text")
    pelanggan: string;

    @Column("text")
    catatan: string;

    @Column("text")
    tanggal: string;
}