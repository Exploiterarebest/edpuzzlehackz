// === CONFIG ===
const VALID_KEYS = [
    "KEY123",
    "VIP123",
    "BRIAN2025"
];

const CHEAT_URL = "https://cdn.jsdelivr.net/gh/Exploiterarebest/edpuzzlehackz@latest/cheat.js";


// === GUI CREATION ===
function showGUI() {
    const box = document.createElement("div");
    box.id = "keyBox";
    box.style = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #1e1e1e;
        padding: 20px;
        border-radius: 12px;
        color: white;
        font-family: Arial;
        z-index: 999999;
        width: 300px;
        text-align: center;
        box-shadow: 0 0 20px #000;
    `;

    box.innerHTML = `
        <h2 style="margin-bottom:10px;">Enter Key</h2>
        <input id="keyInput" placeholder="Enter access key…" 
               style="width:100%;padding:10px;border-radius:8px;border:none;margin-bottom:10px;">
        <button id="submitKey" 
                style="width:100%;padding:10px;border:none;border-radius:8px;background:#4e8cff;color:white;cursor:pointer;">
            Unlock
        </button>
    `;

    document.body.appendChild(box);

    document.getElementById("submitKey").onclick = checkKey;
}

async function checkKey() {
    let key = document.getElementById("keyInput").value.trim();

    if (!VALID_KEYS.includes(key)) {
        alert("Invalid key!");
        return;
    }

    document.getElementById("keyBox").remove();

    // LOAD CHEAT
    let code = await fetch(CHEAT_URL).then(r => r.text());
    eval(code);
}

// Run GUI
showGUI();
