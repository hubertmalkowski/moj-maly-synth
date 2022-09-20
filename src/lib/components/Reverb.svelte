<script lang="ts">


import Knob from "./Knob.svelte";
import {onMount} from "svelte";
import {
    polySynthConnectReverb,
    polySynthDisconnectReverb,
    polySynthReverbSetDecay, polySynthReverbSetWet,
} from "../stores/Synth";

let settingBox : HTMLElement
let on = false
let knobColor = "#D7B14F"

onMount(() => {
    if (!on) {
        settingBox.classList.add("disabled")
    }
})

function powerOn() {
    if (!on) {
        settingBox.classList.remove("disabled")
        polySynthConnectReverb()
        on = true
    }
    else  {
        settingBox.classList.add("disabled")
        polySynthDisconnectReverb()
        on = false
    }

}

function setDecay(value) {
    let result = (value.detail == 0) ? 0.1 : value.detail / 10
    polySynthReverbSetDecay(result)
}
function setWet(value) {
    polySynthReverbSetWet(value.detail / 100)
}

</script>

<div class="setting">
    <div class="settingHeading">reverb
        <span class="material-icons" on:click={powerOn}>power_settings_new</span>
    </div>
    <div bind:this={settingBox} class="settingBox">
        <Knob label="decay" color={knobColor} on:adjusting={setDecay}></Knob>
        <Knob label="wet"  color={knobColor} value={50}></Knob>

    </div>

</div>