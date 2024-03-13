import { Universe } from "wasm-game";

const pre =  document.getElementById('game-canvas');
const universe = Universe.new();

const renderLoop = () => {
    pre.textContent = universe.render()
    universe.tick();
    requestAnimationFrame(renderLoop);
}

requestAnimationFrame(renderLoop);