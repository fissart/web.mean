"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const img_collection_1 = __importDefault(require("../libs/img_collection"));
const _31_NOTAS_controller_1 = require("../2.controllers/31_NOTAS.controller");
//C
router.route('/')
    .post(img_collection_1.default.single('image'), _31_NOTAS_controller_1.createController)
    .get(_31_NOTAS_controller_1.getsController);
//RUD
router.route('/:id')
    .delete(_31_NOTAS_controller_1.deleteController)
    .get(_31_NOTAS_controller_1.getupdateController)
    .put(img_collection_1.default.single('image'), _31_NOTAS_controller_1.updateController);
exports.default = router;
