<script>
    import { onMount } from "svelte";
    import { drawCircle } from "./draw";
    export let [width, height] = [300, 300];
    export let [wpos, hpos] = [1, 1];
    export let [l1, l2] = [10, 10];
    let ctx = null;
    let cnv = null;
    let mounted = false;

    onMount(() => {
        ctx = cnv.getContext("2d");
        mounted = true;
    });

    $: if (mounted) {
        cnv.width = width;
        cnv.height = height;
        ctx.clearRect(0, 0, ctx.width, ctx.height);

        ctx.strokeStyle = "red";
        for (let a = 0; a < Math.max(width, height) / 2; a += l1) {
            drawCircle(ctx, a, width / 2, height / 2);
        }
        ctx.strokeStyle = "red";
        for (
            let j = 0;
            j <
            Math.max(
                Math.max(wpos, width - wpos),
                Math.max(hpos, height - hpos)
            );
            j += l2
        ) {
            drawCircle(ctx, j, wpos, hpos);
        }
    }
</script>

<canvas bind:this={cnv} />

<style>
    canvas {
        border: 2px solid rgb(143, 143, 143);
    }
</style>
