<script lang="ts">

import Knob from "./Knob.svelte";
import {
    polySynthSetEnvelopeAttack,
    polySynthSetEnvelopeDecay, polySynthSetEnvelopeRelease,
    polySynthSetEnvelopeSustain
} from "../stores/Synth";


function onAttackChange(value) {
    polySynthSetEnvelopeAttack(value.detail / 100)
}
function onDecayChange(value) {
    polySynthSetEnvelopeDecay(value.detail / 100)
}
function onSustainChange(value) {
    polySynthSetEnvelopeSustain(value.detail / 100)
}
function onReleaseChange(value) {
    polySynthSetEnvelopeRelease(value.detail / 100)
}


</script>

<div class="setting">
        <div class="settingHeading">envelope</div>
        <div class="settingBox">
            <Knob label="attack" on:adjusting={onAttackChange}></Knob>
            <Knob label="decay" value={15}  on:adjusting={onDecayChange}></Knob>
            <Knob label="sustain" value={15} on:adjusting={onSustainChange}></Knob>
            <Knob label="release" value={50} on:adjusting={onReleaseChange}></Knob>
        </div>

</div>

<style>


</style>