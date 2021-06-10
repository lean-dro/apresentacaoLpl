var btEx1Audio = document.getElementById("btEx1Audio")
var btEx2Audio = document.getElementById("btEx2Audio")
var btEx3Audio = document.getElementById("btEx3Audio")
var btEx4Audio = document.getElementById("btEx4Audio")
var btOQAudio = document.getElementById("btOQAudio")
var som = new Audio()
var paused = true

btOQAudio.onclick = function(){
	som.src = "audios/intro.wav"
	som.load()
	if(paused){
		som.play()
		paused = false
		btOQAudio.src = "img/stop.png"
	}else{
		som.pause()
		paused = true
		btOQAudio.src = "img/audio-icon.png"
	}
}

btEx1Audio.onclick = function(){
	som.src = "audios/ex1.wav"
	som.load()
	if(paused){
		som.play()
		paused = false
		btEx1Audio.src = "img/stop.png"
	}else{
		som.pause()
		paused = true
		btEx1Audio.src = "img/audio-icon.png"
	}
}


btEx2Audio.onclick = function(){
	som.src = "audios/ex2.wav"
	som.load()
	if(paused){
		som.play()
		paused = false
		btEx2Audio.src = "img/stop.png"
	}else{
		som.pause()
		paused = true
		btEx2Audio.src = "img/audio-icon.png"
	}
}

btEx3Audio.onclick = function(){
	som.src = "audios/ex3.wav"
	som.load()
	if(paused){
		som.play()
		paused = false
		btEx3Audio.src = "img/stop.png"
	}else{
		som.pause()
		paused = true
		btEx3Audio.src = "img/audio-icon.png"
	}
}

btEx4Audio.onclick = function(){
	som.src = "audios/ex4.wav"
	som.load()
	if(paused){
		som.play()
		paused = false
		btEx4Audio.src = "img/stop.png"
	}else{
		som.pause()
		paused = true
		btEx4Audio.src = "img/audio-icon.png"
	}
}

som.onended = function(){
	paused = true;
	btOQAudio.src = "img/audio-icon.png"
	btEx1Audio.src = "img/audio-icon.png"
	btEx2Audio.src = "img/audio-icon.png"
	btEx3Audio.src = "img/audio-icon.png"
	btEx4Audio.src = "img/audio-icon.png"
	console.log("Terminou", som.src)
} 