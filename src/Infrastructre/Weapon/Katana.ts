import { injectable } from "inversify";
import { type Weapon } from "../../Domain/types";

@injectable()
class Katana implements Weapon
{
    hit(): string {
        return "cut";
    }
}

export default Katana;