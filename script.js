function kirimData(event) {
    event.preventDefault(); // Hindari reload halaman

    var name = document.getElementById("nama").value.trim();
    var nim = document.getElementById("nim").value.trim();
    var peminatan = document.querySelector("input[name=pemintan]:checked");
    var alamat = document.getElementById("alamat").value.trim();
    var angkatan = document.getElementById("angkatan").value;
    var tanggal = document.getElementById("tanggal").value;

    // Validasi sederhana
    if (!name || !nim || !peminatan || !alamat || !angkatan || !tanggal) {
        alert("Harap isi semua data terlebih dahulu.");
        return;
    }

    // Tampilkan data dengan template literal
    alert(`
✅ Data berhasil dikirim!

🧑 Nama: ${name}
🎓 NIM: ${nim}
🧭 Peminatan: ${peminatan.value}
🏠 Alamat: ${alamat}
📅 Tanggal Pendaftaran: ${tanggal}
📚 Angkatan: ${angkatan}
    `);

    // Reset otomatis setelah submit
    resetData();
}

function resetData() {
    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
    document.querySelectorAll("input[name=pemintan]").forEach(r => r.checked = false);
    document.getElementById("alamat").value = "";
    document.getElementById("angkatan").selectedIndex = 0;
    document.getElementById("tanggal").value = "";
    document.getElementById("alamat_lengkap").value = "";


    alert("Form telah direset.");
}
