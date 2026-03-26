const LOVE_MESSAGES = {
    perfect: [
        "> TÌNH YÊU CỦA {n1} VÀ {n2} ĐANG GÂY CHÁY BUG HỆ THỐNG! ĐỘ TƯƠNG THÍCH CAO ĐẾN MỨC NGƯỜI YÊU CŨ CŨNG PHẢI KHÓC THÉT. CƯỚI NGAY KẺO LÀM KHỔ CÁC FA KHÁC!",
        "> {n1} VÀ {n2} CHÍNH LÀ CHÂN ÁI CỦA NHAU. SỨC MẠNH TÌNH YÊU NÀY CÓ THỂ ĐÁNH BẠI MỌI FINAL BOSS. ĐỊNH MỆNH ĐÃ KHÓA CHẶT HAI BẠN VÀO MỘT SERVER RIÊNG RỒI!",
        "> CHỈ SỐ DUYÊN NỢ CỦA {n1} DÀNH CHO {n2} LÀ VÔ CỰC. NẾU HAI BẠN KHÔNG ĐẾN VỚI NHAU, HỆ THỐNG SẼ TỰ HỦY VÌ QUÁ PHI LÝ. ĐÂY LÀ PHU THÊ KẾT TÓC TRONG TRUYỀN THUYẾT!",
        "> PHÁT HIỆN LƯỢNG ĐƯỜNG QUÁ TẢI TỪ CẶP ĐÔI {n1} - {n2}. ĐỀ NGHỊ HAI BẠN NGỪNG PHÁT CẨU LƯƠNG TRƯỚC KHI MÀN HÌNH PIXEL NÀY TAN CHẢY VÌ NGỌT NGÀO!"
    ],
    high: [
        "> TỈ LỆ KHỚP LỆNH GIỮA {n1} VÀ {n2} RẤT CAO. CÓ VẺ NHƯ {n1} ĐANG THẦM THƯƠNG TRỘM NHỚ {n2} TỪ RẤT LÂU RỒI, HY VỌNG 2 BẠN SỚM THÀNH ĐÔI!",
        "> {n1} VÀ {n2} CÓ TƯỚNG PHU THÊ RÕ RỆT QUA CÁC ĐIỂM CHẠM CẢM XÚC. HÃY DÀNH THÊM THỜI GIAN ĐỂ THẤU HIỂU NHAU, TÌNH YÊU NÀY SẼ CÒN TIẾN XA HƠN NỮA!",
        "> DỮ LIỆU CHO THẤY {n1} RẤT CÓ VỊ TRÍ QUAN TRỌNG TRONG LÒNG {n2}. ĐỪNG NGẦN NGẠI TRAO ĐI YÊU THƯƠNG ĐỂ NHẬN LẠI NHỮNG ĐIỀU NGỌT NGÀO NHẤT.",
        "> [DỰ ĐOÁN]: NẾU {n1} TỎ TÌNH VỚI {n2} VÀO LÚC NÀY, TỈ LỆ THÀNH CÔNG LÀ 99.9%. 0.1% CÒN LẠI LÀ DO BẠN QUÁ ĐẸP TRAI/XINH GÁI KHIẾN NGƯỜI TA BỊ NGẤT VÌ SỐC!"
    ],
    medium: [
        "> MỐI QUAN HỆ CỦA BẠN VÀ HỌ ĐANG Ở GIAI ĐOẠN RỰC RỠ NHẤT. CHỈ CẦN THÊM MỘT CHÚT DŨNG CẢM NỮA THÔI, HAI BẠN SẼ TRỞ THÀNH CẶP ĐÔI HẠNH PHÚC NHẤT THẾ GIỚI.",
        "> {n1} CẦN \"TẤN CÔNG\" {n2} MẠNH MẼ HƠN NỮA ĐỂ TĂNG TỈ LỆ NÀY!",
        "> CẢM BIẾN PHÁT HIỆN {n1} ĐANG HƠI NHÚT NHÁT TRƯỚC {n2}. ĐỪNG ĐỂ CƠ HỘI TRÔI QUA TRONG TIẾC NUỐI, HÃY MỞ LÒNG MÌNH RA ĐỂ KẾT QUẢ NÀY ĐƯỢC CẢI THIỆN",
        "> CÓ VẺ NHƯ 2 BẠN LÀ OAN GIA NGÕ HẸP RỒI. GHÉT CỦA NÀO TRỜI TRAO CỦA ĐÓ! TÔI DỰ ĐOÁN CHUYỆN TÌNH YÊU CỦA 2 BẠN SẼ THÚ VỊ Y NHƯ TRONG PHIM VẬY",
    ],
    low: [
        "> SAI SỐ QUÁ CAO! CÓ VẺ {n1} VÀ {n2} ĐANG Ở TRONG VÙNG \"FRIENDZONE\" CỰC KỲ NGUY HIỂM. NẾU KHÔNG CẢI THIỆN, HAI BẠN CHỈ CÓ THỂ LÀ TRI KỶ MÀ THÔI.",
        "> KẾT QUẢ PHÂN TÍCH CHO THẤY 2 BẠN GIỐNG NHƯ HAI ĐƯỜNG THẲNG SONG SONG. NHƯNG ĐỪNG LO, ĐÔI KHI OAN GIA NGÕ HẸP LẠI CHÍNH LÀ KHỞI ĐẦU CỦA MỘT TÌNH YÊU ĐẸP!",
        "> CÓ VẺ NHƯ 2 BẠN LÀ OAN GIA NGÕ HẸP RỒI. NHƯNG MÀ KHÔNG SAO, GHÉT CỦA NÀO TRỜI TRAO CỦA ĐÓ! NHƯ THẾ SẼ CÓ 1 CHUYỆN TÌNH RẤT THÚ VỊ",
        "> HỆ THỐNG KHUYÊN {n1} NÊN TÌM CÁCH TIẾP CẬN {n2} THEO MỘT HƯỚNG KHÁC. TÌNH YÊU CẦN SỰ KIÊN TRÌ, ĐỪNG VÌ MỘT CON SỐ THẤP NHƯ THẾ NÀY MÀ BỎ CUỘC!",
    ]
};
function getRandomMessage(score, name1, name2) {
    let category;
    if (score >= 90) category = 'perfect';
    else if (score >= 70) category = 'high';
    else if (score >= 40) category = 'medium';
    else category = 'low';

    const list = LOVE_MESSAGES[category];
    const randomIndex = Math.floor(Math.random() * list.length);
    let msg = list[randomIndex];
    const upperN1 = name1.toUpperCase();
    const upperN2 = name2.toUpperCase();

    return msg.replace(/{n1}/g, upperN1).replace(/{n2}/g, upperN2);
}
function showNotice() {
    const overlay = document.getElementById('noticeOverlay');
    if (overlay) overlay.style.display = 'flex';
}

