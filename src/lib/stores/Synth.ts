import * as Tone from 'tone'


const filter = new Tone.Filter(0, "lowpass").toDestination()
const reverb = new Tone.Reverb(4).toDestination()
const compressor = new Tone.Compressor().toDestination()
const distortion = new Tone.Distortion().toDestination()

const delay = new Tone.FeedbackDelay(0.3, 0.5).toDestination()

export const polySynth = new Tone.PolySynth().toDestination()
polySynth.set({
    oscillator:{
        type: "sine"
    }
})




export function getSynth() {
    // console.log(polySynth.get())
    return polySynth;
}
export function polySynthSetEnvelopeAttack(value : number) {
    polySynth.set({
        envelope: {
            attack: value
        }
    });
}
export function polySynthSetEnvelopeDecay(value : number) {
    polySynth.set({
        envelope: {
            decay: value
        }
    })
}
export function polySynthSetEnvelopeSustain(value : number) {
    polySynth.set({
        envelope: {
            sustain: value
        }
    })
}

export function polySynthSetEnvelopeRelease(value : number) {
    polySynth.set({
        envelope: {
            release: value
        }
    })
}
export function polySynthSetVolume(value: number) {


    polySynth.volume.value = value
}


export function polySynthSetHighPass(value : number) {
    polySynth.set({

    })
}

export function polySynthConnectReverb() {
    polySynth.connect(reverb)
}
export function polySynthDisconnectReverb() {
    polySynth.disconnect(reverb)
}

export function polySynthReverbSetDecay(value : number) {
    reverb.set({
        decay: value
    })
}

export function polySynthReverbSetWet(value : number) {
    reverb.set({
        wet: value
    })
}

export function polySynthConnectDelay() {
    polySynth.connect(delay)
}

export function polySynthDisconnectDelay() {
    polySynth.disconnect(delay)
}

export function polySynthDelaySetTime(value : number) {
    delay.set({
        delayTime: value
    })
}

export function polySynthDelaySetFeedback(value : number) {
    delay.set({
        feedback: value
    })
}

export function polySynthDelaySetWet(value: number) {
    delay.set({
        wet: value
    })
}

export function connectCompressor() {
    polySynth.connect(compressor)
}

export function disconnectCompressor() {
    polySynth.disconnect(compressor)
}

export function compressorSetThreshold(value : number) {
    compressor.set({
        threshold: value
    })
}
export function compressorSetRatio(value : number) {
    compressor.set({
        ratio: value
    })
}

export function connectDistortion() {
    polySynth.connect(distortion)
}
export function disconnectDistortion() {
    polySynth.disconnect(distortion)
}

export function setDistortion(value : number) {
    distortion.set({
        distortion: value
    })
}
export function setDistortionWet(value : number) {
    distortion.set({
        wet: value
    })
}
