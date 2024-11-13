async function animate(ref, delay = 0) {
  if (ref.current) {
    const sr = (await import("scrollreveal")).default;
    sr().reveal(ref.current, {
      distance: "50px",
      delay: 100 + delay,
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    });
  }
}

export default animate;
