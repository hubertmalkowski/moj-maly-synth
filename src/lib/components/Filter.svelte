<script lang="ts">

    import Knob from "./Knob.svelte";
    import {polySynthSetVolume} from "../stores/Synth";



    let color = "#4FD795"



</script>

<div>

    <div class="setting">
        <div class="settingHeading">filter (wip)</div>
        <div class="settingBox disabled">
            <Knob color={color} value={100} label="high"></Knob>
            <Knob color={color} value={100} label="mid"></Knob>
            <Knob color={color} value={100} label="low"></Knob>
        </div>

    </div>

</div>