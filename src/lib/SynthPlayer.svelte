<script lang="ts">


    import {getSynth, polySynth} from "./stores/Synth";
    import {afterUpdate} from "svelte";


    let keyboard = {
        a : false,
        w : false,
        s : false,
        e : false,
        d : false,
        f : false,
        t : false,
        g : false,
        y : false,
        h : false,
        u : false,
        j : false,
        k : false,
        l : false
    }

    let octave = 4



    //Switch cases is a temporary solution
    //@todo more objective solution to key mapping

    function onKeyDown(event) {
        switch (event.key) {
            case ("a"):

                if (!keyboard.a) {
                    getSynth().triggerAttack("C" + octave);
                    keyboard.a = true
                }
                break;
            case ("w"):

                if (!keyboard.w) {
                    getSynth().triggerAttack("C#" + octave);
                    keyboard.w = true
                }
                break;

            case ("s"):

                if (!keyboard.s) {
                    getSynth().triggerAttack("D" + octave);
                    keyboard.s = true
                }
                break;

            case ("e"):

                if (!keyboard.e) {
                    getSynth().triggerAttack("D#" + octave);
                    keyboard.e = true
                }
                break;

            case ("d"):

                if (!keyboard.d) {
                    getSynth().triggerAttack("E" + octave);
                    keyboard.d = true
                }
                break;

            case ("f"):

                if (!keyboard.f) {
                    getSynth().triggerAttack("F" + octave);
                    keyboard.f = true
                }
                break;

            case ("t"):

                if (!keyboard.t) {
                    getSynth().triggerAttack("F#" + octave);
                    keyboard.t = true
                }
                break;

            case ("g"):

                if (!keyboard.g) {
                    getSynth().triggerAttack("G" + octave);
                    keyboard.g = true
                }
                break;

            case ("y"):

                if (!keyboard.y) {
                    getSynth().triggerAttack("G#" + octave);
                    keyboard.y = true
                }
                break;

            case ("h"):

                if (!keyboard.h) {
                    getSynth().triggerAttack("A" + octave);
                    keyboard.h = true
                }
                break;
            case ("u"):

                if (!keyboard.u) {
                    getSynth().triggerAttack("A#" + octave);
                    keyboard.u = true
                }
                break;
            case ("j"):

                if (!keyboard.j) {
                    getSynth().triggerAttack("B" + octave);
                    keyboard.j = true
                }
                break;

            case ("k"):

                if (!keyboard.k) {
                    getSynth().triggerAttack("C" + (octave + 1));
                    keyboard.k = true
                }
                break;

            case ("l"):

                if (!keyboard.l) {
                    getSynth().triggerAttack("D" + (octave + 1));
                    keyboard.l = true
                }
                break;


            case ("x"):
                octave += 1
                break;
            case ("z"):
                octave -= 1
                break;




        }

    }
    function onKeyUp(event) {
        switch (event.key) {
            case("a"):
                if (keyboard.a) {
                    getSynth().triggerRelease("C" + octave);
                    keyboard.a = false
                }
                break;
            case ("w"):

                if (keyboard.w) {
                    getSynth().triggerRelease("C#" + octave);
                    keyboard.w = false
                }
                break;
            case ("s"):

                if (keyboard.s) {
                    getSynth().triggerRelease("D" + octave);
                    keyboard.s = false
                }
                break;

            case ("e"):

                if (keyboard.e) {
                    getSynth().triggerRelease("D#" + octave);
                    keyboard.e = false
                }
                break;

            case ("d"):

                if (keyboard.d) {
                    getSynth().triggerRelease("E" + octave);
                    keyboard.d = false
                }
                break;

            case ("f"):

                if (keyboard.f) {
                    getSynth().triggerRelease("F" + octave);
                    keyboard.f = false
                }
                break;

            case ("t"):

                if (keyboard.t) {
                    getSynth().triggerRelease("F#" + octave);
                    keyboard.t = false
                }
                break;

            case ("g"):

                if (keyboard.g) {
                    getSynth().triggerRelease("G" + octave);
                    keyboard.g = false
                }
                break;

            case ("y"):

                if (keyboard.y) {
                    getSynth().triggerRelease("G#" + octave);
                    keyboard.y = false
                }
                break;

            case ("h"):

                if (keyboard.h) {
                    getSynth().triggerRelease("A" + octave);
                    keyboard.h = false
                }
                break;
            case ("u"):

                if (keyboard.u) {
                    getSynth().triggerRelease("A#" + octave);
                    keyboard.u = false
                }
                break;
            case ("j"):

                if (keyboard.j) {
                    getSynth().triggerRelease("B" + octave);
                    keyboard.j = false
                }
                break;

            case ("k"):

                if (keyboard.k) {
                    getSynth().triggerRelease("C" + (octave + 1));
                    keyboard.k = false
                }
                break;
            case ("l"):

                if (keyboard.l) {
                    getSynth().triggerRelease("D" + (octave + 1));
                    keyboard.l = false
                }
                break;




        }

    }
</script>


<svelte:window on:keydown={onKeyDown} on:keyup={onKeyUp}/>

<div>
    <span class="info">Current octave: {octave}</span>
    <slot></slot>
</div>