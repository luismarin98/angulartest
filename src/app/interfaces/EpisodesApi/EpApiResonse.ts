import { InfoResult } from "../InfoResult";
import { EpisodeResponse } from "./EpisodeResponse";

export interface EpApiResponse {
    info: InfoResult;
    results: EpisodeResponse[];
}