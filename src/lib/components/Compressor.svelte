<script lang="ts">


    import Knob from "./Knob.svelte";
    import {onMount} from "svelte";
    import {
        compressorSetRatio,
        compressorSetThreshold,
        connectCompressor, disconnectCompressor,
        polySynthConnectDelay,
        polySynthDelaySetFeedback,
        polySynthDelaySetTime, polySynthDelaySetWet, polySynthDisconnectDelay,
        polySynthDisconnectReverb
    } from "../stores/Synth";


    let settingBox : HTMLElement
    let on = false
    let knobColor = "#4FA6D7"

    let onIcon : HTMLElement;

    onMount(() => {
        if (!on) {
            settingBox.classList.add("disabled")
        }
    })

    function powerOn() {
        if (!on) {
            settingBox.classList.remove("disabled")
            onIcon.classList.add("active")
            connectCompressor()
            on = true
        }
        else  {
            settingBox.classList.add("disabled")
            disconnectCompressor()

            onIcon.classList.remove("active")


            on = false
        }

    }

    function changeThreshold(value) {
        compressorSetThreshold(0 - (100 - value.detail))
    }

    function changeRatio(value) {
        compressorSetRatio(value.detail)
    }



</script>

<div class="setting">
    <div class="settingHeading">compress
        <span class="material-icons" on:click={powerOn} bind:this={onIcon}>power_settings_new</span>
    </div>
    <div bind:this={settingBox} class="settingBox">
        <Knob label="thresh" on:adjusting={changeThreshold} value={100} color={knobColor} ></Knob>
        <Knob label="ratio" on:adjusting={changeRatio} minValue={1} maxValue={20} color={knobColor}  value={10}></Knob>

    </div>

</div>