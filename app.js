// 1. Cấu hình Firebase (Giữ nguyên)
const firebaseConfig = {
    apiKey: "AIzaSyARdznVkicujmJ3bxZlvqT5A3YKyA_4sm4",
    authDomain: "lovecalculation-d41c8.firebaseapp.com",
    projectId: "lovecalculation-d41c8",
    storageBucket: "lovecalculation-d41c8.firebasestorage.app",
    messagingSenderId: "1097639474240",
    appId: "1:1097639474240:web:922c854b50b33977d19ba5"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// 2. Hàm lấy dữ liệu (Chỉ thực thi khi gọi)
function loadDatabase() {
    const tableBody = document.getElementById('logTableBody');
    tableBody.innerHTML = "<tr><td colspan='4' style='text-align:center'>LOADING DATA...</td></tr>";

    database.ref('Nhat_ky_tra_cuu').orderByChild('time').once('value', (snapshot) => {
        tableBody.innerHTML = "";

        const data = [];
        snapshot.forEach((childSnapshot) => {
            data.push(childSnapshot.val());
        });

        data.reverse().forEach(item => {
            const row = document.createElement('tr');
            const date = item.time ? new Date(item.time).toLocaleString('vi-VN') : "N/A";
            const scoreClass = item.percent >= 70 ? 'score-high' : (item.percent < 40 ? 'score-low' : '');

            row.innerHTML = `
                    <td>${date}</td>
                    <td>${item.user} <span style="color:var(--pink-neon)">X</span> ${item.crush}</td>
                    <td class="${scoreClass}">${item.percent}%</td>
                    <td class="msg-preview">${item.message}</td>
                `;
            tableBody.appendChild(row);
        });
    }).catch(err => {
        tableBody.innerHTML = `<tr><td colspan="4" style="color:red">ERROR: ${err.message}</td></tr>`;
    });
}
function saveLoveToCloud(n1, n2, score, msg) {
    const eventName = `${n1.replace(/[.#$[\]]/g, "")} - ${n2.replace(/[.#$[\]]/g, "")}`;

    const historyRef = database.ref('Nhat_ky_tra_cuu').child(eventName);

    historyRef.set({
        user: n1.toUpperCase(),
        crush: n2.toUpperCase(),
        percent: score,
        message: msg,
        time: firebase.database.ServerValue.TIMESTAMP
    }).then(() => {
        console.log(`💾 Đã lưu sự kiện: ${eventName}`);
    }).catch((e) => {
        console.error("❌ LỖI KẾT NỐI:", e);
    });
}
function filterTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const tableBody = document.getElementById("logTableBody");
    const tr = tableBody.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            const fullText = td.textContent || td.innerText;
            const normalizedText = fullText.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
            if (normalizedText.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}