export const Canvas = (element) => {
  const state = {
    step: 0,
  };

  let ctx;

  const init = () => {
    const canvas = element.querySelector('canvas');

    ctx = canvas.getContext('2d');
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#736766';
  };

  const draw = () => {
    const steps = [
      () => { ctx.moveTo(130, 220); ctx.lineTo(20, 220); },
      () => { ctx.moveTo(20, 30); ctx.lineTo(20, 220); },
      () => { ctx.moveTo(20, 30); ctx.lineTo(90, 30); },
      () => { ctx.moveTo(90, 30); ctx.lineTo(90, 65); },
      () => { ctx.arc(90, 80, 15, 0, 2 * Math.PI); ctx.stroke(); },
      () => { ctx.moveTo(90, 95); ctx.lineTo(90, 150); },
      () => { ctx.moveTo(90, 105); ctx.lineTo(120, 115); },
      () => { ctx.moveTo(90, 105); ctx.lineTo(65, 115); },
      () => { ctx.moveTo(90, 150); ctx.lineTo(70, 185); },
      () => { ctx.moveTo(90, 150); ctx.lineTo(110, 185); },
    ];

    ctx.beginPath();
    steps[state.step]();
    ctx.stroke();

    state.step++;
  };

  const isCanvasCompleted = () => state.step === 9;

  return { init, draw, isCanvasCompleted };
};
