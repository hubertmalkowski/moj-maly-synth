<script lang="ts">


    import Knob from "./Knob.svelte";
    import {onMount} from "svelte";
    import {connectDistortion, disconnectDistortion, setDistortion, setDistortionWet} from "../stores/Synth";


    let settingBox : HTMLElement
    let on = false
    let knobColor = "#D74F80"

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
            connectDistortion()
            on = true
        }
        else  {
            settingBox.classList.add("disabled")
            onIcon.classList.remove("active")
            disconnectDistortion()

            on = false
        }

    }

    function onChangeDistortion(value) {
        setDistortion(value.detail )
    }

    function onChangeWet(value) {
        setDistortionWet(value.detail / 100)
    }

</script>

<div class="setting">
    <div class="settingHeading">distortion
        <span class="material-icons" on:click={powerOn} bind:this={onIcon}>power_settings_new</span>
    </div>
    <div bind:this={settingBox} class="settingBox">
        <Knob label="distortion" on:adjusting={onChangeDistortion} color={knobColor} ></Knob>
        <Knob label="wet"  color={knobColor} on:adjusting={onChangeWet} value={50}></Knob>

    </div>

</div>