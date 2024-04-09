import { InfoResult } from "../InfoResult";
import { LocationResponse } from "./LocationResponse";

export interface LcApiResponse {
    info: InfoResult;
    results: LocationResponse[];
}