function closeNotice() {
    const overlay = document.getElementById('noticeOverlay');
    if (overlay) overlay.style.display = 'none';
}

function removeAccents(s) {
    return s.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d").replace(/Đ/g, "D")
        .toLowerCase()
        .replace(/\s+/g, '');
}


function generateDemArray(n1, n2) {
    const combined = removeAccents(n1 + n2);
    const freq = {};

    for (let char of combined) {
        freq[char] = (freq[char] || 0) + 1;
    }

    return Object.values(freq);
}

function boitinhyeu(dem) {
    let currentDem = [...dem];

    while (currentDem.length >= 2) {

        if (currentDem.length === 2) {
            if (currentDem[0] === 0) {
                return currentDem[1] * 10;
            }
            return currentDem[0] * 10 + currentDem[1];
        }

        let temp = [];
        let n = currentDem.length;


        for (let i = 0; i < Math.floor(n / 2); i++) {
            temp.push((currentDem[i] + currentDem[n - 1 - i]) % 10);
        }


        if (n % 2 === 1) {
            temp.push(currentDem[Math.floor(n / 2)]);
        }

        currentDem = temp;
    }


    return currentDem[0] ? currentDem[0] : 0;
}


function startPinkScan() {
    const n1Raw = document.getElementById('name1').value.trim();
    const n2Raw = document.getElementById('name2').value.trim();

    if (!n1Raw || !n2Raw) {
        showNotice();
        return;
    }

    const n1 = n1Raw.toUpperCase();
    const n2 = n2Raw.toUpperCase();

    const dem = generateDemArray(n1, n2);
    const finalScore = boitinhyeu(dem);
    const finalMsg = getRandomMessage(finalScore, n1, n2);

    saveLoveToCloud(n1, n2, finalScore, finalMsg);

    const btn = document.getElementById('btnScan');
    const valDisp = document.getElementById('val'); // Thêm biến này

    btn.disabled = true;
    valDisp.innerHTML = "0"; // RESET số về 0 trước khi chạy

    document.getElementById('loadBox').style.display = 'block';
    document.getElementById('resBox').style.display = 'none';

    const waitTime = (Math.floor(Math.random() * 2) + 2) * 1000;

    setTimeout(() => {
        document.getElementById('loadBox').style.display = 'none';
        document.getElementById('resBox').style.display = 'block';
        document.getElementById('statusMsg').innerHTML = finalMsg;

        // XỬ LÝ NẾU ĐIỂM BẰNG 0
        if (finalScore <= 0) {
            valDisp.innerHTML = "0";
            btn.disabled = false;
            return;
        }

        let count = 0;
        let timer = setInterval(() => {
            count++;
            valDisp.innerHTML = count;
            if (count >= finalScore) {
                clearInterval(timer);
                btn.disabled = false;
            }
        }, 20);
    }, waitTime);
}

