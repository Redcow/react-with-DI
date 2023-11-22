//import TYPES, { Warrior } from "../../../Domain/types"

import container from "../../../inversify.config"
import TYPES, { type Warrior } from "../../Domain/types";

function WarriorBattle(): JSX.Element {

    const warrior = container.get<Warrior>(TYPES.Warrior)

    return <div>
        <h3>First round</h3>
        <p>{warrior.fight()}</p>

        <h3>Second round</h3>
        <p>{warrior.fight()}</p>

        <h3>Last round</h3>
        <p>{warrior.sneak()}</p>
    </div>
}

export default WarriorBattle;