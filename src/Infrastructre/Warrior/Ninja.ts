import { inject, injectable } from "inversify";
import TYPES, { type ThrowableWeapon, type Warrior, type Weapon } from "../../Domain/types";
//import TYPES,  { type ThrowableWeapon, type Warrior, type Weapon } from "../../Domain/types";

@injectable()
class Ninja implements Warrior
{
    private _weapon: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
        @inject(TYPES.Weapon) weapon: Weapon,
        @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
        this._weapon = weapon;
        this._shuriken = shuriken;
    }
    
    fight(): string {
        return this._weapon.hit();
    }

    sneak(): string {
        return this._shuriken.throw();
    }
}

export default Ninja;