let isFirefox = typeof InstallTrigger !== 'undefined';
const words = "The Web Designer";
let ANGLE = 0;
const ANIMATION_DURATION = 4000;
const RADIUS = 150; // circle ka size

// Animation loop
const animation = () => {
  ANGLE += 1; // clockwise

  document.querySelectorAll(".spiral .character").forEach((el, i) => {
    const total = words.length;
    const angle = (i * (360 / total)) + ANGLE; // har letter ka apna angle
    const rad = angle * Math.PI / 180;

    const x = Math.cos(rad) * RADIUS;
    const y = Math.sin(rad) * RADIUS;
    const scale = (Math.cos(rad) * 0.5) + 0.8;

    el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
  });

  requestAnimationFrame(animation);
};

// Character creation (no const assignment!)
words.split("").forEach((char, i) => {
  const createElement = (offset) => {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.setAttribute("data-offset", offset);

    const delayVal = -(i * (ANIMATION_DURATION / 16) - offset);
    div.style.animationDelay = `${delayVal}ms`;

    return div;
  };

  document.querySelector("#spiral").append(createElement(0));
  document
    .querySelector("#spiral2")
    .append(createElement((isFirefox ? 1 : -1) * (ANIMATION_DURATION / 2)));
});

// Run animation always (fallback for Firefox too)
animation();
