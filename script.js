const speech = new SpeechSynthesisUtterance
speechSynthesis.cancel()
speech.pitch = 1
speech.volume = 1
speech.rate = 1;


let voices;
const textArea = document.querySelector(".text-to-speech")
const playBtn = document.querySelector(".play")
const pauseBtn = document.querySelector(".pause")
const resumeBtn = document.querySelector(".resume")
const stopBtn = document.querySelector(".stop")
const speedController = document.querySelector(".speed-control")
const voiceSelect = document.querySelector(".voice-select")


speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices()
    speech.voice = voices[0]
    voices.forEach((voice,ind)=>{
        const option = document.createElement('option')
        option.text = voice.name
        option.value = ind
        voiceSelect.add(option)
    })
}

speedController.addEventListener('change',function(){
    speech.rate = this.value
})

playBtn.addEventListener('click',function(){
    speech.text = textArea.value
    speechSynthesis.speak(speech)
})
pauseBtn.addEventListener('click',function(){
    speechSynthesis.pause()
})
resumeBtn.addEventListener('click',function(){
    speechSynthesis.resume()
})
stopBtn.addEventListener('click',function(){
    speechSynthesis.cancel()
})

voiceSelect.addEventListener('change',function(){
    speech.voice = voices[this.value]
})