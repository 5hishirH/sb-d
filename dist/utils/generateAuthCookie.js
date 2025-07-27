"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuthCookie = void 0;
const jwt_1 = require("./jwt");
const constants_1 = require("../config/constants");
const generateAuthCookie = (userId, res) => {
    const accessToken = (0, jwt_1.generateToken)(userId.toString());
    res.cookie("zenith", accessToken, constants_1.cookieOptions);
};
exports.generateAuthCookie = generateAuthCookie;
//# sourceMappingURL=generateAuthCookie.js.map