<script lang="ts">


    import Knob from "./Knob.svelte";
    import {onMount} from "svelte";
    import {
        connectDistortion,
        connectVibrato,
        disconnectDistortion, disconnectVibrato,
        setDistortion,
        setDistortionWet, vibratoSetDepth, vibratoSetFrequency, vibratoSetWet
    } from "../stores/Synth";


    let settingBox : HTMLElement
    let on = false
    let knobColor = "#717B54"

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
            connectVibrato()
            on = true
        }
        else  {
            settingBox.classList.add("disabled")
            onIcon.classList.remove("active")
            disconnectVibrato()
            on = false
        }

    }

    function onChangeFrequency(value) {
        vibratoSetFrequency(value.detail * 100)
    }

    function onChangeDepth(value) {
        vibratoSetDepth(value.detail / 100)
    }
    function onChangeWet(value) {
        vibratoSetWet(value.detail / 100)
    }


</script>

<div class="setting">
    <div class="settingHeading">weirder
        <span class="material-icons" on:click={powerOn} bind:this={onIcon}>power_settings_new</span>
    </div>
    <div bind:this={settingBox} class="settingBox">
        <Knob label="frequency" on:adjusting={onChangeFrequency}  color={knobColor} ></Knob>
        <Knob label="depth"  on:adjusting={onChangeDepth} color={knobColor}  ></Knob>
        <Knob label="wet" on:adjusting={onChangeWet} color={knobColor}  value={50}></Knob>

    </div>

</div>