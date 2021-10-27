const biografiSingkat = (nama: string, usia: number) => {
    return `Halo nama saya ${nama}, saya berusia ${usia} tahun`
}

type tuples = [string, number, string]

const ihsan = biografiSingkat('Ihsan', 20);
const aldo = biografiSingkat("Aldo", 10)