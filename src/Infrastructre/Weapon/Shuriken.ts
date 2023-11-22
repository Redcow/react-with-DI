import { injectable } from "inversify";
import { type ThrowableWeapon } from "../../Domain/types";

@injectable()
class Shuriken implements ThrowableWeapon
{
    throw(): string {
        return "hit";
    }
}

export default Shuriken;