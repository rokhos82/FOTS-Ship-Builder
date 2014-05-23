fots.design = function(type,subtype,hull,techGen) {
	this.type = type;
	this.subtype = subtype;
	this.hull = hull;
	this.techGen = techGen;
	this.equipmentSpace = this.hull * fots.techGenerations[this.techGen][this.type];
	this.equipment = {};
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// FOTS Unit Design Object
//	type - ship, base, gunboat, fighter, ground
//	subtype - depends on type.  For example, freighter or STL ship or mobile base.
//	hull - the hull size for the design
//	techGen - technology generation for the design
//	equipmentSpace = amount of equipment space the hull has given the tech generation.
////////////////////////////////////////////////////////////////////////////////////////////////////