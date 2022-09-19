import * as Tone from 'tone'


export const polySynth = new Tone.PolySynth().toDestination()



export function getSynth() {
    return polySynth;
}
export function polySynthSetEnvelope() {
    polySynth.set({
        envelope: {
            attack: 0.25
        }
    });
}