// ===== State =====
let isDark = false;
 
// ===== Element References =====
const toggleButton = document.querySelector('#theme-toggle');
const footer = document.querySelector('#card-footer');
 
// งานที่3
const nameInput = document.querySelector('#name-input');
const profileName = document.querySelector('#profile-name');

// ===== Event: สลับธีม =====
// สังเกต: ผูก event ใน JS ไม่ใช่ onclick ใน HTML (Separation of Concerns)
toggleButton.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
 
  // ใช้ template literal ตามมาตรฐานของวิชา
  toggleButton.textContent = isDark ? `☀️ โหมดกลางวัน` : `🌙 โหมดกลางคืน`;
});
 
// ===== Footer: ปีอัตโนมัติด้วย template literal =====
const currentYear = new Date().getFullYear();
footer.innerHTML = `
  <div>ทดสอบวิชาหัวข้อพิเศษซอฟต์แวร์</div>
  <div>© ${currentYear} — Deploy ด้วย GitHub Pages 🚀</div>
`;

// ===== Event: เปลี่ยนชื่อตามที่พิมพ์ (งานที่ 3) =====
nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() !== "") {
    // ถ้าพิมพ์อะไรลงไปในกล่อง ให้ชื่อ สกุล ด้านบนเปลี่ยนตามทันที
    profileName.textContent = nameInput.value;
  } else {
    // ถ้าลบในกล่องจนว่างเปล่า ให้กลับมาแสดงคำว่า "ชื่อ สกุล" ตามค่าเริ่มต้นใน HTML
    profileName.textContent = "ชื่อ สกุล";
  }
});