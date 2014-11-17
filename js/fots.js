var fots = {};

////////////////////////////////////////////////////////////////////////////////////////////////////
// PST Generations
//
// ground
//	non-mechanized - 2xHl
//	mechanized - 1.25xHl
//	artillery - 1.25xHl
//	missile mechanized - 1x0xHl
//	power armor - 1.5xHl
//	air craft - 1.0x or 1.25xHl
//	fieldworks - 3xHl
//	wet naval - 2xHl
//	OAC - 1.0x or 1.25xHl
//	IWU
////////////////////////////////////////////////////////////////////////////////////////////////////
fots.techGenerations = {};
fots.techGenerations[0] = {
	equipmentSpace = {
		ship = 1.25,
		base = 1.875,
		gunboat = 0.9375,
		fighter = 0.625
	}
};
fots.techGenerations[1] = {
	equipmentSpace = {
		ship = 1.5,
		base = 2.25,
		gunboat = 1.125,
		fighter = 0.75
	},
	power = 8
};
fots.techGenerations[1.5] = {
	equipmentSpace = {
		ship = 1.75,
		base = 2.625,
		gunboat = 1.3125,
		fighter = 0.875
	},
	power = 10
};
fots.techGenerations[2] = {
	equipmentSpace = {
		ship = 2,
		base = 3,
		gunboat = 1.5, 
		fighter = 1
	},
	power = 12
};
fots.techGenerations[2.5] = {
	equipmentSpace = {
		ship = 2.25,
		base = 3.375,
		gunboat = 1.6875,
		fighter = 1.125
	},
	power = 14
};
fots.techGenerations[3] = {
	equipmentSpace = {
		ship = 2.5,
		base = 3.75,
		gunboat = 1.875,
		fighter = 1.25
	},
	power = 16
};
fots.techGenerations[3.5] = {
	equipmentSpace = {
		ship = 2.75,
		base = 4.125,
		gunboat = 2.0625,
		fighter = 1.375
	},
	power = 18
};
fots.techGenerations[4] = {
	equipmentSpace = {
		ship = 3,
		base = 4.5,
		gunboat = 2.25
		fighter = 1.5
	},
	power = 20
};
fots.techGenerations[4.5] = {
	equipmentSpace = {
		ship = 3.25,
		base = 4.875,
		gunboat = 2.4375,
		fighter = 1.625
	},
	power = 20
};
fots.techGenerations[5] = {
	equipmentSpace = {
		ship = 3.5,
		base = 5.25,
		gunboat = 2.625,
		fighter = 1.75
	},
	power = 20
};
fots.techGenerations[5.5] = {
	equipmentSpace = {
		ship = 3.75,
		base = 5.625,
		gunboat = 2.8125,
		fighter = 1.875
	},
	power = 20
};
fots.techGenerations[6] = {
	equipmentSpace = {
		ship = 4,
		base = 6,
		gunboat = 3,
		fighter = 2
	},
	power = 20
};
fots.techGenerations[6.5] = {
	equipmentSpace = {
		ship = 4.25,
		base = 6.375,
		gunboat = 3.1875,
		fighter = 2.125
	},
	power = 20
};
fots.techGenerations[7] = {
	equipmentSpace = {
		ship = 4.5,
		base = 6.75,
		gunboat = 3.375,
		fighter = 2.25
	},
	power = 20
};
fots.techGenerations[7.5] = {
	equipmentSpace = {
		ship = 4.75,
		base = 7.125,
		gunboat = 3.5625,
		fighter = 2.375
	},
	power = 20
};
fots.techGenerations[8] = {
	equipmentSpace = {
		ship = 5,
		base = 7.5,
		gunboat = 3.75,
		fighter = 2.5
	},
	power = 20
};

////////////////////////////////////////////////////////////////////////////////////////////////////
// Shipyard Stats
////////////////////////////////////////////////////////////////////////////////////////////////////
fots.shipyard = {};
fots.shipyard.buildRate = 6;
fots.shipyard.hullCapacity = 40;

////////////////////////////////////////////////////////////////////////////////////////////////////
// Pre-built Systems
////////////////////////////////////////////////////////////////////////////////////////////////////
fots.ship = {};

fots.gunboat = {};

fots.base = {};

fots.ground = {};

fots.designs = {};