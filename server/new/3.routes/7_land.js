"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const img_user_1 = __importDefault(require("../libs/img_user"));
const _7_land_controller_1 = require("../2.controllers/7_land.controller");
//C
router.route('/Controller')
    .post(img_user_1.default.single('image'), _7_land_controller_1.createController)
    .get(_7_land_controller_1.getsController);
//RUD
router.route('/Controller/:id')
    .delete(_7_land_controller_1.deleteController)
    .get(_7_land_controller_1.getupdateController)
    .put(img_user_1.default.single('image'), _7_land_controller_1.updateController);
exports.default = router;
