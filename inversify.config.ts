import { Container } from "inversify";
import "reflect-metadata";

import Ninja from "./src/Infrastructre/Warrior/Ninja";
import Katana from "./src/Infrastructre/Weapon/Katana";
import Shuriken from "./src/Infrastructre/Weapon/Shuriken";
import TYPES, { type ThrowableWeapon, type Warrior, type Weapon } from "./src/Domain/types";

const container = new Container;

container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export default container;