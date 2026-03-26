// 1. Cấu hình - Lấy từ Firebase Console > Project Settings
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

// 3. Hàm gửi dữ liệu (Viết hoa toàn bộ trước khi lưu)
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


const tableBody = document.getElementById('logTableBody');

        database.ref('Nhat_ky_tra_cuu').orderByChild('time').once('value', (snapshot) => {
            tableBody.innerHTML = ""; // Xóa dòng loading
            
            const data = [];
            snapshot.forEach((childSnapshot) => {
                data.push(childSnapshot.val());
            });

            // Đảo ngược để người mới nhất hiện lên đầu
            data.reverse().forEach(item => {
                const row = document.createElement('tr');
                
                // Chuyển timestamp thành ngày giờ đọc được
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
            tableBody.innerHTML = `<tr><td colspan="4" style="color:red">LỖI: ${err.message}</td></tr>`;
        });