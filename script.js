let data = JSON.parse(localStorage.getItem("keuangan")) || [];

function tambahData() {
  const tanggal = document.getElementById("tanggal").value;
  const ket = document.getElementById("keterangan").value;
  const jumlah = parseInt(document.getElementById("jumlah").value);
  const tipe = document.getElementById("tipe").value;

  if (!tanggal || !ket || !jumlah) {
    alert("Lengkapi data!");
    return;
  }

  data.push({ tanggal, ket, jumlah, tipe });
  localStorage.setItem("keuangan", JSON.stringify(data));
  tampilkanData();
}

function tampilkanData() {
  const tabel = document.getElementById("tabelData");
  tabel.innerHTML = "";
  let saldo = 0;

  data.forEach(d => {
    saldo += d.tipe === "masuk" ? d.jumlah : -d.jumlah;
    tabel.innerHTML += `
      <tr>
        <td>${d.tanggal}</td>
        <td>${d.ket}</td>
        <td>${d.tipe}</td>
        <td>Rp ${d.jumlah}</td>
      </tr>
    `;
  });

  document.getElementById("saldo").innerText = "Saldo: Rp " + saldo;
}

tampilkanData();
