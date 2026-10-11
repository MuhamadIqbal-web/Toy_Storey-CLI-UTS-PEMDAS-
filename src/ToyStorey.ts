import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const DiskonMember = 0.07;

let Nama: string;
let Kategori: number;
let Mainan: number;
let NamaMainan: string;
let JumlahBarang: number;
let Harga: number;
let Status: number;
let SubTotal: number;
let Kado: boolean = false;
let BiayaKado: number = 0;
let Total: number = 0;
let DiskonPotongan: number = 0;
let NilaiDiskon: number = 0;

rl.question("Selamat Datang di TOY STOREY! \nSilakan Masukkan Nama Anda: ", (InputNama: string) => {
    Nama = InputNama;
    console.log("Selamat Datang di TOY STOREY " + Nama);

    console.log("\n========== STATUS PEMBELI ==========");
    console.log("1. Member");
    console.log("2. Non-Member");

     rl.question("Pilih Status Anda: ", (InputStatus: string) => {
        Status = Number(InputStatus);
        
    console.log("\n========== KATEGORI MAINAN ==========");
    console.log("1. LEGO");
    console.log("2. ACTION FIGURE");
    console.log("3. REMOTE CONTROL");

    rl.question("Pilih Kategori Mainan: ", (InputKategori: string) => {
        Kategori = Number(InputKategori);

        switch (Kategori) {
            case 1:
                console.log("========== LEGO ==========");
                console.log("1. Lego Batman        : Rp 80.000");
                console.log("2. Lego Star Wars     : Rp 140.000");
                console.log("3. Lego Marvel        : Rp 120.000");
                console.log("4. Lego Indiana Jones : Rp 90.000");
                console.log("5. Lego Ninja Go      : Rp 50.000");
                break;

                case 2:
                    console.log("========== ACTION FIGURE ==========");
                    console.log("1. Madara       : Rp 95.000");
                    console.log("2. Naruto       : Rp 85.000");
                    console.log("3. Itachi       : Rp 90.000");
                    console.log("4. Sasuke       : Rp 85.000");
                    console.log("5. Darth Father : Rp 150.000");
                    console.log("6. Yoda         : Rp 120.000");
                    console.log("7. Spider Man   : Rp 155.000");
                    console.log("8. Iron Man     : Rp 145.000");
                    console.log("9. Batman       : Rp 120.000");
                    break;

                    case 3:
                        console.log("========== REMOTE CONTROL ========== ");
                        console.log("1. Mobil       : Rp 75.000");
                        console.log("2. Helikopter  : Rp 150.000");
                        break;

                        default:
                            console.log("Kategori Tidak Valid!");
                            rl.close();
                            return;
        }

        rl.question("Pilih Maianan Yang Ingin Dibeli: ", (InputMainan: string) => {
            Mainan = Number(InputMainan);

            switch(Kategori) {
                case 1:
                    switch(Mainan) {
                        case 1:
                            NamaMainan = "Lego Batman";
                            Harga = 80000;
                            break;
                            case 2:
                                NamaMainan = "Lego Star Wars";
                                Harga = 140000
                                break;
                                case 3:
                                    NamaMainan = "Lego Marvel"
                                    Harga = 120000
                                    break;
                                    case 4:
                                        NamaMainan = "Lego Indiana Jones"
                                        Harga = 90000
                                        break;
                                        case 5:
                                            NamaMainan = "Lego Ninja Go"
                                            Harga = 50000
                                            break;
                                            default:
                                                console.log("Pilihan Mainan Tidak Valid!");
                                                rl.close;
                                                return;
                    } break;
                    case 2:
                        switch (Mainan) {
                            case 1:
                                NamaMainan = "Madara"
                                Harga = 95000
                                break;
                                case 2:
                                    NamaMainan = "Naruto"
                                    Harga = 85000
                                    break;
                                    case 3:
                                        NamaMainan = "Itachi"
                                        Harga = 90000
                                        break;
                                        case 4:
                                            NamaMainan = "Sasuke"
                                            Harga = 85000
                                            break;
                                            case 5:
                                                NamaMainan = "Darth Father"
                                                Harga = 150000
                                                break;
                                                case 6:
                                                    NamaMainan = "Yoda"
                                                    Harga = 120000
                                                    break;
                                                    case 7:
                                                        NamaMainan = "Spider Man"
                                                        Harga = 155000
                                                        break;
                                                        case 8:
                                                            NamaMainan = "Iron Man"
                                                            Harga = 145000
                                                            break;
                                                            case 9:
                                                                NamaMainan = "Batman"
                                                                Harga = 120000
                                                                break;
                                                                default:
                                                                    console.log("Pilihan Mainan Tidak Valid!");
                                                                    rl.close();
                                                                    return;
                        } break;
                        case 3:
                            switch(Mainan) {
                                case 1:
                                    NamaMainan = "Mobil";
                                    Harga = 75000
                                    break;
                                    case 2:
                                        NamaMainan = "Helikopter";
                                        Harga = 150000;
                                        break;
                                        default:
                                            console.log("Pilihan Mainan Tidak Valid!");
                                            rl.close();
                                            return;
                            } break;
            }
            rl.question("Masukkan Jumlah Mainan Yang Anda Beli: ", (InputJumlah: string) => {
                JumlahBarang = Number(InputJumlah);
                SubTotal = Harga * JumlahBarang;

                console.log("\n========== BUNGKUS KADO ==========");
                console.log("y. Yes");
                console.log("n. No");

                rl.question("Apakah Anda Ingin Dibungkus Kado? ", (InputKado: string) => {
                    Kado = InputKado === "y";

                    if (SubTotal > 120000 || NamaMainan == "Yoda") {
                        DiskonPotongan = 0.1;

                        if (Status === 1) {
                            console.log("\nMember Mendapatkan Diskon 7%");

                            if (Kado) {
                                BiayaKado = 10000;
                            } else {
                                BiayaKado = 0
                            }
                        } else {
                            if (Kado) {
                                BiayaKado = 10000;
                            } else {
                                BiayaKado = 0;
                            }
                        }
                    } else {
                        if (Status === 1) {
                           DiskonPotongan = DiskonMember;
                        }

                        BiayaKado = 0;
                        
                        if (Kado) {
                            BiayaKado = 10000;
                        }
                    }

                    
                    NilaiDiskon = SubTotal * DiskonPotongan
                    Total = SubTotal - NilaiDiskon + BiayaKado
                    
                    console.log("\n================================");
                    console.log("       STRUK TOY STOREY");
                    console.log("================================");
                    console.log("Nama Pembeli   : " + Nama);
                    console.log("Barang         : " + NamaMainan);
                    console.log(`Harga          : Rp${Harga.toLocaleString("id-ID")}`);
                    console.log(`Jumlah         :   ${JumlahBarang.toLocaleString("id-ID")}`);
                    console.log(`Subtotal       : Rp${SubTotal.toLocaleString("id-ID")}`);
                    console.log(`Nilai Diskon   : Rp${NilaiDiskon.toLocaleString("id-ID")}`);
                    console.log(`Biaya Kado     : Rp${BiayaKado.toLocaleString("id-ID")}`);
                    console.log("================================");
                    console.log(`Total Bayar    : Rp${Total.toLocaleString("id-ID")}`);
                    console.log("================================");
                    
                    rl.close();
                })
            })
        })
    })

     })

})