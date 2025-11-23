// =====================
// MULTI-KEY GUI SYSTEM
// =====================

const ALLOWED_KEYS = [
    "key123",
    "testkey",
    "brianVIP",
    "premiumUser1",
    "schoolAccess2025"
];

const CHEAT_URL = "https://cdn.jsdelivr.net/gh/YOURNAME/YOURREPO@latest/cheat.js";

if (window.guiLoaded) return;
window.guiLoaded = true;

// GUI panel
const box = document.createElement("div");
box.style = `
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    background: rgba(20,20,20,0.92);
    padding: 22px;
    border-radius: 14px;
    color: white;
    text-align: center;
    font-family: Arial;
    box-shadow: 0 0 25px rgba(0,0,0,0.6);
    z-index: 999999999999;
`;

box.innerHTML = `
    <h2 style="margin-bottom:15px;">Enter Access Key</h2>
    <input id="keyinput" type="password" placeholder="Key..."
        style="width:90%;padding:10px;border-radius:8px;border:none;font-size:16px;">
    <button id="submitkey"
        style="width:100%;padding:10px;border:none;border-radius:8px;
        background:#4b83ff;color:white;font-size:16px;cursor:pointer;margin-top:12px;">
        Unlock
    </button>
`;

document.body.appendChild(box);

// Key handling
document.getElementById("submitkey").onclick = () => {
    const inputKey = document.getElementById("keyinput").value.trim();

    if (ALLOWED_KEYS.includes(inputKey)) {
        box.innerHTML = "<h2>Loading...</h2>";

        // Load cheat script
        const s = document.createElement("script");
        s.src = CHEAT_URL + "?v=" + Math.random();
        document.body.appendChild(s);

        setTimeout(() => box.remove(), 700);
    } else {
        alert("❌ Incorrect Key");
    }
};
