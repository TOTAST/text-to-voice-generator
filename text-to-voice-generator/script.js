const text = document.getElementById("text");
const voicesSelect = document.getElementById("voices");
const speakBtn = document.getElementById("speak");
const stopBtn = document.getElementById("stop");

let voices = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();

  voicesSelect.innerHTML = "";

  voices.forEach((voice, index) => {
    const option = document.createElement("option");

    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;

    voicesSelect.appendChild(option);
  });
}

loadVoices();

speechSynthesis.onvoiceschanged = loadVoices;

speakBtn.addEventListener("click", () => {
  const speech = new SpeechSynthesisUtterance(text.value);

  speech.voice = voices[voicesSelect.value];

  speech.rate = 1;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
});

stopBtn.addEventListener("click", () => {
  speechSynthesis.cancel();
});