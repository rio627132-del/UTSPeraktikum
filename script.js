// 1. Data Dinamis (Array of Objects)
let eventServices = [
    { id: 1, title: "Wedding Organizer", price: "Mulai 25jt" },
    { id: 2, title: "Corporate Seminar", price: "Mulai 10jt" },
    { id: 3, title: "Music Festival", price: "Mulai 50jt" },
    { id: 4, title: "Private Party", price: "Mulai 5jt" }
];

const cardList = document.getElementById('service-list');

// 2. Fungsi Render Layanan (DOM Manipulation)
function renderCards() {
    cardList.innerHTML = ""; // Bersihkan kontainer
    
    eventServices.forEach(item => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.innerHTML = `
            <h3>${item.title}</h3>
            <p style="color:#2563eb; font-weight:700; margin:10px 0;">${item.price}</p>
            <button class="btn-del" onclick="removeCard(${item.id})">Hapus Layanan</button>
        `;
        cardList.appendChild(cardDiv);
    });
}

// 3. Fungsi Hapus Item (Tanpa Reload)
function removeCard(id) {
    eventServices = eventServices.filter(service => service.id !== id);
    renderCards();
}

// 4. Validasi Form JavaScript
const form = document.getElementById('eventForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isFormValid = true;

    // Ambil Data Input
    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    // Reset Pesan Error
    document.querySelectorAll('.error-msg').forEach(msg => msg.innerText = "");

    // Validasi Nama
    if (nameInput.value.trim() === "") {
        document.getElementById('nameError').innerText = "Nama tidak boleh kosong!";
        isFormValid = false;
    }

    // Validasi Email (Format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        document.getElementById('emailError').innerText = "Format email tidak valid!";
        isFormValid = false;
    }

    // Validasi Angka Positif (Phone)
    if (phoneInput.value === "" || phoneInput.value <= 0) {
        document.getElementById('phoneError').innerText = "Nomor telepon harus angka positif!";
        isFormValid = false;
    }

    // Final Action
    if (isFormValid) {
        alert("Pendaftaran Berhasil Dikirim!");
        form.reset();
    }
});

// Jalankan fungsi saat halaman dimuat
renderCards();
