const daftarBelanja = [
  { nama: "Buku Tulis", harga: 15000, jumlah: 4 },
  { nama: "Pulpen", harga: 5000, jumlah: 10 },
  { nama: "Flashdisk 64GB", harga: 85000, jumlah: 1 },
  { nama: "Tas Ransel", harga: 250000, jumlah: 1 }
];

function hitungSubtotal(items) {
  let subtotal = 0;
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].harga * items[i].jumlah;
  }
  return subtotal;
}

function tentukanDiskon(subtotal) {
  if (subtotal >= 500000) {
    return 10;
  } else if (subtotal >= 250000) {
    return 5;
  }
  return 0;
}

const subtotal = hitungSubtotal(daftarBelanja);
const persenDiskon = tentukanDiskon(subtotal);
const potongan = subtotal * persenDiskon / 100;
const totalBayar = subtotal - potongan;

console.log("Subtotal:", subtotal);
console.log("Diskon (%):", persenDiskon);
console.log("Total bayar:", totalBayar);