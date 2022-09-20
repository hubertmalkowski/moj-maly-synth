<script lang="ts">
  import svelteLogo from './assets/svelte.svg'

  import SynthPlayer from "./lib/SynthPlayer.svelte";
  import Knob from "./lib/components/Knob.svelte";
  import Envelope from "./lib/components/Envelope.svelte";
  import Settings from "./lib/components/Settings.svelte";
  import Filter from "./lib/components/Filter.svelte";
  import Reverb from "./lib/components/Reverb.svelte";
  import Delay from "./lib/components/Delay.svelte";
  import Compressor from "./lib/components/Compressor.svelte";

  function log(event) {
      console.log("Adjusted "+ event.detail)
  }
</script>

<main>
  <div class="player">
    <SynthPlayer>
      <div class="settings">
        <div id="Heading">
          Mój <span>mały</span> synth
        </div>
        <div class="firstColumn column">
          <Envelope></Envelope>
        </div>
        <div class="secondColumn column">
          <Settings></Settings>
          <Filter></Filter>
        </div>
        <div class="thirdColumn column">
          <Reverb></Reverb>
          <Delay></Delay>
        </div>
        <div class="fourthColumn column">
          <Compressor></Compressor>
        </div>

      </div>


    </SynthPlayer>
  </div>
  <div class="sizeError">Unfortunately the app works only on desktop devices :(</div>




</main>


<style>

  .settings {
    display: grid;
    grid-template-columns: repeat(5, 6.25rem);
    column-gap: 3.125rem;
    justify-content: center;
    width: 100%;
    padding-top: 1.75rem;
    row-gap: 1.4375rem;
  }

  #Heading {
    grid-column-start: 1;
    grid-column-end: 6;

    font-family: Inter, sans-serif;
    font-size: 2rem;
    font-weight: 500;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: left;


  }

  #Heading span {
    font-family: Inter, sans-serif;
    font-size: 2rem;
    font-weight: 100;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: left;
    font-variation-settings: "slant" -10;
  }
  .firstColumn {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .secondColumn {
    grid-column-start: 2;
    grid-column-end: 3;
  }
  .thirdColumn {
    grid-column-start: 3;
    grid-column-end: 4;
  }
  .fourthColumn {
    grid-column-start: 4;
    grid-column-end: 5;
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }


</style>
