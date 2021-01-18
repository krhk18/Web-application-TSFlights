import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';
export declare class FlightsController {
    private readonly flightService;
    constructor(flightService: FlightsService);
    findAll(): Promise<Flights[]>;
    query(orig: any, dest: any): Promise<any>;
    create(flight: Flight): Promise<Flights[]>;
    findOne(param: any): Promise<Flights[]>;
    update(id: any, flight: Flight): Promise<any>;
    delete(id: any): Promise<any>;
    getOrigins(): Promise<String[]>;
    getFlightDestinations(): Promise<String[]>;
}
