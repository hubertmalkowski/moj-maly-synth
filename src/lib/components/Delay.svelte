<script lang="ts">


    import Knob from "./Knob.svelte";
    import {onMount} from "svelte";


    let settingBox : HTMLElement
    let on = false
    let knobColor = "#4F7DD7"

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
            on = true
        }
        else  {
            settingBox.classList.add("disabled")
            onIcon.classList.remove("active")


            on = false
        }

    }



</script>

<div class="setting">
    <div class="settingHeading">delay
        <span class="material-icons" on:click={powerOn} bind:this={onIcon}>power_settings_new</span>
    </div>
    <div bind:this={settingBox} class="settingBox">
        <Knob label="time" color={knobColor}></Knob>
        <Knob label="feed"  color={knobColor} value={50}></Knob>
        <Knob label="feed"  color={knobColor} value={50}></Knob>

    </div>

</div>