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
exports.FlightsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const flights_entity_1 = require("./flights.entity");
let FlightsService = class FlightsService {
    constructor(flightRepository) {
        this.flightRepository = flightRepository;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightRepository.find();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightRepository.findOne(id);
        });
    }
    query(orig, dest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.flightRepository.find({ origin: orig, destination: dest });
        });
    }
    create(flight) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.flightRepository.save(flight);
        });
    }
    update(flight) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.flightRepository.update(flight.id, flight);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.flightRepository.delete(id);
        });
    }
    getFlightOrigins() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightRepository.query("SELECT DISTINCT origin FROM flights");
        });
    }
    getFlightDestinations() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightRepository.query("SELECT DISTINCT destination FROM flights");
        });
    }
};
FlightsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(flights_entity_1.Flights)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FlightsService);
exports.FlightsService = FlightsService;
//# sourceMappingURL=flights.service.js.map