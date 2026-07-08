// ดึง Element ต่างๆ มาใช้งาน
const nameInput = document.getElementById('name-input');
const displayName = document.getElementById('display-name');
const timeBtn = document.getElementById('time-btn');
const themeToggle = document.getElementById('theme-toggle');

// กำหนดข้อความเริ่มต้น (กรณีลบจนช่องรับข้อความว่างเปล่า)
const defaultName = "ชื่อ นามสกุล";

// ฟังก์ชันรับข้อความจากช่องพิมพ์แล้วเปลี่ยนข้อความด้านบนการ์ด
nameInput.addEventListener('input', (e) => {
    const value = e.target.value;
    
    if (value.trim() !== "") {
        displayName.textContent = value; // เปลี่ยนตามข้อความใหม่ที่พิมพ์
    } else {
        displayName.textContent = defaultName; // หากลบจนว่าง ให้แสดงคำว่า "ชื่อ นามสกุล" เหมือนเดิม
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