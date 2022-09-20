<script lang="ts">

import Knob from "./Knob.svelte";
import {polySynthSetVolume} from "../stores/Synth";


function onVolumeChange(value) {
    polySynthSetVolume(0 - (100 - value.detail) )
}

let color = "#AB4FD7"
</script>

<div>

    <div class="setting">
        <div class="settingHeading">settings</div>
        <div class="settingBox">
            <Knob color={color} value={100} on:adjusting={onVolumeChange} label="volume"></Knob>
            <div class="disabled">
                <Knob color={color}  label="pan (wip)"></Knob>
            </div>
        </div>

    </div>

</div>