import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

let cards = []; 
let currentMode = ""; 
let tempDeck = [];

async function loadCardsFromCloud() {
    try {
        console.log("🔄 กำลังดึงข้อมูลจาก Cloud...");
        const querySnapshot = await getDocs(collection(db, "cards"));
        cards = querySnapshot.docs.map(doc => doc.data());
        console.log("✅ โหลดสำเร็จ!", cards.length, "ใบ");
        
        // แก้ตรงนี้: ต้องมี window. นำหน้า
        if (currentMode) {
            window.setMode(currentMode);
        }
    } catch (error) {
        console.error("❌ ดึงข้อมูลพลาด:", error);
    }
}

window.setMode = function(modeName) {
    currentMode = modeName;
    if (cards.length > 0) {
        tempDeck = cards.filter(card => card.category === modeName);
        console.log(`🎴 เตรียมสำรับโหมด ${modeName}: ${tempDeck.length} ใบ`);
        
        // เช็คเผื่อลืมใส่ ID ใน HTML
        const questionText = document.getElementById("question-text");
        if (questionText && tempDeck.length > 0) {
            questionText.innerText = "โหลดข้อมูลสำเร็จ! กดจั่วได้เลย";
        }
    }
}

window.drawCard = function() {
    if (tempDeck.length === 0) {
        if (currentMode && cards.length > 0) {
            alert("ไพ่หมดสำรับแล้ว! ระบบจะรีเซ็ตใหม่");
            window.setMode(currentMode);
        } else {
            alert("ข้อมูลยังไม่มา หรือไม่มีข้อมูลในโหมดนี้ครับ");
        }
        return;
    }
    const randomIndex = Math.floor(Math.random() * tempDeck.length);
    const selectedCard = tempDeck.splice(randomIndex, 1)[0];
    document.getElementById("question-text").innerText = selectedCard.text;
}

loadCardsFromCloud();