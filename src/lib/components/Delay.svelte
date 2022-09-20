<script lang="ts">


    import Knob from "./Knob.svelte";
    import {onMount} from "svelte";
    import {
        polySynthConnectDelay,
        polySynthDelaySetFeedback,
        polySynthDelaySetTime, polySynthDelaySetWet, polySynthDisconnectDelay,
        polySynthDisconnectReverb
    } from "../stores/Synth";


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
            polySynthConnectDelay()
            on = true
        }
        else  {
            settingBox.classList.add("disabled")
            polySynthDisconnectDelay()

            onIcon.classList.remove("active")


            on = false
        }

    }

    function changeTime(value) {
        polySynthDelaySetTime(value.detail / 100)
    }
    function changeFeedback(value) {
        polySynthDelaySetFeedback(value.detail / 100)
    }
    function changeWet(value) {
        polySynthDelaySetWet(value.detail / 100)

    }



</script>

<div class="setting">
    <div class="settingHeading">delay
        <span class="material-icons" on:click={powerOn} bind:this={onIcon}>power_settings_new</span>
    </div>
    <div bind:this={settingBox} class="settingBox">
        <Knob label="time" color={knobColor} on:adjusting={changeTime}></Knob>
        <Knob label="feed"  color={knobColor} on:adjusting={changeFeedback} value={50}></Knob>
        <Knob label="feed"  color={knobColor} on:adjusting={changeWet} value={50}></Knob>

    </div>

</div>