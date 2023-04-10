<script lang="ts">
    let isFact: boolean = false;

    const redRender = () => `<div style="color: red">Red Render</div>`;
    const blueRender = () => `<div style="color: blue">Blue Render</div>`;
</script>

<div class="playground-container">
    {@html isFact ? redRender() : blueRender() }
    <button on:click={() => isFact = !isFact}>Change</button>
</div>

<style lang="scss" scoped>
    .playground-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        
        button {
            margin-top: 1rem;
            padding: 1rem;
            border: 1px solid #000;
            border-radius: 24px;
        }
    }
</style>