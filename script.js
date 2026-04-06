const gameName = "Game-Us";
let score = 0;
const cards = [
    // --- หมวดเพื่อน (Friends) ---
    { id: 1, category: "friends-game", text: "ใครมึนที่สุดในกลุ่ม? ดื่ม1จิบ" },
    { id: 2, category: "friends-game", text: "ใครเคยบิดเงินยืมเเล้วไม่คืน? ดื่ม1จิบ" },
    { id: 3, category: "friends-game", text: "ใครเคยทำของเพื่อนพังเเต่โทษคนอื่นมั้ย ดื่ม1จิบ"},
    { id: 4, category: "friends-game", text: "ใครที่ใช้เงินเก่งที่สุดในกลุ่ม เเละใช้ไปกับอะไร ดื่ม1จิบ"},
    { id: 5, category: "friends-game", text: "ใครที่โสดนานที่สุดในกลุ่มหรือพูดง่ายๆไม่มีใครเอา ดื่ม1จิบ"},
    { id: 6, category: "friends-game", text: "ใครที่เคยตื่นสายจนผิดนัดเพื่อน ดื่ม1จิบ"},
    { id: 7, category: "friends-game", text: "ใครเป็นไอ่ขี้บิด ที่นัดเมื่อไหร่ ก็บิดไปหมด ดื่ม1จิบ"},
    { id: 8, category: "friends-game", text: "ใครที่มูฟออนไม่ได้ ตามส่องตามตื้อแฟนเก่า แม้เขาจะมีแฟนเเล้ว ดื่ม1จิบ"},
    { id: 9, category: "friends-game", text: "ใครที่เป็นภาระที่สุดในกลุ่ม ดื่ม1จิบ"},
    { id: 10, category: "friends-game", text: "ใครที่เคยแอบเอาขนมหรือกับข้าวเพื่อนไปกินเเล้วไม่บอก ดื่ม1จิบ"},
    { id: 11, category: "friends-game", text: "เปลี่ยนรูปโปรไฟล์ใน Social 1ชั่วโมงโดยให้เพื่อนเป็นคนเลือกภาพที่จะเปลี่ยน"},
    { id: 12, category: "friends-game", text: "โทรไปบอกรักใครก็ได้1คน"},
    { id: 13, category: "friends-game", text: "เล่าเรื่องที่เหี้ยที่สุดเธอเคยทำ"},
    { id: 14, category: "friends-game", text: "หอมเเก้มคนที่นั่งอยู่ด้านขวาของคุณ"},
    { id: 15, category: "friends-game", text: "บอกข้อเสียของเพื่อนเเต่ละคนโดยที่ทุกคนห้ามโกรธ"},
    { id: 16, category: "friends-game", text: "ให้เพื่อนรีวิวตัวคนที่สุ่มได้การ์ดใบนี้ ยังไงก็ได้โดยที่ห้ามโกรธ"},
    { id: 17, category: "friends-game", text: "แร็ปสด1บท"},
    { id: 18, category: "friends-game", text: "โทรไปบอกรักเพื่อนเพศเดียวกันที่ไม่ได้อยู่ในวงนี้"},
    { id: 19, category: "friends-game", text: "เผาเพื่อนสักคนในวงนี้โดยที่ คนนั้นห้ามโกรธ"},
    { id: 20, category: "friends-game", text: "ใครเคยแอบเซฟ รูปพี่น้องของเพื่อน ลงเครื่องตัวเอง ดื่ม1จิบ"},
    { id: 21, category: "friends-game", text: "ใครที่เเม่งขี้ยืมที่สุด เงินสดไม่พก เงินในบัญชีไม่มี ดื่ม1จิบ "},
    { id: 22, category: "friends-game", text: "บอกชื่อพ่อแม่หรือแฟนเก่าให้เพื่อนในกลุ่ม"},
    { id: 23, category: "friends-game", text: "แชร์วีรกรรมตอนเด็กให้ฟัง"},
    { id: 24, category: "friends-game", text: "ใครเคยนัดสาวไว้เเต่บิดไม่ไปตามนัด ดื่ม1จิบ"},
    { id: 25, category: "friends-game", text: "ใครเคยลองของแปลกไปมีใจให้เพศเดียวกัน ดื่ม1จิบ"},
    { id: 26, category: "friends-game", text: "เผาใครก็ได้สักคนที่ไม่ได้อยู่ในวงนี้"},
    { id: 27, category: "friends-game", text: "ดื่มน้ำที่อยู่ในแก้วให้หมด"},
    { id: 28, category: "friends-game", text: "เผาเรื่องของแฟนเก่าให้เพื่อนๆฟัง"},
    { id: 29, category: "friends-game", text: "โทรไปบอก เลิกกันนะ กับใครก็ได้(จะแฟนก้ได้)"},
    { id: 30, category: "friends-game", text: "3นาทีทุกคำที่พูดจะเป็น ก"},

    // --- หมวดแฟน (Darling/Lovers) ---
    { id: 31, category: "darling-game", text: "ของขวัญชิ้นเเรกที่แฟนให้คืออะไร?" },
    { id: 32, category: "darling-game", text: "เรื่องไร้สาระที่สุดที่เคยงอนกัน?" },
    { id: 33, category: "darling-game", text: "นิสัยเล็กๆ น้อยๆ ของเราข้อไหนที่ทำให้ คุณ แอบยิ้มได้เสมอ?" },
    { id: 34, category: "darling-game", text: "อะไรคือสิ่งที่ คุณ อยากขอบคุณเรามากที่สุดตั้งเเต่คบกันมา?" },
    { id: 35, category: "darling-game", text: "เพลงไหนที่ฟังแล้วนึกถึงเรื่องของเราทันที?" },
    { id: 36, category: "darling-game", text: "ถ้าเรามีเวลาว่าง 1 วันเต็มๆ โดยไม่มีมือถือ คุณ อยากไปที่ไหนกับเรา?" },
    { id: 37, category: "darling-game", text: "ข้อดี 3 อย่างที่ เเละข้อเสีย 3 อย่าง ที่คุณเห็นในตัวเรา" },
    { id: 38, category: "darling-game", text: "อะไรคือสิ่งที่ คุณ กังวลที่สุดในตอนนี้ และเราจะช่วยซัพพอร์ตยังไงได้บ้าง?" },
    { id: 39, category: "darling-game", text: "ในสายตา คุณ เราเป็นคนเเบบไหน" },
    { id: 40, category: "darling-game", text: "ความรักในความหมายของคุณคืออะไร" },
    
    // เน้นความเข้าใจและการปรับตัว (Deep Talk)
    { id: 41, category: "darling-game", text: "เวลาที่เราทะเลาะกัน คุณ อยากให้เราเข้าหาด้วยวิธีไหนมากที่สุด?" },
    { id: 42, category: "darling-game", text: "คำพูดไหนของเราที่ทำให้ คุณ รู้สึกมั่นใจในตัวเองมากขึ้น?" },
    { id: 43, category: "darling-game", text: "มีอะไรที่เราเคยทำแล้ว คุณ ไม่ชอบ แต่ยังไม่เคยบอกเราตรงๆ ไหม?" },
    { id: 44, category: "darling-game", text: "ความรักในอุดมคติของ คุณ เปลี่ยนไปไหมตั้งแต่เราคบกัน?" },
    { id: 45, category: "darling-game", text: "เป้าหมายในชีวิตอีก 5 ปีข้างหน้า คุณ เห็นเราอยู่ตรงไหนในภาพนั้นบ้าง?" },
    { id: 46, category: "darling-game", text: "เราควรเพิ่มกิจกรรมอะไรในแต่ละสัปดาห์ เพื่อให้เราใกล้ชิดกันมากขึ้น?" },
    { id: 47, category: "darling-game", text: "อะไรคือ 'Love Language' (ภาษารัก) ที่ คุณ อยากได้รับจากเรามากที่สุด?" },
    { id: 48, category: "darling-game", text: "ถ้าขอพรให้ความสัมพันธ์ของเราได้ 1 ข้อ คุณ จะขออะไร?" },
    { id: 49, category: "darling-game", text: "อะไรคือความภูมิใจที่สุดในตัวเราที่ คุณ อยากบอกให้คนอื่นรู้? ทั้งคู่สามารถแชร์ให้กันได้นะ" },
    { id: 50, category: "darling-game", text: "วันไหนที่ คุณ รู้สึกรักเรามากที่สุดเป็นพิเศษ?" },

    { id: 51, category: "darling-game", text: "สัมผัสแบบไหน (เช่น จับมือ กอด ลูบหัว) ที่ทำให้ คุณ รู้สึกปลอดภัยที่สุด?" },
    { id: 52, category: "darling-game", text: "สิ่งที่คุณอยาก ทำ กับคู่ของคุณคืออะไร" },
    { id: 53, category: "darling-game", text: "จูบแรกของเรา คุณ ให้คะแนนความตื่นเต้นเท่าไหร่ (1-10)?" },

    { id: 54, category: "darling-game", text: "ถ้าเราสลับร่างกันได้ 1 วัน คุณ จะทำอะไรเป็นอย่างแรก?" },
    { id: 55, category: "darling-game", text: "อะไรคือความฝันวัยเด็กที่ คุณ ยังไม่เคยทำ และอยากให้เราพาไปทำ?" },
    { id: 56, category: "darling-game", text: "หนังเรื่องไหนที่อธิบายความสัมพันธ์ของเราได้ดีที่สุด?" },
    { id: 57, category: "darling-game", text: "ถ้าเราต้องติดเกาะร้างด้วยกัน 2 คน คุณ คิดว่าเราจะทำอะไรเป็นลำดับเเรก เเละเราจะรอดได้ไหม?" },
    { id: 58, category: "darling-game", text: "เรื่องตลกที่สุดที่เราเคยทำด้วยกันคือเรื่องอะไร?" },
    { id: 59, category: "darling-game", text: "อะไรคือสิ่งที่ คุณ อยากให้เราทำด้วยกันบ่อยๆ แต่พักหลังมานี้เราไม่ค่อยได้ทำ?" },
    { id: 60, category: "darling-game", text: "คุณ อยากบอก 'รัก' เราด้วยวิธีไหนที่นอกเหนือจากคำพูด?" },
    { id: 121, category: "darling-game", text: "ถามอะไรก้ได้กับแฟน 1ข้อ " },
    { id: 122, category: "darling-game", text: "เธอตกหลุมรักเราที่ตรงไหน" },
    { id: 123, category: "darling-game", text: "ความกลัวที่คุณไม่ค่อยบอกใครคืออะไร และมันเริ่มต้นจากอะไร?" },
    { id: 124, category: "darling-game", text: "ช่วงเวลาที่คุณรู้สึกโดดเดี่ยวที่สุดในชีวิตคือเมื่อไหร่ และคุณผ่านมันมาได้ยังไง?" },
    { id: 125, category: "darling-game", text: "อะไรคือสิ่งเล็ก ๆ ที่เราทำแล้วทำให้คุณรู้สึกถูกรักมากที่สุด?" },
    { id: 126, category: "darling-game", text: "ถ้าวันหนึ่งเรามีปัญหาใหญ่ คุณอยากให้เราจัดการมันแบบไหน?" },
    { id: 127, category: "darling-game", text: "ความสัมพันธ์ในฝันของคุณหน้าตาเป็นยังไง?" },
    { id: 128, category: "darling-game", text: "คุณคิดว่าอะไรคือจุดอ่อนของตัวเองในเรื่องความรัก?" },
    { id: 129, category: "darling-game", text: "ถ้าย้อนเวลากลับไปได้ คุณอยากจะทำอะไรกับตัวเอง และเพราะอะไร?" },
    { id: 130, category: "darling-game", text: "คุณเคยกลัวเสียเราไปไหม และความกลัวนั้นหน้าตาเป็นยังไง?" },
    { id: 131, category: "darling-game", text: "อะไรคือคำพูดที่คุณอยากได้ยินจากเราบ่อย ๆ ?" },
    { id: 132, category: "darling-game", text: "ถ้าเราเงียบหายไป 1 วัน คุณจะคิดอะไรเป็นอย่างแรก?" },
    { id: 133, category: "darling-game", text: "อะไรในวัยเด็กที่หล่อหลอมให้คุณเป็นคุณทุกวันนี้คืออะไร?" },
    { id: 134, category: "darling-game", text: "คุณเชื่อในโชคชะตา หรือเชื่อว่าเราสร้างมันเอง?" },
    { id: 135, category: "darling-game", text: "อะไรคือเส้นบาง ๆ ที่คุณไม่อยากให้แฟนคุณข้าม?" },
    { id: 136, category: "darling-game", text: "เวลาคุณเสียใจลึก ๆ คุณอยากให้เราทำอะไรให้?" },
    { id: 137, category: "darling-game", text: "คุณคิดว่าเราทำอะไรได้ดีในความสัมพันธ์นี้ และอะไรที่ควรพัฒนา?" },
    { id: 138, category: "darling-game", text: "ถ้าวันหนึ่งเราต้องอยู่ไกลกัน คุณคิดว่าอะไรจะช่วยให้เรายังใกล้กัน?" },
    { id: 139, category: "darling-game", text: "อะไรคือความฝันที่คุณยังไม่กล้าพูดออกมาดัง ๆ ?" },
    { id: 140, category: "darling-game", text: "คุณเคยเปลี่ยนแปลงตัวเองเพื่อใครมากเกินไปไหม?" },
    { id: 141, category: "darling-game", text: "คำว่า 'บ้าน' สำหรับคุณหมายถึงอะไร?" },
    { id: 142, category: "darling-game", text: "ถ้าเราทะเลาะกันแรง ๆ คุณอยากให้เราง้อแบบไหน?" },
    { id: 143, category: "darling-game", text: "คุณคิดว่าความรักควรสบายใจมากกว่าตื่นเต้น หรือทั้งสองอย่าง?" },
    { id: 144, category: "darling-game", text: "คุณอยากให้เราเติบโตไปในทิศทางไหนด้วยกัน?" },
    { id: 145, category: "darling-game", text: "อะไรคือสิ่งที่คุณไม่อยากเสียไปจากตัวตนของคุณ แม้จะมีเราเข้ามา?" },
    { id: 146, category: "darling-game", text: "คุณเคยร้องไห้เพราะเราไหม และมันเพราะอะไร?" },
    { id: 147, category: "darling-game", text: "ถ้าเราต้องเลือก 1 อย่างระหว่างความมั่นคงกับความฝัน คุณจะเลือกอะไร?" },
    { id: 148, category: "darling-game", text: "คุณคิดว่าอะไรคือบททดสอบที่ยากที่สุดของความรัก?" },
    { id: 149, category: "darling-game", text: "ในวันที่คุณไม่มั่นใจในตัวเอง คุณอยากให้เราพูดอะไรกับคุณ?" },
    { id: 150, category: "darling-game", text: "อีก 5 ปีข้างหน้า คุณเห็นภาพเราสองคนเป็นแบบไหน?" },



    // --- หมวดครอบครัว (Family) ---
    { id: 61, category: "family-game", text: "วีรกรรมวัยเด็กที่แสบที่สุดคืออะไร?" },
    { id: 62, category: "family-game", text: "เมนูโปรดที่ต้องกินพร้อมหน้ากันคืออะไร?" }
];

