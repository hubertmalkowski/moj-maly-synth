<script lang="ts">


    import {createEventDispatcher, onMount} from "svelte";

    const dispatch = createEventDispatcher()





    let path : any;
    let pointer : HTMLElement;

    export let value : number = 0;
        export let maxValue : number =  100;
    export let minValue : number = 0;
    export let step : number = 1;

    export let label : string = "Default"

    export let color : string


    let onClickMouseX : number
    let onClickMouseY : number
    let isClicked = false;
    let knob : HTMLElement;
    function onKnobClick(event) {
        isClicked = true;
        onClickMouseX = event.clientX
        onClickMouseY = event.clientY
        pointer.style.height = "2rem"
        pointer.style.width = "2rem"

        document.onselectstart = () => {return false}
        document.body.style.cursor = "ns-resize"
    }
    function onKnobUnclick() {
        if(isClicked) {
            dispatch("adjusted", value)
        }

        isClicked = false
        pointer.style.height = "1.25rem"
        pointer.style.width = "1.25rem"

        document.onselectstart = () => {return true}
        document.body.style.cursor = "default"




    }
    function onKnobMouseMove(event) {
        if (isClicked) {
            if (event.clientY < onClickMouseY) {
                if (value != maxValue) {
                    value += step
                    pointer.style.offsetDistance = String(parseInt(getComputedStyle(pointer).offsetDistance) + step + "%")

                }
            }
            else if(event.clientY > onClickMouseY) {
                if (value != minValue) {
                    value -= step
                    pointer.style.offsetDistance = String(parseInt(getComputedStyle(pointer).offsetDistance) - step + "%")

                }
            }
            dispatch("adjusting", value)
        }
    }

    onMount(() => {
        dispatch("adjusting", value)

        pointer.style.offsetDistance = value + "%"

        if(color) {
            pointer.style.backgroundColor = color
        }

    })





</script>

<svelte:window on:mouseup={onKnobUnclick} on:mousemove={onKnobMouseMove} />

<div class="knob-wrapper" on:mousedown={onKnobClick} bind:this={knob}>


    <div bind:this={pointer} class="pointer"></div>

    <div class="knob-track" >
        <svg class="path" width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="knobPath">
                    <path d="M32.0641 93.9359C29.6233 96.3767 25.6299 96.3975 23.5125 93.6715C18.7642 87.5584 15.4819 80.402 13.9607 72.7545C12.0315 63.0555 13.0216 53.0021 16.806 43.8658C20.5904 34.7295 26.999 26.9206 35.2215 21.4265C43.4439 15.9325 53.1109 13 63 13C72.8891 13 82.556 15.9325 90.7785 21.4265C99.001 26.9206 105.41 34.7295 109.194 43.8658C112.978 53.0021 113.969 63.0555 112.039 72.7545C110.518 80.402 107.236 87.5584 102.488 93.6715C100.37 96.3975 96.3767 96.3767 93.9359 93.9359V93.9359C91.4952 91.4951 91.5461 87.5619 93.5481 84.75C96.6082 80.452 98.741 75.5365 99.7794 70.3159C101.226 63.0416 100.484 55.5016 97.6455 48.6494C94.8072 41.7971 90.0007 35.9404 83.8339 31.8199C77.667 27.6993 70.4168 25.5 63 25.5C55.5832 25.5 48.333 27.6993 42.1661 31.8199C35.9993 35.9404 31.1928 41.7971 28.3545 48.6494C25.5162 55.5016 24.7736 63.0416 26.2205 70.3159C27.259 75.5365 29.3918 80.452 32.4519 84.75C34.4539 87.5619 34.5048 91.4951 32.0641 93.9359V93.9359Z" fill="#5B5B5B"/>
                </clipPath>
                <clipPath id="pointerPath">
                    <path bind:this={path} d="M31.8141 93.6859C23.6094 85.4812 19 74.3532 19 62.75C19 51.1468 23.6094 40.0188 31.8141 31.8141C40.0188 23.6094 51.1468 19 62.75 19C74.3532 19 85.4812 23.6094 93.6859 31.8141C101.891 40.0188 106.5 51.1468 106.5 62.75C106.5 74.3532 101.891 85.4812 93.6859 93.6859" stroke="black" stroke-width="2" stroke-linecap="round"/>
                </clipPath>
            </defs>

<!--            <path  d="M31.8141 93.6859C23.6094 85.4812 19 74.3532 19 62.75C19 51.1468 23.6094 40.0188 31.8141 31.8141C40.0188 23.6094 51.1468 19 62.75 19C74.3532 19 85.4812 23.6094 93.6859 31.8141C101.891 40.0188 106.5 51.1468 106.5 62.75C106.5 74.3532 101.891 85.4812 93.6859 93.6859" stroke="black" stroke-width="2" stroke-linecap="round"/>-->
        </svg>

    </div>

    <div class="value">{value}</div>
    <div class="label">{label}</div>







</div>


<style>

    .knob-wrapper {
        width: 8rem;
        height: 7.25rem;
        max-height: 10rem;
        max-width: 10rem;
        position: relative;
        cursor: ns-resize;
    }
    .knob-track {
        clip-path: url(#knobPath);
        width: 100%;
        height: 100%;
        background-color: var(--color-knbob-background);
        position: relative;
    }
    .path {
        position: absolute;
        top: 0;
        left: 0;
    }
    .pointer {
        position: absolute;
        height: 1.25rem;
        width: 1.25em;
        background-color: #D74F4F;
        border-radius: 50px;
        offset-path: path("M31.8141 93.6859C23.6094 85.4812 19 74.3532 19 62.75C19 51.1468 23.6094 40.0188 31.8141 31.8141C40.0188 23.6094 51.1468 19 62.75 19C74.3532 19 85.4812 23.6094 93.6859 31.8141C101.891 40.0188 106.5 51.1468 106.5 62.75C106.5 74.3532 101.891 85.4812 93.6859 93.6859");
        offset-distance: 0;
        z-index: 2;
        position: absolute;
        transition: height 0.2s, width 0.2s;
    }
    .value {
        position: absolute;
        text-align: center;
        left: 0;
        width: 100%;
        top: 2.5rem;

        font-family: Inter, sans-serif;
        font-size: 36px;
        font-weight: 500;
        line-height: 44px;
        letter-spacing: 0em;

    }
    .label {
        font-family: Inter, sans-serif;
        font-size: 1rem;
        font-weight: 500;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: center;
        margin-top: -1rem;

    }





</style>