"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightsController = void 0;
const common_1 = require("@nestjs/common");
const flights_service_1 = require("./flights.service");
let FlightsController = class FlightsController {
    constructor(flightService) {
        this.flightService = flightService;
    }
    findAll() {
        return this.flightService.findAll();
    }
    query(orig, dest) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightService.query(orig, dest);
        });
    }
    create(flight) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightService.create(flight);
        });
    }
    findOne(param) {
        return this.flightService.findOne(param.id);
    }
    update(id, flight) {
        return __awaiter(this, void 0, void 0, function* () {
            flight.id = Number(id);
            return this.flightService.update(flight);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightService.delete(id);
        });
    }
    getOrigins() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightService.getFlightOrigins();
        });
    }
    getFlightDestinations() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightService.getFlightDestinations();
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "findAll", null);
__decorate([
    common_1.Get("query/:orig/:dest"),
    __param(0, common_1.Param('orig')), __param(1, common_1.Param('dest')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "query", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "create", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "findOne", null);
__decorate([
    common_1.Post(":id/update"),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "update", null);
__decorate([
    common_1.Post(":id/delete"),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "delete", null);
__decorate([
    common_1.Get("cities/origins"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "getOrigins", null);
__decorate([
    common_1.Get("cities/destinations"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "getFlightDestinations", null);
FlightsController = __decorate([
    common_1.Controller('flights'),
    __metadata("design:paramtypes", [flights_service_1.FlightsService])
], FlightsController);
exports.FlightsController = FlightsController;
//# sourceMappingURL=flights.controller.js.map