let currentMode = "darling-game"; // เก็บชื่อโหมดปัจจุบัน
let tempDeck = [];    // กองไพ่ที่จะถูกจั่วแล้วคัดออก

// 1. ฟังก์ชันตั้งค่าโหมด (เรียกใช้ทันทีที่เข้าหน้าเกมนั้นๆ)
function setMode(modeName) {
    currentMode = modeName;
    // กรองไพ่จาก Master List (cards) มาใส่กองจั่ว (tempDeck)
    tempDeck = cards.filter(card => card.category === modeName);
    
    // อัปเดตชื่อโหมดบนหน้าจอ
    const modeTitle = document.getElementById("mode-title");
    if (modeTitle) {
        modeTitle.innerText = "กำลังเล่นโหมด: " + modeName;
    }
}

// 2. ฟังก์ชันจั่วไพ่ (ใช้ปุ่ม "จั่ว" ปุ่มเดียวได้ทุกโหมด)
function drawCard() {
    // เช็กว่าไพ่ในกองชั่วคราวหมดหรือยัง
    if (tempDeck.length === 0) {
        alert("ไพ่หมดสำรับแล้ว! ระบบจะรีเซ็ตสำรับใหม่ให้ครับ");
        setMode(currentMode); // เติมไพ่กลับเข้ากองเดิม
        return; // ออกจากฟังก์ชันก่อน เพื่อให้ผู้เล่นกดจั่วใหม่อีกรอบ
    }

    // สุ่มเลข Index จากจำนวนไพ่ที่ "เหลืออยู่" ใน tempDeck
    const randomIndex = Math.floor(Math.random() * tempDeck.length);
    
    // ดึงไพ่ออกมา 1 ใบ และ "ลบ" ออกจากกอง (ใช้ .splice)
    const selectedCard = tempDeck.splice(randomIndex, 1)[0];

    // แสดงผลข้อความบนหน้าจอ
    document.getElementById("question-text").innerText = selectedCard.text;
    
    // (Optional) โชว์จำนวนไพ่ที่เหลือใน Console ไว้ดูเล่น
    console.log(`โหมด ${currentMode} เหลือไพ่: ${tempDeck.length} ใบ`);
}