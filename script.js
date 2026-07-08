// ดึง Element ต่างๆ มาใช้งาน
const themeToggle = document.getElementById('theme-toggle');
const timeBtn = document.getElementById('time-btn');
const nameInput = document.getElementById('name-input');
const displayName = document.getElementById('display-name');

// กำหนดชื่อเริ่มต้นไว้
const defaultName = "wittawas Bunsaenyou";

// ฟังก์ชันเปลี่ยนชื่อตามกล่องข้อความที่พิมพ์
nameInput.addEventListener('input', (e) => {
    const value = e.target.value.trim();
    
    if (value !== "") {
        displayName.textContent = value; // เปลี่ยนเป็นข้อความที่พิมพ์
    } else {
        displayName.textContent = defaultName; // ถ้าลบจนว่าง ให้ใช้ชื่อเริ่มต้น
    }
});

// ระบบเมื่อกดปุ่มขณะนี้เวลา
timeBtn.addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('th-TH');
    alert(`ขณะนี้เวลา: ${timeString}`);
});

// ระบบเมื่อกดปุ่มโหมดกลางคืน
themeToggle.addEventListener('click', () => {
    alert('ระบบกำลังพัฒนาฟังก์ชันโหมดกลางคืนเร็วๆ นี้!');
});