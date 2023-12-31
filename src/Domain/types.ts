export interface Warrior {
    fight(): string;
    sneak(): string;
}

export interface Weapon {
    hit(): string;
}

export interface ThrowableWeapon {
    throw(): string;
}

const TYPES = {
    Warrior: Symbol('Warrior'),
    Weapon: Symbol('Weapon'),
    ThrowableWeapon: Symbol('ThrowableWeapon')
};

export default TYPES;