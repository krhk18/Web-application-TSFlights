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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flights = void 0;
const typeorm_1 = require("typeorm");
let Flights = class Flights {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Flights.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 20 }),
    __metadata("design:type", String)
], Flights.prototype, "origin", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 20 }),
    __metadata("design:type", String)
], Flights.prototype, "destination", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Flights.prototype, "flightnumber", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone'),
    __metadata("design:type", Date)
], Flights.prototype, "depart", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone'),
    __metadata("design:type", Date)
], Flights.prototype, "arrive", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], Flights.prototype, "nonstop", void 0);
Flights = __decorate([
    typeorm_1.Entity()
], Flights);
exports.Flights = Flights;
//# sourceMappingURL=flights.entity.js.map