import { useCallback, memo, useState, useEffect } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particleOptions from "./particle-options";

const ParticlesEngine = ({playAnimation}: {playAnimation: boolean}) => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    // TODO fix any typing (check library type)
    // eslint-disable-next-line
    const [options, setOptions] = useState<any>(null)

    useEffect(() => {
        if (playAnimation) {
            setOptions(particleOptions)
        } else {
            setOptions(null)
        }
    }, [playAnimation])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            // eslint-disable-next-line
            options={options}
        />
    )
}

export default memo(ParticlesEngine)

