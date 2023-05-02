<script>
    import Canvas from "./lib/Canvas.svelte";
    let sw = 1;
    let sh = 1;
    let l1, l2;
    $: innerWidth = 0;
    $: innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="warapper">
    <div class="input-div">
        X: <input type="range" bind:value={sw} min={0} max={innerWidth - 100} />
        <br />
        Y:
        <input type="range" bind:value={sh} min={0} max={innerHeight - 100} />
        <br />
        Wavelength1 : <input type="range" bind:value={l1} min={1} max={25} />
        <br />
        Wavelength2 : <input type="range" bind:value={l2} min={1} max={25} />
    </div>
    <div class="canvas-div">
        <Canvas
            width={innerWidth - 100}
            height={innerHeight - 100}
            wpos={sw}
            hpos={sh}
            {l1}
            {l2}
        />
    </div>
</div>

<style>
    .wrapper {
        position: relative;
    }

    .input-div {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 1rem;
    }

    .canvas-div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 5rem);
        margin-top: 20rem;
    }

    .Canvas {
        max-width: 100%;
        max-height: 100%;
    }
</style>
