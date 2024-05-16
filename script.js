let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelected = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelected.options[i] = new Option(voice.name, i))
  );
};

voiceSelected.addEventListener("change", () => {
  speech.voice = voices[voiceSelected.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
