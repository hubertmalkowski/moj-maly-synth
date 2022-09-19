<script lang="ts">
  import svelteLogo from './assets/svelte.svg'

  import SynthPlayer from "./lib/SynthPlayer.svelte";
  import Knob from "./lib/components/Knob.svelte";

  function log(event) {
      console.log("Adjusted "+ event.detail)
  }
</script>

<main>

  <SynthPlayer>



  </SynthPlayer>



</main>


<style>

  .knobs {
    display: flex;
  }


</style>
