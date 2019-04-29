import util from '@/util';
import itemsSn from '@/items-sn';

describe('Test utils', () => {
  test('it returns the correct recipe', () => {
    expect(util.recipe('Copper_Ore', itemsSn)).toEqual([]);
    expect(util.recipe('Advanced_Wiring_Kit', itemsSn)).toEqual([{ c: 'Wiring_Kit', q: 1 }, { c: 'Gold', q: 2 }, { c: 'Computer_Chip', q: 1 }]);
    expect(util.recipe('Cyclops', itemsSn)).toEqual([{ c: 'Plasteel_Ingot', q: 3 }, { c: 'Enameled_Glass', q: 3 }, { c: 'Lubricant', q: 1 }, { c: 'Advanced_Wiring_Kit', q: 1 }, { c: 'Lead', q: 3 }]);
  });

  test('it returns all the recipes the item is used in', () => {
    expect(util.usedIn('Copper_Ore', itemsSn)).toEqual([{ c: 'Copper_Wire', q: 2 }, { c: 'Battery', q: 1 }, { c: 'Beacon', q: 1 }, { c: 'Gravsphere', q: 1 }, { c: 'Scanner_Room', q: 2 }, { c: 'Solar_Panel', q: 1 }, { c: 'Fabricator', q: 1 }, { c: 'Radio', q: 1 }, { c: 'Scanner_Room_Range_Upgrade', q: 1 }]);
    expect(util.usedIn('Copper_Wire', itemsSn)).toEqual([{ c: 'Computer_Chip', q: 1 }, { c: 'Seaglide', q: 1 }, { c: 'Stillsuit', q: 1 }, { c: 'Compass', q: 1 }, { c: 'Dive_Reel', q: 1 }, { c: 'Water_Filtration_Machine', q: 1 }, { c: 'Vehicle_Upgrade_Console', q: 1 }, { c: 'Battery_Charger', q: 1 }, { c: 'Sign', q: 1 }, { c: 'Picture_Frame', q: 1 }, { c: 'Seamoth_Sonar', q: 1 }, { c: 'Cyclops_Docking_Bay_Repair_Module', q: 1 }, { c: 'Neptune_Gantry', q: 1 }]);
    expect(util.usedIn('Ion_Cube', itemsSn)).toEqual([{ c: 'Ion_Battery', q: 1 }, { c: 'Purple_Tablet', q: 1 }, { c: 'Blue_Tablet', q: 1 }, { c: 'Orange_Tablet', q: 1 }]);
    expect(util.usedIn('Plasteel_Ingot', itemsSn)).toEqual([{ c: 'Nuclear_Reactor', q: 1 }, { c: 'Cyclops', q: 3 }, { c: 'Prawn_Suit', q: 2 }, { c: 'Lightweight_High_Capacity_Tank', q: 1 }, { c: 'Cyclops_Depth_Module_MK2', q: 1 }, { c: 'Cyclops_Depth_Module_MK3', q: 1 }, { c: 'Seamoth_Depth_Module_MK2', q: 1 }, { c: 'Seamoth_Depth_Module_MK3', q: 1 }, { c: 'Prawn_Suit_Depth_Module_MK1', q: 1 }, { c: 'Cyclops_Depth_Module_MK1', q: 1 }, { c: 'Neptune_Gantry', q: 1 }, { c: 'Neptune_Boosters', q: 1 }, { c: 'Neptune_Fuel_Reserve', q: 1 }, { c: 'Neptune_Cockpit', q: 1 }]);
    expect(util.usedIn('Advanced_Wiring_Kit', itemsSn)).toEqual([{ c: 'Nuclear_Reactor', q: 1 }, { c: 'Power_Cell_Charger', q: 1 }, { c: 'Cyclops', q: 1 }, { c: 'Seamoth_Solar_Charger', q: 1 }, { c: 'Prawn_Suit_Grappling_Arm', q: 1 }, { c: 'Cyclops_Shield_Generator', q: 1 }]);
    expect(util.usedIn('Cyclops', itemsSn)).toEqual([]);
  });
});
