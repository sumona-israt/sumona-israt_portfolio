import { FallingParticles } from "./FallingParticles";

export function DriftingParticles() {
  return (
    <FallingParticles
      variantClassName="anim-particle-glow"
      count={36}
      size={[2, 5]}
      duration={[14, 26]}
      drift={40}
      spin={0}
      opacity={[0.3, 0.7]}
    />
  );
}

export function FallingPetals() {
  return (
    <FallingParticles
      variantClassName="anim-particle-petal"
      count={22}
      size={[10, 18]}
      duration={[9, 16]}
      drift={90}
      spin={200}
      opacity={[0.6, 0.9]}
    />
  );
}

export function FallingSnow() {
  return (
    <FallingParticles
      variantClassName="anim-particle-snow"
      count={50}
      size={[3, 7]}
      duration={[10, 20]}
      drift={60}
      spin={0}
      opacity={[0.5, 0.9]}
    />
  );
}

export function Rainfall() {
  return (
    <FallingParticles
      variantClassName="anim-particle-rain"
      count={70}
      size={[40, 90]}
      duration={[0.6, 1.2]}
      drift={4}
      spin={0}
      opacity={[0.3, 0.6]}
    />
  );
}

export function FallingLeaves() {
  return (
    <FallingParticles
      variantClassName="anim-particle-leaf"
      count={18}
      size={[12, 20]}
      duration={[11, 19]}
      drift={110}
      spin={320}
      opacity={[0.65, 0.9]}
    />
  );
}
