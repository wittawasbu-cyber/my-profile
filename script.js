// ดึง Element ต่างๆ มาใช้งาน
const themeToggle = document.getElementById('theme-toggle');
const timeBtn = document.getElementById('time-btn');
const nameInput = document.getElementById('name-input');

// ระบบเมื่อกดปุ่มโหมดกลางคืน
themeToggle.addEventListener('click', () => {
    alert('ระบบกำลังพัฒนาฟังก์ชันโหมดกลางคืนเร็วๆ นี้!');
});

// ระบบเมื่อกดปุ่มขณะนี้เวลา
timeBtn.addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('th-TH');
    alert(`ขณะนี้เวลา: ${timeString}`);
});

// ระบบตรวจจับการพิมพ์ในช่องกรอกข้อความ
nameInput.addEventListener('input', (e) => {
    console.log('ข้อความที่กำลังพิมพ์:', e.target.value);
});